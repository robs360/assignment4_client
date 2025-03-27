import { useGetProductsQuery } from "@/Redux/api/baseApi"
import { FaStar } from "react-icons/fa"
import Marquee from "react-fast-marquee";
const AllProducts = () => {
    const { data, isLoading } = useGetProductsQuery('a')
    if (isLoading) {
        return <>loading...</>
    }
    return (
        <div>
            
                <Marquee className="my-8 text-center p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur soluta eius quasi accusantium illo fuga eligendi excepturi placeat porro.</Marquee>
            
            <div className="grid grid-cols-4 mt-6 gap-6">
                {
                    data.data.map((item: any) => <div key={item._id} className="w-[300px] mx-auto p-3 py-5 border-[1px] border-gray-400 min-h-[400px]">
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
                            <button className="w-full text-[17px] mt-5 font-medium text-white
                                              bg-[#fe3050] h-[35px] rounded-[4px] cursor-pointer">Details</button>
                            <button className="w-full text-[17px] mt-5 font-medium text-white
                                              bg-gray-700 h-[35px] rounded-[4px] cursor-pointer">Add To Cart</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
export default AllProducts