import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom";
import React, { useState } from "react";
import "../Modal.css"
import { languages } from '../i18n'
import { useT } from "talkr";



const NavTop = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    if (modal) {
        document.body.classList.toggle('active-modal')
    }
    const { setLocale, T } = useT()
    return (
        <>
            <div className="flex justify-between align-middle items-center py-3 w-full z-20 fixed top-0 left-0  bg-[#cdebd8]">
                <ul className="flex items-center">
                    <li className='mr-5 ml-16'>
                        <a className='text-[#505050] text-sm' href="/pruduct">{T("nav.product")}</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-[#505050] text-sm' href="/">{T("nav.phtos")}</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-[#505050] text-sm' href="/">{T("nav.delivery")}</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-yellow-300 text-sm' href="/">{T("nav.action")}</a>
                    </li>
                    <li>
                        <a className='text-green-600 text-sm' href="/">{T("nav.new")}</a>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="mr-5">
                        {
                            languages.map((item) => (
                                <button key={item.key} onClick={() => setLocale(item.key)} className="ml-5 rounded-xl bg-gray-600 py-1 px-2">
                                    {item.label}
                                </button>

                            ))
                        }
                    </li>
                    <li className="mr-5 items-center flex">
                        <button className="items-center flex mr-2">
                            {T("nav.city")}
                            <FaMapMarkerAlt />
                        </button>
                    </li>
                    <li className="mr-5">
                        <button className="z-30" onClick={toggleModal}>
                            {T("nav.enter")}
                        </button>
                    </li>
                </ul>
            </div >
            {modal && (
                <>
                    <div className="modal z-40">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <div className="relative">
                                <div className="absolute  left-[580px] -top-[90px]">
                                    <button className="close-modal text-3xl shadow-lg rounded-full" onClick={toggleModal}>
                                        X
                                    </button>
                                </div>
                                <div className="rounded-3xl w-[340px] bg-gray-200 px-5 py-2">
                                    <button className="text-green-500 rounded-2xl ml-24 px-3 py-1 text-lg bg-slate-50">{T("nav.sp")}</button>
                                </div>
                                <form className="flex flex-col  mt-16 relative z-[1]">
                                    <input type="text" required className="bordernone bg-transparent mt-5 mb-10 w-[300px]" placeholder="Enter Your Name" />
                                    <input type="email" required className="bordernone bg-transparent mt-5 w-[300px] mb-10" placeholder="Enter Your Email" />
                                    <input type="password" required placeholder="Enter Your Password" className="bordernone  mt-5 w-[300px] bg-transparent mb-10" />

                                    <div className="flex flex-col items-start">
                                        <span className="w-[300px]  block mr-5">
                                            {T("info.sp_info")}
                                        </span>
                                        <span className="text-green-500  ml-5">
                                            {T("info.sp_infod")}
                                        </span>
                                    </div>
                                    <Link to={"/product"} className="text-white bg-green-500 rounded-[50px] px-[111px] py-[10px] mt-6">{T("nav.sp")}</Link>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default NavTop