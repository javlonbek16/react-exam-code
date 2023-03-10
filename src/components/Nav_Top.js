import { FaMapMarkerAlt } from "react-icons/fa"
import { Link } from "react-router-dom";



const Nav_Top = () => {

    return (
        <>
            <div className="flex justify-between align-middle items-center py-3 w-full z-20 fixed top-0 left-0 ">
                <ul className="flex items-center">
                    <li className='mr-5 ml-16'>
                        <a className='text-[#505050] text-sm' href="/pruduct">Mahsulotlar katalogi</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-[#505050] text-sm' href="/">Foto-lavhalar</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-[#505050] text-sm' href="/">Yetkazib berish va to'lash</a>
                    </li>
                    <li className='mr-5'>
                        <a className='text-yellow-300 text-sm' href="/">Aksiya</a>
                    </li>
                    <li>
                        <a className='text-green-600 text-sm' href="/">Yangi</a>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="mr-5">
                        <select className='bg-transparent text-gray-500'>
                            <option value="UZ">
                                UZ
                            </option>
                            <option value="RU">
                                RU
                            </option>
                            <option value="ENG">
                                ENG
                            </option>
                        </select>
                    </li>
                    <li className="mr-5 items-center flex">
                        <button className="items-center flex mr-2">
                            Toshkent Shahar
                            <FaMapMarkerAlt />
                        </button>
                    </li>
                    <li className="mr-5">
                        <Link to={"/"} className="z-30" >
                            CHIQISH
                        </Link>
                    </li>
                </ul>
            </div>

        </>
    )
}

export default Nav_Top