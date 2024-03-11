import React from "react";
import { Input } from "./ui/input";
import { Form } from "@remix-run/react";

const TextForm = () => {
  const options = [
    { value: "c", label: "C" },
    { value: "cpp", label: "C++" },
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
    { value: "javascript", label: "JavaScript" },
    { value: "typescript", label: "TypeScript" },
    { value: "ruby", label: "Ruby" },
    { value: "php", label: "PHP" },
    { value: "swift", label: "Swift" },
    { value: "kotlin", label: "Kotlin" },
    { value: "rust", label: "Rust" },
    { value: "go", label: "Go" },
    { value: "scala", label: "Scala" },
    { value: "perl", label: "Perl" },
    { value: "r", label: "R" },
    { value: "shell", label: "Shell" },
    { value: "csharp", label: "C#" },
  ];

  const handleTab = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = e.currentTarget.selectionStart;
      const end = e.currentTarget.selectionEnd;
      const value = e.currentTarget.value;
      e.currentTarget.value = `${value.substring(0, start)}\t${value.substring(
        end
      )}`;
      e.currentTarget.selectionStart = e.currentTarget.selectionEnd = start + 1;
    }
  };

  return (
    <Form method="post" className="w-full h-full flex p-5">
      <div className="w-1/2 h-full border-4 border-gray-800 rounded">
        <textarea
          name="data"
          onKeyDown={handleTab}
          className="w-full h-full p-5 bg-black focus:outline-none text-gray-300 font-semibold text-xl"
          placeholder="Enter your text here"
        />
      </div>
      <div className="w-1/2 h-full p-5 flex flex-col bg-gray-800">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-3xl font-bold p-5 text-white ">
            Upload Settings
          </h1>
          <div className="flex w-2/3 flex-col gap-5">
            <div className="w-full flex flex-col gap-1">
              <label className="text-white text-xl" htmlFor="filetype">
                File Type
              </label>
              <select
                className="bg-gray-700 pl-5 text-xl text-white w-full h-14 rounded"
                name="filetype"
                required
              >
                {options.map((option) => (
                  <option
                    className="pl-10 text-white text-xl"
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full flex flex-col">
              <label className="text-white text-xl" htmlFor="title">
                Title
              </label>
              <Input
                className="bg-gray-700 text-white text-xl pl-5 w-full h-14 rounded"
                name="title"
                required
              />
            </div>
            <div className="w-full flex flex-col">
              <label className="text-white text-xl" htmlFor="password">
                Password
              </label>
              <Input
                className="bg-gray-700 text-white text-xl pl-5 w-full h-14 rounded"
                name="Password"
              />
            </div>
            <button className="border-2 rounded text-xl flex justify-center mt-3 items-center bg-gray-600 text-white font-semibold w-32 h-12" >Submit</button>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default TextForm;
