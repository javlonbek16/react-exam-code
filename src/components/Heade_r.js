import { NavLink, Link } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { AiOutlineHeart } from "react-icons/ai"
import { Use_r_state } from '../Store'
import intro_bg from "../img/intro-bg.png"


const Header = () => {
    const { product: { cart } } = Use_r_state()
    return (
        <>
            <div className="relative">
                <div className="absolute -top-44">
                    <img src={intro_bg} alt="" />
                </div>
            </div>
            <header className='w-full fixed top-0 left-0 z-10'>
                <div className="container">
                    <nav className="flex items-center mt-16">
                        <Link to={"/"} className="logo">LOGO</Link>
                        <ul className="flex ml-16">
                            <li className='mr-7' >
                                <NavLink to={"/"} className="text-gray-600">
                                    Bosh sahifa
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={"/product"} className="text-gray-600">
                                    Mahsulotlar
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    <div className="relative">
                        <Link to={"/wishlist"} data="0" className='w-7 absolute  CartWishlist borderBookmark left-[90%] shadow-sm -ml-10 -top-7'>
                            <AiOutlineHeart />
                        </Link>
                        <Link to={"/chart"} data={cart && cart.length} className='w-7   cartIcon absolute borderBookmark  shadow-sm left-[92%] -top-7'>
                            <FiShoppingCart />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header