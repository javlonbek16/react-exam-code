import Intro from '../components/Intro'
import Corusel from '../components/Corusel'
import one from "../img/one.png"
import AcordionW from '../components/AcordionW'
import Conact from '../components/Conact'
import two from "../img/logos.svg"
import NavTop from '../components/NavTop';
import Heade_r from "../components/Heade_r"
import { AiOutlineArrowRight } from 'react-icons/ai'
const Home = () => {
    return (
        <>
            <NavTop />
            <Heade_r />
            <main className='mt-[200px]'>
                <Intro />
                <div className="mt-20">
                    <h2 className="w-[287px] text-3xl font-mono ml-16 mb-10">
                        Mahsulotlarimiz ro'yxati
                    </h2>
                    <Corusel />
                    <button className="mt-10 p-3 bg-[#53b1751a]  flex items-center rounded-3xl ml-24">
                        Barcha mahsulotlarni ko’rish <AiOutlineArrowRight className='ml-5 text-green-400' />
                    </button>
                    <img src={one} alt="" />
                    <AcordionW />
                    <Conact />
                    <img src={two} alt="" className='m-auto' />
                </div>
            </main>
        </>
    )
}

export default Home