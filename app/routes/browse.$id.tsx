import { useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";

export async function loader() {
  const files = [
    {
      id: "1",
      title: "file1",
      filetype: "txt",
      password: "password1",
      data: "data1",
    },
    {
      id: "2",
      title: "file2",
      filetype: "txt",
      password: "password2",
      data: "data2",
    },
    {
      id: "3",
      title: "file3",
      filetype: "txt",
      password: "password3",
      data: "data3",
    },
    {
      id: "4",
      title: "file4",
      filetype: "txt",
      password: "password4",
      data: "data4",
    },
    {
      id: "5",
      title: "file5",
      filetype: "txt",
      password: "password5",
      data: "data5",
    },
    {
      id: "6",
      title: "file6",
      filetype: "txt",
      password: "password6",
      data: "data6",
    },
    {
      id: "7",
      title: "file7",
      filetype: "txt",
      password: "password7",
      data: "data7",
    },
    {
      id: "8",
      title: "file8",
      filetype: "txt",
      password: "password8",
      data: "data8",
    },
    {
      id: "9",
      title: "file9",
      filetype: "txt",
      password: "password9",
      data: "data9",
    },
    {
      id: "10",
      title: "file10",
      filetype: "txt",
      password: "password10",
      data: "data10",
    },
  ];

  return { files };
}

const BrowseFilePage = () => {
  const { id } = useParams();

  const data: any = useLoaderData();

  const [text, setText] = useState("");

  useEffect(() => {
    const file = data.files.find((file: any) => file.id === id);
    setText(file.data);
  }, []);

  const handleChange = (e: any) => {
    setText(e.target.value);
  }

  return (
    <>
      <div className="w-screen h-screen bg-black flex">
        <div className="w-1/2 h-full border-4 border-gray-800 rounded">
          <textarea
            value={text}
            required
            onChange={handleChange}
            name="data"
            className="w-full h-full p-5 bg-black focus:outline-none text-gray-300 font-semibold text-xl"
            placeholder="Enter your text here"
          />
        </div>
      </div>
    </>
  );
};

export default BrowseFilePage;
