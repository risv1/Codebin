import { ReactNode } from "react";

const LoadedFiles = (props: {children: ReactNode}) => {
  return (
    <div className="w-full h-full flex flex-col bg-black">
      <div className="w-full h-[40%] flex bg-sky-300 justify-center">
        <div className="mt-20 absolute w-4/5 h-4/5 bg-white overflow-y-auto rounded p-8">
          <h1 className="text-3xl font-semibold text-black">Loaded Files</h1>
          <div className="w-full h-full flex flex-col mt-10">
                {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadedFiles;
