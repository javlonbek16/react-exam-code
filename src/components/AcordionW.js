import React from 'react'
import Acardion from './Acardion'
import { AiOutlineArrowRight } from "react-icons/ai";

const AcordionW = () => {
    const acardionObj = [
        {
            number: 1,
            title: "Какой состав сока Alatoo?",
            info: "Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин."
        },
        {
            number: 2,
            title: "Сколько стоит Алатоо и сколько стоит доставка?",
            info: "Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин."
        }, {
            number: 3,
            title: "Здравствуйте, аллергия часто на этот сок?",
            info: "Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин."
        }, {
            number: 4,
            title: "Эффективен ли сок Алатоо при часто рецидивирующем герпесе?",
            info: "Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин."
        }, {
            number: 5,
            title: "Здравствуйте, можно ли принимать при полипе в жёлчном пузыре?",
            info: "Детокс сок Алатоо имеет очень простой состав. Это сок зеленой папайи и сок горького арбуза. В свою очередь эти два компонента включают в себя множество полезных ферментов, микроэлементов и витаминов, таких как органические кислоты, витамин с, витамин b1, витамин d, а также фермент папаин."
        },
    ]
    return (
        <div className="container">
            <div className="flex relative">
                <div className="flex items-start  flex-col">
                    <h2 className="text-2xl font-semibold">Ko’p so'raladigan savollar</h2>
                    <span className="text-green-500 w-[200px] block mt-5">Qo'shimcha ma'lumot uchunbiz bilan bog'laning</span>
                    <button className="mt-10 flex items-center w-[200px] py-3 px-9 bg-[#53b1751a] rounded-3xl ">
                        Batafsil <AiOutlineArrowRight className='ml-16 text-green-500' />
                    </button>
                </div>
                <div className='ml-40'>
                    {acardionObj.map((item) => (
                        <Acardion key={item.number} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AcordionW