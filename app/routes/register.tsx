import RegisterForm from "~/components/RegisterForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "@remix-run/react";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const userData = Object.fromEntries(formData);

  userData.id = uuidv4();

  const user = JSON.stringify(userData);
  console.log(user);
  return user;
}

const Login = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-fit border border-gray-500 shadow-lg shadow-gray-500 rounded-xl">
        <Tabs defaultValue="register" className="w-full p-3">
          <TabsList className="w-full h-2/3 flex justify-between">
            <div
              onClick={() => navigate("/login")}
              className="w-1/2 hover:cursor-pointer text-base font-semibold flex justify-center items-center"
            >
              Login
            </div>
            <TabsTrigger className="w-1/2" value="register">
              Register
            </TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <RegisterForm />
          </TabsContent>
        </Tabs>
        <div className="w-full flex justify-center items-center">
          <p className="font-bold self-center pb-4">or</p>
        </div>
        <div className="w-full justify-center items-center flex mb-5">
          <div className="hover:cursor-pointer hover:bg-sky-400 duration-200 ease-in-out w-2/3 p-3 bg-sky-500 flex justify-center items-center rounded-md">
            <p className="self-center text-white font-semibold">
              Sign in with Google
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
