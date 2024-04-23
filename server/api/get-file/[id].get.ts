import jwt from "jsonwebtoken";
import { eq } from "drizzle-orm";
import { db } from "~/database/db";
import { files } from "~/database/schema";
import { FetchOneS3 } from "~/utils/bucket";

export default defineEventHandler(async (event) => {
    try {
        const id: string = event.context.params?.id as string;
        console.log(id)
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
    
        const [fetchedFile] = await db.select().from(files).where(eq(files.id, id));
        if (!fetchedFile) {
        console.log("No files found");
        return {
            statusCode: 404,
            message: "No files found",
        };
        } else {

            const file = await FetchOneS3(fetchedFile.fileName)
            console.log("file from s3:", file)
            if(!file) {
                return {
                    statusCode: 404,
                    message: "No files found",
                };
            }

        const filesData = {
            id: fetchedFile.id,
            fileName: fetchedFile.fileName,
            fileData: file,
        }
    
        return {
            statusCode: 200,
            message: "Success, files fetched",
            file: filesData,
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