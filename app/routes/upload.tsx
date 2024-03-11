import Nav from "~/components/Nav";
import TextForm from "~/components/TextForm";
import Upload from "~/components/Upload";

export async function action({ request }: { request: Request }) {
  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const title = formData.get("title");
    const filetype = formData.get("filetype");
    const password = formData.get("password");
    const data = formData.get("data") as string;

    const typedFile = {
      title: title,
      filetype: filetype,
      password: password,
      data: data,
    };
    if (file) {
      console.log("file: ", file);
    }
    if (typedFile) {
      console.log("typedFile: ", typedFile);
      const fileName = typedFile.title ? `${typedFile.title}.${typedFile.filetype}` : "";
      console.log("fileName: ", fileName);
    } 
    
    return file;

  } catch (e) {
    console.error(e);
  }
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
