import { NavLink } from "react-router-dom"
import AdminMenu from "./Adminmenu"
import logo from '../assets/logo.png'
const DashboardNavbar = () => {
    return (
        <div className="w-[225px] p-[10px] h-[100vh] bg-amber-50">
            <NavLink to={'/'}>
                <div className='flex mt-2 space-x-2 items-center'>
                    <img src={logo} className='w-[36px] md:w-[40px] rounded-full' alt="bokknest" />
                    <div>
                        <p className="text-sm italic">Provides Value</p>
                        <h1 className="text-xl md:text-2xl italic text-[#FE3050] -mt-3 font-medium">BookNest</h1>
                    </div>
                </div>
            </NavLink>
            <div className="mt-10">
                <AdminMenu></AdminMenu>
            </div>
        </div>
    )
}
export default DashboardNavbar