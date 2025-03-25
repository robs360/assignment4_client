import { ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className="w-full bg-[#222326] min-h-[45vh] mt-8">
            <div className='flex justify-evenly'>
                <div className='mt-6 py-5'>
                    <div className='flex space-x-2 items-center'>
                        <img src={logo} className='w-[39px] md:w-[45px] rounded-full' alt="bokknest" />
                        <div>
                            <p className="text-sm italic text-white">Provides Value</p>
                            <h1 className="text-2xl md:text-3xl italic text-[#FE3050] -mt-3 font-medium">BookNest</h1>
                        </div>
                    </div>
                    <h1 className='text-4xl text-white mt-3'>Book Nest Is Love</h1>
                </div>
                <div className="">
                    <h1 className='text-2xl text-center font-medium text-white'>Quick Link</h1>
                    <div>
                        <div className='flex space-x-16'>
                            <div className='flex flex-col'>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Home</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Care</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Order</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Book Placement</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Digital Library</a>
                            </div>
                            <div className='flex flex-col'>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Help</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Contact</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Office</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span> Pathshala</a>
                                <a className='font-medium flex  text-white' href=""><span className='mr-3'><ArrowRight className='text-[#fe3050]'></ArrowRight> </span>Join With Us</a>
                            </div>
                        </div>
                        <div className='flex mt-5 justify-between'>
                              <FaFacebook className='text-4xl text-white'></FaFacebook>
                               <FaTwitter className='text-4xl text-white'></FaTwitter>
                               <FaYoutube className='text-4xl text-white'></FaYoutube>
                             <FaInstagram className='text-4xl text-white'></FaInstagram>
                        </div>
                    </div>
                </div>
            </div>
            <h1></h1>
        </div>
    )
}
export default Footer