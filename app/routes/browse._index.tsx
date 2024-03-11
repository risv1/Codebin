import { Link, useLoaderData } from "@remix-run/react";
import LoadedFiles from "~/components/LoadedFiles";
import Nav from "~/components/Nav";

export async function loader() {
  const files = [
    {id: "1", title: "file1", filetype: "txt", password: "password1", data: "data1" },
    {id: "2", title: "file2", filetype: "txt", password: "password2", data: "data2" },
    {id: "3", title: "file3", filetype: "txt", password: "password3", data: "data3" },
    {id: "4", title: "file4", filetype: "txt", password: "password4", data: "data4" },
    {id: "5", title: "file5", filetype: "txt", password: "password5", data: "data5" },
    {id: "6", title: "file6", filetype: "txt", password: "password6", data: "data6" },
    {id: "7", title: "file7", filetype: "txt", password: "password7", data: "data7" },
    {id: "8", title: "file8", filetype: "txt", password: "password8", data: "data8" },
    {id: "9", title: "file9", filetype: "txt", password: "password9", data: "data9" },
    {id: "10", title: "file10", filetype: "txt", password: "password10", data: "data10" },
  ];
  return { files };
}

const BrowsePage = () => {
  const data: any = useLoaderData();

  return (
    <>
      <Nav />
      <div className="w-screen h-screen flex">
        <LoadedFiles>
          {data.files.map((file: any, index: number) => {
            return (
              <div
                key={index}
                className="w-full h-20 flex items-center flex-col p-3 border-b-sky-500 border-2"
              >
                <div className="w-full flex justify-center items-center">
                  <h1 className="text-2xl mb-3 pl-10 font-semibold pt-3 text-sky-700">
                    {file.title}.{file.filetype}
                  </h1>
                  <Link to={`/browse/${file.id}`} className="ml-auto bg-sky-500 p-3 rounded-xl text-white font-bold hover:bg-sky-400 border-2 border-sky-900">
                    Open
                  </Link>
                </div>
              </div>
            );
          })}
        </LoadedFiles>
      </div>
    </>
  );
};

export default BrowsePage;
