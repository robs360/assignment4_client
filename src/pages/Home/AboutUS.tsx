import { BookOpen, Building, Target, Users } from "lucide-react"

const AboutUs = () => {
    return (
        <div className="flex justify-evenly flex-wrap gap-4 text-white mt-12">
            <div className="w-[340px] rounded-xl p-3 bg-[#3B3B26]">
                <div className="flex space-x-2 justify-center mb-2">
                    <h1 className="text-xl text-center font-medium">Our Goal</h1>
                    <Target></Target>
                </div>
                <p>Our goal is to empower individuals through education, continuous learning, and collaboration. We strive to foster innovation, enhance skills, and create opportunities for growth. By promoting knowledge-sharing
                    and teamwork, we aim to build a brighter future for everyone.</p>
            </div>
            <div className="w-[340px] rounded-xl p-3 bg-[#515E49]">
                <div className="flex space-x-2 justify-center mb-2">
                    <h1 className="text-xl text-center font-medium">Our Team</h1>
                    <Users></Users>
                </div>
                <p>Our team is a passionate group of professionals dedicated to innovation, collaboration, and excellence. We bring diverse expertise in technology, design, and problem-solving to create impactful solutions. United
                    by a shared vision, we work together to drive success and inspire growth.</p>
            </div>
            <div className="w-[340px] rounded-xl p-3 bg-[#413E3A]">
                <div className="flex space-x-2 justify-center mb-2">
                    <h1 className="text-xl text-center font-medium">Our Office</h1>
                    <Building></Building>
                </div>
                <p>Our team is a passionate group of professionals dedicated to innovation, collaboration, and excellence. We bring diverse expertise in technology, design, and problem-solving to create impactful solutions. United by a
                    shared vision, we work together to drive success and inspire growth.</p>
            </div>
            <div className="w-[340px] rounded-xl p-3 bg-[#0B0A08]">
                <div className="flex space-x-2 justify-center mb-2">
                    <h1 className="text-xl text-center font-medium">Our Story</h1>
                    <BookOpen></BookOpen>
                </div>
                <p>Our story began with a simple yet powerful vision: to create
                    a platform that makes books more accessible, fosters a love for reading, and builds a community of book enthusiasts. Driven by passion and innovation, we embarked on a journey to develop BookNest, a place where readers can discover</p>
            </div>
        </div>
    )
}
export default AboutUs