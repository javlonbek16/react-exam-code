import IEC from "./IEC"
import IntroImg from "./IntroImg"
import phone from "../img/phone.png"
import message from "../img/message.svg"
const Intro = () => {
    return (
        <div className="container">
            <div className="">
                <h2 className="text-center text-4xl font-mono">
                    Bepul shifokor maslahat kerakmi?
                </h2>
                <p className="text-center w-[462px] m-auto">
                    24/7 video maslahat. Shaxsiy maslahat + Audio qo'ng'iroq
                    Faqat
                    <a href="#" className="text-green-400 ml-1 underline">
                        mobil ilovada
                    </a>
                </p>
            </div>
            <div className="mt-[148px] ml-20">
                <IntroImg />
            </div>
            <div className="i_end_c">
                <IEC />
            </div>
            <div className="relative">
                <div className="absolute left-[1000px] -top-[600px]">
                    <a href="#">
                        <img src={phone} alt="phone" className="w-[200px]" />
                    </a>
                </div>
                <div className="absolute -top-[500px] left-[1000px]">
                    <a href="#">
                        <img src={message} alt="message" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Intro