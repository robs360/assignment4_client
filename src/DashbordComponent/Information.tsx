import banner from '../assets/dash.svg'

const Information = () => {
    return (
        <div>
            <div className='flex w-full gap-5 items-center justify-center'>
                <div>
                    <img src={banner} className='w-[350px] md:w-[360px] lg:w-[450px]' alt="" />
                </div>
                <div style={{ backgroundImage: 'linear-gradient(135deg, #43CBFF 10%, #9708CC 100%)' }} className="space-x-9 px-14 lg:px-24  items-center h-[130px] rounded-[6px] flex mt-4">
                    <div>
                        <h1 className='text-white text-[22px] font-medium'>PDF</h1>
                        <h1 className='text-white'>1200+</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-[22px] font-medium'>FOLDER</h1>
                        <h1 className='text-white'>100+</h1>
                    </div>
                    <div>
                        <h1 className='text-white text-[22px] font-medium'>SIZE</h1>
                        <h1 className='text-white'>2GB+</h1>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                
            </div>
        </div>
    )
}
export default Information