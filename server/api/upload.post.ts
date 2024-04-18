import jwt from "jsonwebtoken"
import { v4 as uuid } from "uuid"
import { UploadS3 } from "~/utils/bucket";

export default defineEventHandler(async (event) => {
    try {
        const token = getCookie(event, "token") as string;
        if(!token){
            return {
                statusCode: 401,
                message: "Unauthorized"
            };
        }
        const user = jwt.verify(token, "secret");
        if (!user) {
        return {
            statusCode: 401,
            message: "Unauthorized"
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
    }
    
    UploadS3(file.name, file.data);
    console.log(file);

    return {
        statusCode: 200,
        message: "File uploaded successfully",
      };

    } catch (e) {
        console.error(e);
        return {
        statusCode: 401,
        message: "Unauthorized"
        };
    }
});