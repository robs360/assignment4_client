import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import SignUp from "@/pages/SignUp/Signup";
import AllProducts from "@/pages/All Products/AllProducts";
import Details from "@/components/Details";
import DashboardLayout from "@/DashbordComponent/DashboardLayout";
import Information from "@/DashbordComponent/Information";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/allproducts',
        element: <AllProducts></AllProducts>
      },
      {
        path: '/details/:id',
        element: <Details></Details>
      }
    ]

  },
  {
    path:'/dashboard',
    element:<DashboardLayout></DashboardLayout>,
    children:[
      {
        index:true,
        element:<Information></Information>
      }
    ]
  }
]);

export default routes;
