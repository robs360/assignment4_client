import { NavLink, Outlet } from "react-router-dom"
import DashboardNavbar from "./DashbordNavbar"
import { FaCog, FaTachometerAlt } from "react-icons/fa"

const DashboardLayout=()=>{
    return(
        <div className="w-full flex">
             <div className="w-[225px]">
             <DashboardNavbar></DashboardNavbar>
             </div>
            <div className="flex-grow">
                <div className="w-full flex justify-end items-center h-[80px] p-4 bg-amber-50">
                     <button className="cursor-pointer"><div className="flex space-x-1 items-center"><FaCog></FaCog>
                      <h1 className="text-black">Setting</h1>
                     </div></button>
                    <NavLink className={'flex ml-12 items-center space-x-1'} to={''}>
                        <FaTachometerAlt className="text-xl text-black"></FaTachometerAlt>
                        <h1 className="text-xl font-medium text-[#fe3050]">Overview </h1>
                    </NavLink>
                </div>
                <div className="p-3">
                <Outlet></Outlet>
                </div>
            </div>
        </div>
    )
}

export default DashboardLayout