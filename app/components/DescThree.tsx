import { Link, useNavigate } from "@remix-run/react";
import cloud from "public/cloud.png";

const DescThree = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{ borderTopRightRadius: "20rem" }}
      className="w-full h-full bg-sky-300 flex justify-center items-center"
    >
      <div className="w-2/3 h-4/5 bg-white shadow-sm shadow-gray-500 mt-32 rounded flex flex-row">
        <div className="w-1/2 h-full flex justify-center items-center items p-8 flex-col">
          <div className="w-4/5 self-center">
            <h1 className="text-3xl text-black font-bold">
              Codebin is built keeping accessibility in mind
            </h1>
          </div>
          <div className="w-2/3 self-center">
            <img
              src={cloud}
              alt="Cloud"
              className="hover:cursor-pointer"
              onClick={() => navigate("/upload")}
            />
          </div>
        </div>
        <div className="w-1/2 h-full flex justify-center p-8">
          <div className="w-2/3 h-full flex justify-center items-center flex-col gap-3">
            <h2 className="text-black text-2xl font-semibold">
              Get started with Codebin
            </h2>
            <p className="text-black text-xl font-light mt-2">
              Sign in with credentials to gain access to modifying priveleges.
            </p>
            <Link
              to={"/login"}
              className="mb-24 pl-7 pr-7 pt-2 pb-2 hover:bg-opacity-100 bg-opacity-90 bg-black text-white rounded-full self-start font-bold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescThree;
