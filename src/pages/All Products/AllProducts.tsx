import { useGetProductsQuery } from "@/Redux/api/baseApi"
import { FaStar } from "react-icons/fa"
import Marquee from "react-fast-marquee";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const AllProducts = () => {
    const [search, setSearch] = useState('')
    const [a, setA] = useState(0)
    const [cat, setCategory] = useState('')
    const [query, setQuery] = useState('');
    const { data, isLoading, refetch } = useGetProductsQuery(query)

    if (isLoading) {
        return <>loading...</>
    }
    const handleSearch = () => {
        setQuery(search);
        setA(0)
        setTimeout(() => {
            refetch();
        }, 100);
    };
    return (
        <div>

            <Marquee className="my-8 text-center p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, corporis!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A aspernatur soluta eius quasi accusantium illo fuga eligendi excepturi placeat porro.</Marquee>
            <div className="flex justify-center">
                <div>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="p-3 rounded-l-full h-[44px] w-[266px] md:w-[365px] border-2 lg:w-[560px]"
                        placeholder="Search..."
                    />
                    <button onClick={handleSearch} className="bg-gray-700 text-white h-[43px] px-3 rounded-r-full">Search</button>
                </div>
            </div>

            <div className="my-8 mb-16">
                <h1 className="text-[17px] font-medium text-center mb-5">See With Category</h1>
                <div className="flex flex-wrap gap-5 p-3 justify-center">
                    <button onClick={() => {
                        setA(0)

                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">All</button>
                    <button onClick={() => {
                        setA(1)
                        setCategory('Drama')
                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">Drama</button>
                    <button onClick={() => {
                        setA(1)
                        setCategory('Poetry')
                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">Poetry</button>
                    <button onClick={() => {
                        setA(1)
                        setCategory('Science')
                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">Science</button>
                    <button onClick={() => {
                        setA(1)
                        setCategory('Programming')
                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">Programming</button>
                    <button onClick={() => {
                        setA(1)
                        setCategory('History')
                    }} className="p-2 border-2 w-[120px] font-medium cursor-pointer rounded-[6px]">History</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-5">
                {
                    a !== 0 ? (data.data.filter((item: any) => item.category === cat).map((item: any) => <div key={item._id} className="w-[320px] md:w-[245px]  mx-auto p-2 py-5 border-[1px] border-gray-400 min-h-[400px]">
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
                            <NavLink to={`/details/${item._id}`}>
                                <button className="w-full text-[17px] mt-5 font-medium text-white
                                          bg-[#fe3050] h-[35px] cursor-pointer">Details</button></NavLink>
                            <button className="w-full text-[17px] mt-5 font-medium text-white
                                          bg-gray-700 h-[35px] cursor-pointer">Add To Cart</button>
                        </div>
                    </div>)) : (data.data.map((item: any) => <div key={item._id} className="w-[320px] md:w-[245px]  mx-auto p-2 py-5 border-[1px] border-gray-400 min-h-[400px]">
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
                            <NavLink to={`/details/${item._id}`}>
                                <button className="w-full text-[17px] mt-5 font-medium text-white
                                              bg-[#fe3050] h-[35px] cursor-pointer">Details</button></NavLink>
                            <button className="w-full text-[17px] mt-5 font-medium text-white
                                              bg-gray-700 h-[35px] cursor-pointer">Add To Cart</button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}
export default AllProducts