import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Use_r_state } from '../Store'

const Search = () => {
    const { product: { searchKey }, dis } = Use_r_state()
    return (
        <div>
            <div className="relative">
                <div className="absolute top-2 left-36">
                    <AiOutlineSearch />
                </div>
            </div>
            <form className=''>
                <input type="text" placeholder='search...' className='py-1 placeholder:text-center px-2 rounded-2xl' onChange={(e) => {
                    dis({
                        type: "SEARCH",
                        payload: e.target.value
                    })
                }} />
            </form>
        </div>
    )
}

export default Search