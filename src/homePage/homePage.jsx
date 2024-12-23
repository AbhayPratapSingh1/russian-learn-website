import { GiClick } from "react-icons/gi"
import FormPart from "./form"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <main className="">
            <div className="py-6 px-4 lg:py-7 lg:px-32 bg-[#36bdf2] flex flex-col-reverse gap-6 text-white">
                <div className="h-2 w-20 bg-white " />
                <h1 className=" font-bold text-4xl">रूसी भाषा सीखने का सबसे तेज़ तरीका = अभ्यास करना</h1>
                <p className="  font-bold text-sm">САМЫЙ БЫСТРЫЙ СПОСОБ ВЫУЧИТЬ РУССКИЙ ЯЗЫК = ПРАКТИКА</p>
            </div>
            <div className="py-6 px-4 lg:py-7 lg:px-32 ">
                <h2 className="text-4xl font-bold ">About Me</h2>
                <p className="my-3 flex items-baseline">
                    <Hearts size={14} />
                    <Hearts size={17} />
                    <Hearts size={20} />
                    <Hearts size={17} />
                    <Hearts size={14} />
                </p>
                <DescriptionText />
            </div>
            <FormPart />
            <div className="grid lg:grid-cols-2 p-2  lg:p-5">
                <div className=" px-2 md:px-10 py-24 lg:py-28 md:py-40 bg-[#68cef6] flex justify-center items-center">
                    <div className="flex flex-col items-center gap-10 text-center">
                        <div className="text-5xl font-extrabold text-gray-900">रूसी शब्दावली</div>
                        <div className="text-lg text-white">नए रूसी शब्द सिखने के लिए यहाँ क्लिक करे</div>
                        <Link to={"/name-cards/"}>
                            <button className="px-12 py-5 text-xl flex justify-center items-center gap-2 bg-gray-400 rounded-lg">आगे<GiClick className="text-xl" /></button>
                        </Link>
                    </div>
                </div>
                <div className=" px-2 md:px-10 py-24 lg:py-28 md:py-40 bg-[#68cef6] flex justify-center items-center">
                    <div className="flex flex-col items-center gap-10 text-center">
                        <div className="text-5xl font-extrabold text-gray-900">बातचीत</div>
                        <div className="text-lg text-white">रूसी भाषा में बात कैसे की जाती है , सिखने के लिए यहाँ क्लिक करे</div>
                        <Link to={"/questions/"}>
                            <button className="px-12 py-5 text-xl flex justify-center items-center gap-2 bg-gray-400 rounded-lg">आगे<GiClick className="text-xl" /></button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}












const Hearts = ({ size }) => {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="blue" stroke-width="2">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
    )
}
const DescriptionText = () => {
    return (
        <>
            <p className="text-sm text-gray-500">
                स्वागत है, अगर आप भारत में है, और रूस आने की तैयारी कर रहे है, तो आप एक सही जगह पर है
            </p>
            <p className="text-sm text-gray-500">
                <span className="text-blue-800 font-semibold text-[14px]">
                    मैंने कभी रूसी भाषा अपने आप सीखी थी,
                </span>
                और आज मैं अपना अनुभव आपके साथ बाटना चाहता हूँ, यदि आप सुच में रूसी सीखना चाहते है तो, वेबसाइट पर आते समय आपके
                <span className="text-blue-800">
                    हाथ में कलम और कॉपी
                </span>
                <span>
                    होनी चाहिए,
                </span>
                <span className="font-semibold text-red-600">
                    जायदा से जायदा लिखिए, रूसी शब्दो सुनिए और दोहराइये
                </span>
            </p>
        </>
    )
}

export default HomePage