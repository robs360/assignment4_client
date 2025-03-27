import { FaDownload, FaStar, FaUser } from 'react-icons/fa'

import share from '../assets/share.png'
import { useParams } from 'react-router-dom'
import { useGetSingleProductQuery } from '@/Redux/api/baseApi'


const Details = () => {
    const {id}=useParams()
    
    const { data, isLoading } = useGetSingleProductQuery(id!);
   
    const product=data?.data
    if(isLoading){
        return <>loading...</>
    }
    
    return (
        <div>
            <div className='p-4 flex items-center justify-center gap-10 my-14 flex-col lg:flex-row lg:w-[910px] mx-auto shadow-2xl'>
                <div className=''>
                    <img src={product.image} className='w-[230px] lg:w-[300px]' alt="" />
                </div>
                <div className='w-full lg:w-[76%]'>
                    <h1 className='text-xl font-medium'>{product.title}</h1>
                    <div className='mt-5 flex space-x-5 lg:space-x-10'>
                        <div className='flex space-x-2 items-center'>
                            <div className='p-1 border-2 border-blue-300 flex h-[33px] w-[33px]
                        rounded-full'>
                                <FaUser className='text-xl text-blue-700'></FaUser>
                            </div>
                            <span className='text-gray-400'>{product.author}</span>
                        </div>
                        <div className='flex space-x-2 items-center'>
                            <div className='p-1 border-2 border-blue-300 flex items-center justify-center h-[33px] w-[33px]
                        rounded-full'>
                                <FaDownload className='text-blue-700'></FaDownload>
                            </div>
                            <span className='text-gray-400'>3000</span>
                        </div>
                    </div>
                    <div className='mt-6 flex space-x-24'>
                        <div className='flex space-x-2'>
                            <FaStar className='text-[18px] text-orange-300'></FaStar>
                            <FaStar className='text-[18px] text-orange-300'></FaStar>
                            <FaStar className='text-[18px] text-orange-300'></FaStar>
                            <FaStar className='text-[18px] text-orange-300'></FaStar>
                            <FaStar className='text-[18px] text-orange-300'></FaStar>
                        </div>
                        <div>
                            <button className='
                            cursor-pointer'><img src={share} className='w-[20px]' alt="" /></button>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='text-gray-400'>{product.description}</p>

                    </div>
                    <div className='mt-2'>
                        <div className='flex space-x-6'>
                            <span className='text-[17px] font-medium'>Category</span>
                            <span className='text-gray-400'>{product.category}</span>
                        </div>
                        <div className='flex space-x-6 my-2'>
                            <span className='text-[17px] font-medium'>Publisher</span>
                            <span className='text-gray-400'>Abu Mohammad</span>
                        </div>
                        <div className='flex space-x-6'>
                            <span className='text-[17px] font-medium'>Publushed At</span>
                            <span className='text-gray-400'>20 Jan 2020</span>
                            
                        </div>
                       <div className='mt-4'>
                       <button className='bg-black text-[17px] px-3 text-white h-[33px]'>Add to cart</button>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details