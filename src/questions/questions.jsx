import { Link } from "react-router-dom"

const parts = [
    {
        rus: "КАК -काक",
        hin: "कैसा , कैसी , कैसे",
        img: "/images/nameCard/crete.jpg",
        link:"/questions/KAK"
    }, {
        
        rus: "КАК -काक",
        hin: "कैसा , कैसी , कैसे",
        img: "/images/nameCard/crete.jpg",
        link:"/questions/KAK"
    }, {
        
        rus: "КАК -काक",
        hin: "कैसा , कैसी , कैसे",
        img: "/images/nameCard/crete.jpg",
        link:"/questions/KAK"
    }, {
        
        rus: "КАК -काक",
        hin: "कैसा , कैसी , कैसे",
        img: "/images/nameCard/crete.jpg",
        link:"/questions/KAK"
    }, {
        
        rus: "КАК -काक",
        hin: "कैसा , कैसी , कैसे",
        img: "/images/nameCard/crete.jpg",
        link:"/questions/KAK"
    }
]

const Questions = () => {
    return (
        <div className="grid md:gird-cols-2 lg:grid-cols-4">
            {parts.map((each, index) => {
                return (
                    <div style={{ backgroundImage: `url(${each.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} key={index} className="relative w-full aspect-square p-5 flex justify-center items-center">
                        <div className="absolute inset-0 bg-gray-900 opacity-70 z-0"></div>
                        <div className="text-center z-10 flex flex-col gap-4">
                            <div className="text-white font-extrabold text-2xl">{each.rus}</div>
                            <div className="text-white font-semibold text-xl">{each.hin}</div>
                            <Link to={each.link}>
                                <button className="text-white font-extrabold border-2 border-white py-3 px-5">आगे</button>
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div >
    )
}

export default Questions