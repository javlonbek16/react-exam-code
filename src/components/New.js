import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import { FreeMode, Pagination } from "swiper";
import Heart from "../img/heart-outline.svg"
import plus from "../img/plus.svg"
import { Use_r_state } from '../Store';
import Search from './Search';
import { AiOutlineDown, AiOutlineRight } from "react-icons/ai";
import "../Modal.css";
import star from "../img/stars.svg"
import tf_img from "../img/tf-img.png"
import cartBg from "../img/cart-bg.png"
import { Provider } from 'react-redux';


const New = () => {
    const { dis } = Use_r_state();
    const [products, setProducts] = useState([])
    const { product: { searchKey } } = Use_r_state()
    const { filter: { sort }, dis_filter } = Use_r_state()

    const filltered_product = () => {
        let new_product = products
        if (sort) {
            new_product = new_product.sort((a, b) => {
                return sort === "low" ? a.price - b.price : b.price - a.price
            })
        }

        return new_product
    }
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }


    const render = async () => {
        const res = await fetch("https://63d8d10b5a330a6ae16e546a.mockapi.io/nj/products")
        const data = await res.json()
        setProducts(data);
    }
    useEffect(() => {
        render()
    }, [])
    return (
        <>
            <div className='mt-60'>
                <div className="relative">
                    <div className="absolute left-[1100px] -top-20">
                        <Search />
                    </div>
                </div>
                <div>
                    <div className="relative">
                        <div className="absolute -top-[100px]">
                            <div>
                                <h3 className='text-2xl  ml-10'>
                                    Filter
                                </h3>
                            </div>
                        </div>
                        <div className="mt-16 flex flex-col items-start">
                            <label className=''>
                                <input type="radio" className='ml-10 mb-10' value="low" name='optradio'
                                    onChange={(e) => {
                                        dis_filter({
                                            type: "SORT_FILTER",
                                            payload: e.target.value
                                        })
                                    }}
                                />
                                Ascending
                            </label>
                            <label className=''>
                                <input type="radio" className='ml-10 mb-16' value="high" name='optradio'
                                    onChange={(e) => {
                                        dis_filter({
                                            type: "SORT_FILTER",
                                            payload: e.target.value
                                        })
                                    }} />
                                Descending
                            </label>
                        </div>
                        <div className="">
                            <button className="ml-10 bg-green-500 px-3 py-1 rounded-lg text-white text-lg ">
                                Clear Filter
                            </button>
                        </div>
                    </div>
                    <div className="ml-96">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper bg-transparent"
                        >
                            {
                                filltered_product().filter(i => i.title.toLowerCase().includes(searchKey)).map((item) => {
                                    return (
                                        <SwiperSlide key={item.id} className="sliderC flex flex-col py-5 px-5">
                                            <div className='mb-16'>
                                                <div className='flex items-start justify-between'>
                                                    <div className=' w-[175px] mb-5 h-[175px] mr-10'>
                                                        <img src={item.img} alt="item" className='block rounded-lg  w-8 h-8' />
                                                    </div>
                                                    <div className='w-10'>
                                                        <button onClick={() => {
                                                            dis({
                                                                type: "ADD_TO_LIKE",
                                                                payload: item
                                                            })
                                                        }}>
                                                            <img src={Heart} alt="Heart" className=" mt-5 mr-5 cursor-pointer" />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start">
                                                    <div className=' flex items-start flex-col'>
                                                        <h3 className='w-[150px]'>{item.title}</h3>
                                                        <span> {item.bool}</span>
                                                        <span className='block mt-5 line-through text-gray-500'>{item.sale} UZS</span>
                                                        <span className='text-green-500 font-bold'>{new Intl.NumberFormat('hi-UZ', { style: 'currency', currency: 'UZS' }).format(item.price)}</span>
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
                                                </div>
                                                <a href="#" onClick={toggleModal} className="m-auto mb-10 flex items-center mt-10 ml-10 text-gray-500"> Tafsilotlar<AiOutlineRight className="ml-5" /></a>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
            {modal && (
                <div className="modal z-50">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className="relative w-[900px]">
                            <div className="absolute  left-[880px] z-[999] -top-[90px]">
                                <button className="close-modal text-3xl   bg-gray-300 shadow-lg " onClick={toggleModal}>
                                    X
                                </button>
                            </div>
                            <div className="flex items-start mt-24">
                                <div className="">
                                    <img src={tf_img} alt="tf_img" className="" />
                                </div>
                                <div className='flex  flex-col items-start  mb-10'>
                                    <h3 className="text-3xl font-bold">Rastaropsha MAX</h3>
                                    <img src={star} alt="" /> 4.7
                                    <div className='flex   mb-10 items-center'>
                                        <button className='text-3xl  mr-5 text-gray-500 cursor-pointer'>-</button>
                                        <div className="borderer font-bold">

                                        </div>
                                        <button className='cursor-pointer ml-5 text-green-500 text-3xl'>+</button>
                                    </div>
                                    <hr className='w-full' />
                                    <div className="flex w-full mt-10 justify-between">
                                        <span>Mahsulot haqida</span>
                                        <span>
                                            <AiOutlineDown />
                                        </span>
                                    </div>
                                    <span className='w-[500px] mt-10 text-[#7C7C7C]'>Xalq tabobatida jigar uchun foydalidir, hazm qilishni yaxshilaydi, metabolizmni yaxshilaydi, limfa tizimini normallantiradi, qonni tozalaydi, semizlikni oldini oladi</span>
                                    <hr className='w-full mt-10' />
                                    <div className="flex w-full mt-10 justify-between">
                                        <span className='font-bold'>Og’irligi</span>
                                        <span>
                                        </span> <AiOutlineRight className="ml-5" />
                                        <div className="relative">
                                            <div className="absolute -left-52 -top-1">
                                                <span className='bg-gray-300  rounded-md py-1 px-1'>
                                                    100gr
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="relative z-50">
                                        <div className="absolute left-80 top-10">
                                            <button className="text-white bg-green-600 w-[150px] rounded-3xl py-2 px-3">Savatga qo'shish</button>
                                        </div>
                                    </div>
                                    <div className="relative z-40 w-[100px]">
                                        <div className="absolute w-[300px]  left-[300px] -top-[10px]">
                                            <img src={cartBg} alt="cart-bg" className='' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default New
