import Heart from "../img/heart-outline.svg"
import plus from "../img/plus.svg"
import first from "../img/first.png"
import second from "../img/second.png"
import third from "../img/third.png"
import fourth from "../img/fourth.png"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import { FreeMode, Pagination } from "swiper";
import { useState } from "react"
const Korzinka = () => {
    // const [hanlde, setHandle] = useState()
    // function handleClick(id) {
    //     if (id == id) {

    //     }
    // }
    const [search, setSearch] = useState("")
    const [select, setSelect] = useState("")
    const objSwiper = [
        {
            id: 1,
            img: first,
            h3: "ROHAT Yog`i №2",
            YorN: "Mavjud",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs",
            category: "unavailable"
        },
        {
            id: 2,
            img: second,
            h3: "Rohat Sirop",
            YorN: "Erkaklar kuchi",
            sale: "200,190, uzs",
            currentPrice: "150 000 uzs",
            category: "available"
        },
        {
            id: 3,
            img: third,
            h3: "ROHAT Yog`i №2",
            YorN: "Mavjud",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs",
            category: "unavailable"
        },
        {
            id: 4,
            img: fourth,
            h3: "Organic Bananas",
            YorN: "7pcs, Price",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs",
            category: "available"
        },
        {
            id: 5,
            img: second,
            h3: "Rohat Sirop",
            YorN: "Erkaklar kuchi",
            sale: "200,190, uzs",
            currentPrice: "150 000 uzs",
            category: "available"
        }
    ]
    let filteredPruduct = objSwiper.filter((data) => {
        if (select === "avalible") {
            return data.category === true
        } else if (select === "unavailable") {
            return data.category === false
        } else {
            return data
        }
    })
    function FilterValue(e) {
        setSelect(e.target.value)
    }
    return (
        <>
            <div className="inputWrapper relative mb-60">
                <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} className="absolute left-[1100px] -top-10 z-20" />
            </div>
            <div className="inputWrapper relative mb-96">
                <select className="absolute z-10 -top-56 left-48" onChange={FilterValue}>
                    <option value="all" >All</option>
                    <option value="avalible">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </div>
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
                    objSwiper.filter((item) => {
                        return search === ""
                            ? item
                            : item.h3.includes(search)
                    }).map(item =>
                    (
                        <SwiperSlide key={item.id} >
                            <div className="sliderC flex flex-col items-start" >
                                <div className="flex">
                                    <img src={item.img} alt="medice-img" />
                                    <img src={Heart} alt="Heart" className=" mt-5 mr-5 cursor-pointer" />
                                </div>
                                <h3 className="text-lg">
                                    {item.h3}
                                </h3>
                                <span className="text-sm text-gray-300">
                                    {item.YorN}
                                </span>
                                <div className="flex items-start">
                                    <div>
                                        <p className="line-through text-gray-300">
                                            {item.sale}
                                        </p>
                                        <span className="text-[#53B175] text-3xl font-semibold">
                                            {item.currentPrice}
                                        </span>
                                    </div>
                                    <div className="ml-20">
                                        <button>
                                            <img src={plus} alt="add" className="cursor-pointer bg-[#53B175] rounded-2xl" />
                                        </button>
                                    </div>
                                </div>
                                <a href="#" className="m-auto mb-10 mt-10 text-gray-500"> Tafsilotlar {">"}</a>
                            </div>
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </>
    )
}

export default Korzinka