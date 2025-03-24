import { FaUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
        <div className="min-h-[55px] py-2 shadow-md shadow-b-gray-400 ">
            <div className="w-full flex justify-around items-center">

                <div className='flex space-x-2 items-center'>
                    <img src={logo} className='w-[36px] md:w-[40px] rounded-full' alt="bokknest" />
                    <div>
                        <p className="text-sm italic">Provides Value</p>
                        <h1 className="text-xl md:text-2xl italic text-[#FE3050] -mt-3 font-medium">BookNest</h1>
                    </div>
                </div>
                <div className='hidden md:flex text-[16px] space-x-5'>
                    <NavLink to={''}>Home</NavLink>
                    
                    <NavLink to={''}>All Book</NavLink>
                    <NavLink to={''}>Blog</NavLink>
                </div>
                <div className='flex space-x-3 items-center'>
                    <NavLink to={''}>
                        <div className="rounded-full border-2 border-[#FE3050] p-1">
                            <FaUser className="text-xl text-[#FE3050]"></FaUser>
                        </div>
                    </NavLink>
                    <NavLink to={'/login'} className=' flex items-center justify-center rounded-[4px] font-medium w-[70px] h-[36px] bg-[#FE3050] text-white'><span>Log in</span></NavLink>
                    <NavLink to={'/signup'} className='flex items-center justify-center rounded-[4px] font-medium w-[70px] h-[36px] bg-[#FE3050] text-white'><span>Sign Up</span></NavLink>
                </div>

            </div>
            <div className='md:hidden justify-center mt-5 flex text-[16px] space-x-8'>
                <NavLink to={''}>Home</NavLink>
                <NavLink to={''}>About Us</NavLink>
                <NavLink to={''}>All Book</NavLink>
                <NavLink to={''}>Blog</NavLink>
            </div>
          
        </div>
    )
}
export default Navbar