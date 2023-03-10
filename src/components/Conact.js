import contactIMG from "../img/Contact.svg"
import contactbg from "../img/contactbg.svg"
import { IoSend } from 'react-icons/io5'
const Conact = () => {
    return (
        <div className="container">
            <div className="relative">
                <div className="absolute -ml-32">
                    <img src={contactbg} alt="Contact" />
                </div>
            </div>
            <div className="flex items-center">
                <div className="">
                    <img src={contactIMG} alt="Contact img" className="" />
                </div>
                <div className="flex items-start flex-col ml-10">
                    <span className="text-green-500">
                        Biz bilan bog'lanish
                    </span>
                    <h3 className="text-3xl  mb-10 font-bold">
                        So'rovingizni yuboring
                    </h3>
                    <form className="flex flex-col  relative z-[1]">
                        <label className="text-green-500">Name</label>
                        <input type="text" className="bordernone bg-transparent mt-5 mb-10 w-[300px]" placeholder="Enter Your Name" />
                        <label className="text-green-500">Email</label>
                        <input type="email" className="bordernone bg-transparent mt-5 w-[300px] mb-10" placeholder="Enter Your Email" />
                        <label className="text-green-500">Number</label>
                        <input type="number" placeholder="Enter Your Number" className="bordernone  mt-5 w-[300px] bg-transparent mb-10" />
                        <input type="text" placeholder="Comment" className="bordernone mt-5 w-[300px] bg-transparent" />
                        <button className="flex items-center bg-[#53B17533] rounded-[50px] w-[200px] py-3  mt-10 px-4"> Xabar yuborish <IoSend className="ml-10 text-green-500" /></button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Conact