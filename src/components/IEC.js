import car from "../img/deliveryCar.svg"
import Wallet from "../img/Wallet.svg"
import ceil from "../img/ceil.svg"
import music from "../img/music.svg"

const IEC = () => {
    return (
        <>
            <hr />
            <ul className="flex items-start mt-5 mb-5">
                <li>
                    <div className="flex mr-24 items-start">
                        <img src={car} alt="Delivery Сar" className="mr-5" />
                        <div>
                            <h3 className="text-lg">
                                Yetkazib berish bepul
                            </h3>
                            <p className="w-[220px]"> 100 000 somdan ortiqbuyurtma berganingizda</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex mr-9 items-start">
                        <img src={Wallet} alt="Wallet" className="mr-5" />
                        <div>
                            <h3 className="text-lg">
                                Tez to'lov
                            </h3>
                            <p className="w-[220px]">100% xavfsiz to'lov</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex mr-16 items-start">
                        <img src={ceil} alt="Ceil" className="mr-5" />
                        <div>
                            <h3>
                                Doimiy chegirmalar
                            </h3>
                            <p className="w-[220px]">Ular allaqachon ishlamoqda</p>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="flex  items-start">
                        <img src={music} alt="" className="mr-5" />
                        <div>
                            <h3>
                                Onlayn yordam
                            </h3>
                            <p className="w-[220px]">Ish vaqti: 08:00 - 18:00</p>
                        </div>
                    </div>
                </li>
            </ul>
            <hr />
        </>
    )
}

export default IEC