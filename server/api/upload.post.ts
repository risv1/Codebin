import { eq } from "drizzle-orm";
import jwt from "jsonwebtoken";
import { v4 as uuid } from "uuid";
import { db } from "~/database/db";
import { files } from "~/database/schema";
import { User } from "~/models/users";
import { UploadS3 } from "~/utils/bucket";

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, "token") as string;
    if (!token) {
      return {
        statusCode: 401,
        message: "Unauthorized",
      };
    }
    const user = jwt.verify(token, "secret") as User;
    if (!user) {
      return {
        statusCode: 401,
        message: "Unauthorized",
      };
    }
    const body = await readBody(event);
    const id = uuid();
    const created_at = new Date().toISOString();

    const file = {
      id: id,
      name: body.name,
      created_at: created_at,
      data: body.data,
    };

    const fileDataDb = {
      id: id,
      fileName: file.name,
      uploadedBy: user.id,
      created_at: created_at,
      updated_at: created_at,
    };

    const [nameExists] = await db.select().from(files).where(eq(files.fileName, file.name))
    if (nameExists) {
      return {
        statusCode: 400,
        message: "File with the same name already exists",
      };
    }

    const [pushDb] = await db.insert(files).values(fileDataDb);
    if (pushDb === 0) {
      return {
        statusCode: 500,
        message: "Couldn't upload file to database",
      };
    }

    try {
      UploadS3(file.name, file.data);
      console.log(file);

      return {
        statusCode: 200,
        message: "File uploaded successfully",
      };
    } catch (e) {
      console.error(e);
      return {
        statusCode: 500,
        message: "Couldn't upload file to S3",
      };
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 401,
      message: "Unauthorized",
    };
  }
});
