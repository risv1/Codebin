import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";
import { users } from "~/database/schema";
import { db } from "~/database/db";

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    const id = uuidv4();
    const created_at = new Date().toISOString();

    const data = {
      id: id,
      name: body.name,
      email: body.email,
      password: await hashPassword(body.password),
      created_at: created_at,
    };

    const user = await db
      .insert(users)
      .values({
        ...body,
        id: data.id,
        name: data.name,
        email: data.email,
        password: data.password,
        created_at: data.created_at,
        updated_at: data.created_at,
      });

      if(user){
        console.log(user)
      }else{
        console.error("Not pushed to db")
      }

  } catch (e: any) {
    console.error("bro errors: ", e);
    return {
      statusCode: 500,
      message: "Internal server error",
    };
  }
});