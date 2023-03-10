import React, { useState } from 'react'
import "../acardion.css"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Acardion = ({ title, info, number }) => {

    const [expanded, setExpanded] = useState(false)
    return (
        <article className='question' key={number}>
            <div>
                <div className="flex">
                    <span className="block mr-5 text-green-500">
                        {number}
                    </span>
                    <h4 onClick={() => setExpanded(!expanded)} className='question-title'>
                        {title}
                    </h4>
                </div>
                <div className="relative">
                    <button className='btn absolute left-[500px] -top-5' onClick={() => setExpanded(!expanded)}>
                        {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                    </button>
                </div>
            </div>
            {expanded && <p className=' w-[400px]'>{info}</p>}
        </article>
    )
}

export default Acardion