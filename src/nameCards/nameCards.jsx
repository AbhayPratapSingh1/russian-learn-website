import { useState } from "react"
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa"

const cards = [
    {
        name: "Rome",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/rome.jpg",
    },{
        name: "Crete",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/crete.jpg",
    },{
        name: "London",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/london.jpg",
    },{
        name: "Paris",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/paris.jpg",
    },{
        name: "Signature",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/signature.jpg",
    },{
        name: "Venice",
        desc: "dapibus quis sapien id pharetra iaculis est",
        img: "/images/nameCard/venice.jpg",
    },

]

const NameCards = () => {
    const [current,setCurrent] = useState(2)
    function left(){
        if (current!==0){
            setCurrent((prev)=>prev-1)
        }
    }
    return (
        <div className="overflow-hidden">
            <div class=" bg-gradient-to-b from-[#33b8ec] to-[#052a39] p-8 relative z-0">
                {/* <button  className="absolute top-[50%] left-0 -translate-y-1/2 z-40 bg-blue-800 px-5  py-4">
                    <FaChevronCircleLeft className="text-2xl text-white"/>
                </button>
                <button className="absolute top-[50%] right-0 -translate-y-1/2 z-40 bg-blue-800 px-5  py-4">
                    <FaChevronCircleRight className="text-2xl text-white"/>
                </button> */}
                <div className="scrollbar-hide flex overflow-scroll gap-5">
                    {cards && cards.length > 0 && cards.map((each, index) => {
                        return (
                            <div key={index} className=" shrink-0 h-[430px] w-64 bg-[#31353e]">
                                <div className="w-full h-auto">
                                    <img src={each.img} alt="" />
                                </div>
                                <div className="p-4 text-white">
                                    <p className="text-3xl  font-bold">{each.name}</p>
                                    <p className="text-md">{each.desc}</p>
                                </div>

                            </div>
                        )
                    })}

                </div>

            </div>
        </div>
    )
}
export default NameCards