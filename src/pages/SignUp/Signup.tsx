import facebook from '../../assets/facebook.png'
import google from '../../assets/google.png'

const SignUp = () => {
    return (
        <div className="h-[92vh] my-6 flex flex-col items-center">
            <div className="w-[360px] min-h-[536px] relative md:w-[490px] z-30 lg:w-[650px] shadow-2xl overflow-hidden">
                <div className="w-[130px] h-[140px] md:w-[160px] md:h-[160px] -left-14 -top-16 bg-[#fe3050] rounded-full absolute">

                </div>
                <div className="w-[130px] h-[130px] md:w-[160px] md:h-[160px] -right-14 -top-16 bg-[#fe3050] rounded-full absolute">

                </div>
                <h1 className="text-3xl md:text-4xl font-medium text-center">Registration</h1>
                <form className="flex flex-col mt-14 lg:mt-32 p-3 space-y-5" action="">
                    <input placeholder="Your Name" className="border-2  border-gray-800 h-[40px] 
                    rounded-[3px] pl-1" type="text" name="" id="" />
                    <input placeholder="Your Email" className="border-2 border-gray-800 h-[40px] 
                    rounded-[3px] pl-1" type="text" name="" id="" />
                    <input placeholder="Your Passowrd" className="border-2 border-gray-800
                     h-[40px] pl-1 rounded-[3px]" type="text" name="" id="" />
                      <button className="w-full text-white bg-[#fe3050]
                     h-[40px] rounded-[4px] font-medium text-[18px] cursor-pointer">Sign Up</button>
                </form>
                <h1 className="text-center mt-1">Already have an account? 
                    <span className="text-[#fe3050]"> Click Here</span></h1>
                    <div className="flex justify-evenly mt-6 ">
                         <button><img className='w-[50px]' src={google} alt="" /></button>
                         <button><img className='w-[50px]' src={facebook} alt="" /></button>
                    </div>
            </div>
           
        </div>
    )
}
export default SignUp