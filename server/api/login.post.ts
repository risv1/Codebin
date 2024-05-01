import bcrypt from "bcrypt"
import { eq } from "drizzle-orm"
import jwt from "jsonwebtoken"
import { db } from "~/database/db"
import { users } from "~/database/schema"

export default defineEventHandler(async(event)=>{
    try{
        const body = await readBody(event)

        const [user] = await db.select().from(users).where(eq(users.email, body.email))
        if(!user){
            return {
                statusCode: 404,
                message: "User not found"
            }
        }
        const passwordMatch = await bcrypt.compare(body.password, user.password)
        if (!passwordMatch) {
            return {
              statusCode: 401,
              message: "Password does not match",
            };
          }

        const token = jwt.sign(user, "secret", {expiresIn: "24h"})
        
        setCookie(event, "token", token, {httpOnly: true, sameSite: true})

        return{
            statusCode: 200,
            message: "Login successful",
            user: {
                email: user.email,
                name: user.name
            }
        }

    } catch(e){
        console.error(e)
        return{
            statusCode: 500,
            message: "Internal server error"
        }
    }
})