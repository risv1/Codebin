import jwt from "jsonwebtoken";
import { db } from "~/database/db";
import { files } from "~/database/schema";

export default defineEventHandler(async (event) => {
  try {
    const token = getCookie(event, "token") as string;
    if (!token) {
      return {
        statusCode: 401,
        message: "Unauthorized",
      };
    }
    const user = jwt.verify(token, "secret");
    if (!user) {
      return {
        statusCode: 401,
        message: "Unauthorized",
      };
    }

    const allFiles = await db.select().from(files);
    if (allFiles.length === 0) {
      console.log("No files found");
      return {
        statusCode: 404,
        message: "No files found",
      };
    } else {
      const filesData = allFiles.map((file) => [file.id, file.fileName]);

      return {
        statusCode: 200,
        message: "Success, files fetched",
        files: filesData,
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
