import { Outlet } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import Footer from "./components/shared/Footer"



const App = () => {


  return (
    <div className="">

      <Navbar></Navbar>
    
      <Outlet></Outlet>

      <Footer></Footer>

    </div>
  )
}

export default App
