import Nav from "~/components/Nav";
import TextForm from "~/components/TextForm";
import Upload from "~/components/Upload";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const file = formData.get("file")
  const title = formData.get("title");
  const filetype = formData.get("filetype");
  const password = formData.get("password");
  const data = formData.get("data");

  const typedFile = {
    title: title,
    filetype: filetype,
    password: password,
    data: data,
  }
  console.log("typedFile: ", typedFile);
  console.log("file: ", file);
  
  return file;
}

const UploadPage = () => {
  return (
    <>
      <Nav />
      <div className="w-screen h-screen flex">
        <Upload />
      </div>
      <div className="w-screen h-screen flex bg-black">
        <TextForm />
      </div>
    </>
  );
};

export default UploadPage;
