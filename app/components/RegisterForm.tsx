import { Form } from "@remix-run/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const RegisterForm = () => {
    return(
        <div className="w-full h-full flex">
            <div className="w-full h-full flex-col flex justify-center items-center gap-3">
                <h1 className="pt-7 text-3xl font-bold self-center">Register</h1>
                <Form method="post" className="mt-16 w-full flex gap-5 flex-col h-full">
                    <Input name="name" className="w-2/3 self-center" type="text" placeholder="Name" />
                    <Input name="email" className="w-2/3 self-center" type="email" placeholder="Email" />
                    <Input name="password" className="w-2/3 self-center" type="password" placeholder="Password" />
                    <Button className="w-2/3 self-center">Register</Button>
                </Form>
            </div>
        </div>
    )
}

export default RegisterForm;