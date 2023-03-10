import React from 'react'
import { Use_r_state } from '../Store'
import { BsFillTrashFill } from "react-icons/bs"
import Price_formater from '../Price_formater'
import cartBox from "../img/bg-cart-box.png"
import cartBg from "../img/cart-bg.png"
import Nav_Top from './Nav_Top'
import Header from './Header'

const ChartItem = () => {
    const { product: { cart }, dis } = Use_r_state()
    const Total = (a, b) => {
        return a * b;
    }
    const { totalItem, totalPrice } = cart.reduce((acc, cur) => {
        acc.totalItem += cur.qty;
        acc.totalPrice += cur.price * cur.qty
        return acc;
    }, {
        totalItem: 0,
        totalPrice: 0
    })
    return (
        <div className=''>
            <Nav_Top />
            <Header />
            {
                cart.length > 0 ? (
                    <>

                        <div className='mt-48 '>
                            <div className='mb-14 ml-16 '>
                                <span className='font-bold text-2xl'>Savatchada {cart && cart.length} ta mahsulot bor</span>
                            </div>
                        </div>
                        <div className='flex items-start'>
                            <div>
                                {
                                    cart.map((item) => (
                                        <div key={item.id} className="flex items-center py-5 w-[855px] ml-20 mb-20 bord">
                                            <div className="w-24 ml-5 ">
                                                <img src={item.img} alt="item img" />
                                            </div>
                                            <div>
                                                <h2 className=' mr-10 ml-16'>{item.title}</h2>
                                            </div>
                                            <div className='flex items-center'>
                                                <div className='text-3xl  mr-5 text-gray-500 cursor-pointer'>-</div>
                                                <div className="borderer font-bold">
                                                    {item.qty}
                                                </div>
                                                <div className='cursor-pointer ml-5 text-green-500 text-3xl'>+</div>
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
                                                    </span>{Price_formater(Total(item.price, item.qty))}
                                                </span>
                                            </div>
                                            <div className="deletebtn ml-28">
                                                <button onClick={() => {
                                                    dis({
                                                        type: "REMOVE_FROM_CART",
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
                            <div className="nomiBOladi py-5 px-5 h-72 ml-[37px] mb-40">
                                <div className='flex flex-col mr-16'>
                                    <span className='mb-5'>Mahsulotlar({totalItem})</span>
                                    <span className='mb-5'>
                                        Chegirma
                                    </span>
                                    <span className='mb-5'>
                                        Yetkazib berish
                                    </span>
                                    <span className='mb-5 font-bold'>Umumiy</span>
                                </div>
                                <div className=' flex flex-col'>
                                    <span className='mb-5'>
                                        {Price_formater(totalPrice)}
                                    </span>
                                    <span className='mb-5'>
                                        0
                                    </span>
                                    <span className='mb-5'>
                                        UZS 150,00
                                    </span>
                                    <span className='mb-5 font-bold '>
                                        {Price_formater(totalPrice + 150)}
                                    </span>
                                </div>
                                <div className="relative">
                                    <div className="absolute top-40 -left-56">
                                        <button className='rounded-[30px] bg-green-500 text-white w-56 py-[10px] mb-5'>To’lovga o’tish</button>
                                        <button className='rounded-[30px] bg-[#53b1751a] text-[#181725] w-56 py-[10px]'>Menyuga qaytish</button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='mb-60  flex justify-center mt-60'>
                        <img src={cartBox} alt="" />
                        <div className="relative">
                            <sub className='absolute text-3xl text-white bg-green-500 rounded-full px-1'>
                                {cart.length}
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

export default ChartItem