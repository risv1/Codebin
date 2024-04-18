import jwt from "jsonwebtoken"
import { FetchAllS3 } from "~/utils/bucket";

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

    const files = await FetchAllS3();
    console.log(files);

    return {
        statusCode: 200,
        message: files,
      };

    } catch (e) {
        console.error(e);
        return {
        statusCode: 401,
        message: "Unauthorized"
        }
    }   
})