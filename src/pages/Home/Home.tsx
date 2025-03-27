import { useGetProductsQuery } from "@/Redux/api/baseApi"
import AboutUs from "./AboutUS"
import Banner from "./Banner"
import { FaStar } from "react-icons/fa"
import { NavLink } from "react-router-dom"

const Home=()=>{
    const {data,isLoading}=useGetProductsQuery('as')
    if(isLoading){
        return <>loading...</>
    }
    console.log(data)
    return(
        <div>
           <Banner></Banner>
            <h1 className="text-3xl font-medium mt-8 my-5 text-center py-5 border-b-2 border-t-2 border-gray-500">ABOUT US</h1>
           <AboutUs></AboutUs>
           <div className="mt-24">
               <h1 className="text-4xl font-medium py-3 text-center
                border-b-2  border-t-2 border-gray-500 ">See Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-5">
                   {
                      data.data.slice(0,8).map((item:any)=> <div key={item._id}  className="w-[320px] md:w-[245px]  mx-auto p-2 py-5 border-[1px] border-gray-400 min-h-[400px]">
                                 <img src={item.image} className="w-[115px] mx-auto" alt="" />
                                 <div className="mt-4">
                                     <h1 className="text-center text-[17px]
                                      font-medium">{item.book_name}</h1>
                                      <h1 className="text-center text-gray-400">{item.author}</h1>
                                      <h1 className="text-center text-gray-400">Type: {item.category}</h1>
                                      <div className="flex justify-center space-x-3.5 mt-4">
                                        <FaStar className="text-xl text-orange-300"></FaStar>
                                        <FaStar className="text-xl text-orange-300"></FaStar>
                                        <FaStar className="text-xl text-orange-300"></FaStar>
                                        <FaStar className="text-xl text-orange-300"></FaStar>
                                        <FaStar className="text-xl text-orange-300"></FaStar>
                                      </div>
                                     <NavLink to={`/details/${item._id}`}> <button className="w-full text-[17px] mt-5 font-medium text-white
                                      bg-[#fe3050] h-[35px] cursor-pointer">Details</button></NavLink>
                                      <button className="w-full text-[17px] mt-5 font-medium text-white
                                      bg-gray-700 h-[35px] cursor-pointer">Add To Cart</button>
                                 </div>
                        </div>)
                   }
                </div>
                <NavLink to={'/allproducts'}
                className={'text-[18px] font-medium text-center'}> 
                <h1 className="text-center mt-10">Show All Products</h1> </NavLink>
           </div>

        </div>
    )
}
export default Home