import React, { useContext, useEffect } from 'react'
import MyContext from '../context/MyContext'
import { changeText } from '../utils/Utils';

const Search = () => {
  const { hsnCode, setHsnCode, onSearch, setSearchParams } = useContext(MyContext);
  return (
    <div className="flex justify-center py-10 sm:py-20">
        <input type="number" name="hsnCode" value={hsnCode} onChange={(e) => {changeText(e, setHsnCode, hsnCode, setSearchParams)}} className="sm:text-3xl sm:p-8 rounded-lg rounded-tr-none rounded-br-none border-0 outline-0 text-center w-[800px]" />
        <button onClick={() => {onSearch(hsnCode)}} className="p-6 sm:p-[36px] text-xl rounded-lg rounded-tl-none border-l-2 rounded-bl-none bg-white">Search</button>
    </div>
  )
}

export default Search
