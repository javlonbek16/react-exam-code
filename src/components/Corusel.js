import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "../styles.css";
import { FreeMode, Pagination } from "swiper";
import Heart from "../img/heart-outline.svg"
import plus from "../img/plus.svg"
import first from "../img/first.png"
import second from "../img/second.png"
import third from "../img/third.png"
import fourth from "../img/fourth.png"
import { AiOutlineRight } from "react-icons/ai";



const Corusel = () => {
    const objSwiper = [
        {
            id: 1,
            img: first,
            h3: "ROHAT Yog`i №2",
            YorN: "Mavjud",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs"
        },
        {
            id: 2,
            img: second,
            h3: "Rohat Sirop",
            YorN: "Erkaklar kuchi",
            sale: "200,190, uzs",
            currentPrice: "150 000 uzs"
        },
        {
            id: 3,
            img: third,
            h3: "ROHAT Yog`i №2",
            YorN: "Mavjud",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs"
        },
        {
            id: 4,
            img: fourth,
            h3: "Organic Bananas",
            YorN: "7pcs, Price",
            sale: "17,190, uzs",
            currentPrice: "16 000 uzs"
        },
        {
            id: 5,
            img: second,
            h3: "Rohat Sirop",
            YorN: "Erkaklar kuchi",
            sale: "200,190, uzs",
            currentPrice: "150 000 uzs"
        }
    ]
    return (
        <>
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
                    objSwiper.map(item =>
                    (
                        <SwiperSlide key={item.id}>
                            <div className="sliderC flex flex-col items-start p-5" >
                                <div className="flex">
                                    <img src={item.img} alt="medice-img" />
                                    <img src={Heart} alt="Heart" className=" mt-5 mr-5 cursor-pointer" />
                                </div>

                                <h3 className="text-lg">
                                    {item.h3}
                                </h3>
                                <span className="text-sm -ml-[2px] text-gray-300">
                                    {item.YorN}
                                </span>
                                <div className="flex items-start">
                                    <div>
                                        <p className="line-through -ml-16 block mt-3 text-gray-300">
                                            {item.sale}
                                        </p>
                                        <span className="text-[#53B175] -ml-1 text-3xl font-semibold">
                                            {item.currentPrice}
                                        </span>
                                    </div>
                                    <div className="ml-20">
                                        <img src={plus} alt="add" className="cursor-pointer mt-10 bg-[#53B175] rounded-2xl" />
                                    </div>
                                </div>
                                <a href="#" className="m-auto mb-10 mt-10 flex items-center text-gray-500"> Tafsilotlar <AiOutlineRight className="ml-5" /> </a>
                            </div>
                        </SwiperSlide>
                    )
                    )
                }
            </Swiper>
        </>
    );
}

export default Corusel