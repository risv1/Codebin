import { Link } from "@remix-run/react"

const Nav = () => {
    return(
        <div className="w-screen h-20 flex bg-sky-300">
            <div className="flex w-full h-full justify-between items-center p-10">
                <Link to={"/"} className="text-5xl tracking-wide hover:text-white pt-5 font-normal text-black">
                    Codebin
                </Link>
                <div className="ml-auto flex flex-row pt-5 justify-center items-center gap-10">
                    <Link to={"/"} className="text-3xl hover:text-white font-medium text-black">
                        Home
                    </Link>
                    <Link to={"/upload"} className="text-3xl hover:text-white font-medium text-black">
                        Upload
                    </Link>
                    <Link to={"/browse"} className="text-3xl hover:text-white font-medium text-black">
                        Browse
                    </Link>
                    <Link to={"/login"} className="bg-opacity-90 hover:bg-opacity-100 text-2xl hover:border-white border-sky-300 border-4 text-white bg-black pl-7 pr-7 pt-2 pb-2 mb-1 font-semibold rounded-full">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav