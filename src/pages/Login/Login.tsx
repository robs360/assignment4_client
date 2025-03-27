import { useLoginMutation } from "@/Redux/api/baseApi"
import { setUser } from "@/Redux/featurs/auth/authSlice"
import { useAppDispatch } from "@/Redux/hooks"
import { NavLink } from "react-router-dom"

const Login = () => {
    const [login, { error }] = useLoginMutation()
    const dispatch = useAppDispatch()
    console.log('error ', error)
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const form = e.target as HTMLFormElement;
        const email = form.email.value;
        const password = form.pass.value;

        const res = await login({ email, password }).unwrap()
        console.log(res)
        dispatch(setUser({ user: {}, token: res.data.accessToken }))
    }
    return (
        <div className="">
            <div className="md:w-[500px] p-8 py-10 bg-white mx-auto my-10 lg:w-[640px] rounded-[4px] 
            drop-shadow-2xl">
                <div className="">
                    <h1 className="text-3xl font-medium text-center">Login</h1>
                </div>

                <form onSubmit={handleLogin} className="mt-6" action="">
                    <h1>Enter Your Email</h1>
                    <input name="email" className="pl-1 w-full border-[1px] border-gray-800 rounded-[3px] h-[40px]" type="text" />
                    <h1 className="mt-5">Enter Your Password</h1>
                    <input name="pass" className="pl-1 w-full border-[1px] border-gray-800 rounded-[3px] h-[40px]" type="text" />
                    <button type="submit" className="w-full text-white bg-[#fe3050]
                    mt-5 h-[40px] rounded-[4px] font-medium text-[18px] cursor-pointer">Login</button>
                    <NavLink className={'text-center'} to={'/signup'}>
                        <h1 className="mt-2">Does not have an account?
                            <span className="text-[#fe3050]"> Click Here</span></h1>
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