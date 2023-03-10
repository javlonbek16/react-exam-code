import React from 'react'
import { Link } from 'react-router-dom'
import facebook from "../img/facebook.svg"
import instagram from "../img/instagram.png"
import youtube from "../img/youtube.png"
import telegram from "../img/telegram.png"
import playMarket from "../img/playMarket.png"
import AppStorte from "../img/AppStore.svg"
import HomeIMG from "../img/home.svg"
const Footer = () => {
    return (
        <>
            <footer className='bg-[#282828] mt-10 p-10 pb-0'>
                <div className="container">
                    <div className="flex justify-between">
                        <div className='flex flex-col items-start'>
                            <Link to={"/"} className="text-white font-bold mb-10 text-3xl">
                                LOGO
                            </Link>
                            <span className="text-gray-400 block w-[200px] mb-5 text-xs">
                                Bu sog'liq va hayot sifatini yaxshilash uchun mahsulotlar
                            </span>
                            <span className="text-gray-400 text-xs block">
                                Ish vaqti: Har kuni 8:00 dan 18:00 gacha
                            </span>
                            <ul className="flex mt-5">
                                <li className=""><a href="https://www.facebook.com/" target={'_blank'}><img src={facebook} alt="" className="" /></a></li>
                                <li className="ml-5"><a href="https://www.instagram.com/" target={'_blank'}><img src={instagram} alt="" className="" /></a></li>
                                <li className="ml-5"><a href="https://nj-youtube.netlify.app/" target={'_blank'}><img src={youtube} alt="" className="" /></a></li>
                                <li className="ml-5"><a href="https://telegram.org/" target={'_blank'}><img src={telegram} alt="" className="" /></a></li>
                            </ul>
                            <div className="rounded-t-3xl p-6  -ml-16 bg-green-500 mt-20">
                                <div className="flex justify-between">
                                    <span className="text-white mr-[250px]">E-mail</span>
                                    <span className="text-white">Bizga qo'ng'iroq qiling</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-white mr-[250px]">info@mehrigiyo.uz</span>
                                    <span className="text-white">+99898 125 31 03</span>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute left-28">
                                <span className="text-xl  text-white">Huquqiy</span>
                            </div>
                        </div>
                        <div className=" flex flex-col items-end ">
                            <span className="text-white">Ilovani yuklab olish</span>
                            <img src={playMarket} alt="Play market" className='mt-7 mb-7' />
                            <img src={AppStorte} alt="App Store" />
                            <img src={HomeIMG} alt="" className='-mr-16 mt-10' />
                        </div>
                    </div>
                </div>
            </footer>
            <div className='flex justify-between items-start py-5'>
                <div>
                    <p className="w-[500px] ml-10">
                        © 1996-2021. Mehrigiyo. Barcha huquqlar himoyalangan.
                        Saytdan olingan barcha maʼlumotlar chop etilganda veb-saytga havola qilish majburiy.
                    </p>
                </div>
                <div>
                    <Link to={"/"} className="text-lg mr-10" >Bosh sahifa</Link>
                    <Link to={"/"} className="text-lg mr-10" >Biz haqimizda</Link>
                    <Link to={"/"} className="text-lg mr-10" >Yangiliklar</Link>
                </div>
            </div>
        </>
    )
}

export default Footer