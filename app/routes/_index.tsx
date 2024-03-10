import DescOne from "~/components/DescOne";
import DescThree from "~/components/DescThree";
import DescTwo from "~/components/DescTwo";
import Nav from "~/components/Nav";

const HomePage = () => {
  return (
    <>
      <Nav />
      <div className="w-screen bg-black h-full flex justify-center items-center flex-col">
        <div className="w-full h-[90vh] flex">
          <DescOne />
        </div>
        <div className="w-full flex">
          <DescTwo />
        </div>
        <div className="w-full h-screen flex">
          <DescThree />
        </div>
      </div>
    </>
  );
};

export default HomePage;
