import { HiMiniSpeakerWave } from "react-icons/hi2";

const data = [
    {
        question: {
            russian: "Как тебя зовут?",
            pronunciation: "आपका क्या नाम है?",
            hindi: "आपका क्या नाम है?",
            audioTrack: "/audio/KAKQ1.mp3",
        },
        answer: {
            russian: "Меня зовут кумар ХХХ",
            pronunciation: "आपका क्या नाम है?",
            hindi: "मेरा नाम कुमार XXX है",
            audioTrack: "/audio/KAKA1.mp3",
        },
    }, {
        question: {
            russian: "Как тебя зовут?",
            pronunciation: "आपका क्या नाम है?",
            hindi: "आपका क्या नाम है?",
            audioTrack: "/audio/KAKQ1.mp3",
        },
        answer: {
            russian: "Меня зовут кумар ХХХ",
            pronunciation: "आपका क्या नाम है?",
            hindi: "मेरा नाम कुमार XXX है",
            audioTrack: "/audio/KAKA1.mp3",
        },
    }, {
        question: {
            russian: "Как тебя зовут?",
            pronunciation: "आपका क्या नाम है?",
            hindi: "आपका क्या नाम है?",
            audioTrack: "/audio/KAKQ1.mp3",
        },
        answer: {
            russian: "Меня зовут кумар ХХХ",
            pronunciation: "आपका क्या नाम है?",
            hindi: "मेरा नाम कुमार XXX है",
            audioTrack: "/audio/KAKA1.mp3",
        },
    }, {
        question: {
            russian: "Как тебя зовут?",
            pronunciation: "आपका क्या नाम है?",
            hindi: "आपका क्या नाम है?",
            audioTrack: "/audio/KAKQ1.mp3",
        },
        answer: {
            russian: "Меня зовут кумар ХХХ",
            pronunciation: "आपका क्या नाम है?",
            hindi: "मेरा नाम कुमार XXX है",
            audioTrack: "/audio/KAKA1.mp3",
        },
    },
]

const KAK = () => {
    function playAudio(path) {
        const audio = new Audio(path);
        audio.play();
    };
    return (
        <div className="grid lg:grid-cols-3 gap-10 p-4 lg:py-10 lg:px-20">
            {data && data.map((each, index) => {
                return (
                    <div key={index} className="border-t-2 border-t-blue-600 h-full border rounded-sm flex flex-col justify-center items-center gap-5 p-5">
                        <div className="flex items-center gap-10">
                            <div className="text-red-500">
                                <div className="text-lg">{each.question.russian}</div>
                                <div className="text-xl">{each.question.pronunciation}</div>
                                <div className="text-2xl font-extrabold">{each.question.hindi}</div>
                            </div>
                            <div className="flex-grow"></div>
                            <div>
                                <button onClick={() => playAudio(each.question.audioTrack)}><HiMiniSpeakerWave className="text-6xl text-blue-800" /></button>
                            </div>
                        </div>
                        <div className="w-full">
                            <div className="w-10 h-[1px] bg-red-500"></div>

                        </div>
                        <div className="flex items-center gap-10">
                            <div className="text-gray-700">
                                <div className="text-lg">{each.answer.russian}</div>
                                <div className="text-xl">{each.answer.pronunciation}</div>
                                <div className="text-2xl font-extrabold">{each.answer.hindi}</div>
                            </div>
                            <div className="flex-grow"></div>
                            <div>
                                <button onClick={() => playAudio(each.answer.audioTrack)}><HiMiniSpeakerWave className="text-6xl text-blue-800" /></button>
                            </div>
                        </div>

                        <div className="border-t-2 w-full mb-5"></div>
                    </div>
                )
            })}
        </div>
    )
}
export default KAK