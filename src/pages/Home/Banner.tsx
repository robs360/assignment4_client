import { Download, User } from 'lucide-react'
import banner from '../../assets/banner.svg'
const Banner = () => {
    return (
        <div className="min-h-[75vh] md:min-h-[90vh] p-2
         items-center flex flex-col-reverse md:flex-row justify-around">
            <div className='w-full md:w-[40%] flex flex-col items-center'>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis
                    dolore minus ab a cum ex, saepe minima repellat incidunt?</p>
                <h1 className="text-3xl md:text-4xl text-center font-medium text-[#fe3050]">
                    In education, practice,
                   and cooperation.</h1>
                <div className='flex justify-center mt-3 space-x-4'>
                    <div className='w-[130px] py-1 min-h-[55px] flex flex-col items-center 
                    justify-center rounded-[8px] bg-[#fe3050]'>
                        <User className='text-white'></User>
                        <span className='text-white'>Total User</span>
                        <h1 className='text-white'>30000</h1>
                    </div>
                    <div className='w-[130px] py-1 min-h-[55px] flex flex-col items-center 
                    justify-center rounded-[8px] bg-[#fe3050]'>
                        <Download className='text-white'></Download>
                        <span className='text-white'>Total Download</span>
                        <h1 className='text-white'>30000</h1>
                    </div>
                </div>
            </div>
            <img  src={banner} className='w-[350px] md:w-[496px]' alt="" />
        </div>
    )
}
export default Banner