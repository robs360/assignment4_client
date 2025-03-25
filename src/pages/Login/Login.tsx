import { NavLink } from "react-router-dom"

const Login = () => {
    return (
        <div className="">
            <div className="md:w-[500px] p-8 py-10 bg-white mx-auto my-10 lg:w-[640px] rounded-[4px] 
            drop-shadow-2xl">
                <div className="">
                    <h1 className="text-3xl font-medium text-center">Login</h1>
                </div>

                <form className="mt-6" action="">
                    <h1>Enter Your Email</h1>
                    <input className="w-full border-[1px] border-gray-500 rounded-[3px] h-[40px]" type="text" />
                    <h1 className="mt-5">Enter Your Password</h1>
                    <input className="w-full border-[1px] border-gray-500 rounded-[3px] h-[40px]" type="text" />
                    <button className="w-full text-white bg-[#fe3050]
                    mt-5 h-[40px] rounded-[4px] font-medium text-[18px] cursor-pointer">Login</button>
                    <NavLink className={'text-center'} to={'/signup'}>
                      <h1 className="mt-2">Does Not Have An Account?</h1>
                    </NavLink>
                </form>
            </div>
            <div className="mt-6 md:w-[500px] mx-auto lg:w-[640px]">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/UoE8vT3DIHk?si=nMXJ7kXFIN8F8fpH"
                    title="YouTube video player"
                    frameBorder="0" // Corrected to camelCase
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" // Corrected to camelCase
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    )
}
export default Login