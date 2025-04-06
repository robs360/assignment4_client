import { Outlet } from "react-router-dom"
import DashboardNavbar from "./DashbordNavbar"

const DashboardLayout=()=>{
    return(
        <div className="w-full flex">
             <div className="w-[227px]">
             <DashboardNavbar></DashboardNavbar>
             </div>
            <div className="flex-grow p-3">
                <Outlet></Outlet>
            </div>
        </div>
    )
}

export default DashboardLayout