import { Form } from "@remix-run/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export async function action ({ request }: { request: Request }){    
    const formData = await request.formData()
    const userData = Object.fromEntries(formData)
    console.log(userData)

}

const LoginForm = () => {
    return(
        <div className="w-full h-full flex">
            <div className="w-full h-full flex-col flex justify-center items-center gap-3">
                <h1 className="pt-5 text-3xl font-bold self-center">Login</h1>
                <Form method="post" className="mt-16 w-full flex gap-5 flex-col h-full">
                    <Input name="email" className="w-2/3 self-center" type="email" placeholder="Email" />
                    <Input name="password" className="w-2/3 self-center" type="password" placeholder="Password" />
                    <Button className="w-2/3 self-center">Login</Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;