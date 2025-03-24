import AboutUs from "./AboutUS"
import Banner from "./Banner"

const Home=()=>{
    return(
        <div>
           <Banner></Banner>
            <h1 className="text-3xl font-medium mt-8 my-5 text-center py-5 border-b-2 border-t-2 border-gray-500">ABOUT US</h1>
           <AboutUs></AboutUs>
        </div>
    )
}
export default Home