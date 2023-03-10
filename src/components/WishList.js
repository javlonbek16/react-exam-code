import React from 'react'
import Nav_Top from './Nav_Top'
import Header from './Header'
import cartBg from "../img/cart-bg.png"
import cartBox from "../img/bg-cart-box.png"
import { Use_r_state } from '../Store'
import { BsFillTrashFill } from "react-icons/bs"
import Price_formater from '../Price_formater'
import plus from "../img/plus.svg"

const WishList = () => {
    const { product: { like }, dis } = Use_r_state()

    return (
        <div className='mt-6- mb-72'>
            <Nav_Top />
            <Header />
            {
                like.length > 0 ? (
                    <>

                        <div className='mt-48 '>
                            <div className='mb-14 ml-16 '>
                                <span className='font-bold text-2xl'>Savatchada {like && like.length} ta mahsulot bor</span>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div>
                                {
                                    like.map((item) => (
                                        <div key={item.id} className="flex items-center py-5 w-[855px] ml-20 mb-20 bord">
                                            <div className="w-24 ml-5 ">
                                                <img src={item.img} alt="item img" />
                                            </div>
                                            <div>
                                                <h2 className=' mr-10 ml-16'>{item.title}</h2>
                                            </div>
                                            <div className="ml-20 w-10 h-10  items-center flex">
                                                <button onClick={() => {
                                                    dis({
                                                        type: "ADD_TO_CART",
                                                        payload: item
                                                    })
                                                }}>
                                                    <img src={plus} alt="add" className="cursor-pointer w-5 bg-[#53B175] rounded-2xl" />
                                                </button>
                                            </div>
                                            <div className='ml-20'>
                                                <span className="block line-through text-gray-600 ">
                                                    {new Intl.NumberFormat('de-De', { style: 'currency', currency: 'SUM' }).format(item.sale)}
                                                </span>
                                                <span className="block text-green-500 text-xl font-bold">
                                                    {new Intl.NumberFormat('de-De', { style: 'currency', currency: 'SUM' }).format(item.price)}
                                                </span>
                                                <span className="block text-red-500 text-xl font-bold">
                                                    <span className='text-yellow-500'>
                                                        total:
                                                    </span>{Price_formater(item.price)}
                                                </span>
                                            </div>
                                            <div className="deletebtn ml-28">
                                                <button onClick={() => {
                                                    dis({
                                                        type: "REMOVE_FROM_LIKE",
                                                        payload: item
                                                    })
                                                }}>
                                                    <BsFillTrashFill />
                                                </button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='mb-60  flex justify-center mt-60'>
                        <img src={cartBox} alt="" />
                        <div className="relative">
                            <sub className='absolute text-3xl text-white bg-green-500 rounded-full px-1'>
                                {like.length}
                            </sub>
                            <div className="absolute w-[700px]  -left-[200px] -top-[200px]">
                                <img src={cartBg} alt="cart-bg" className='' />
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default WishList