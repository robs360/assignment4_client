import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"


const App = () => {


  return (
    <div className="">

      <Navbar></Navbar>
    
      <Outlet></Outlet>

    </div>
  )
}

export default App
