import React from 'react'
import { IoSearch } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input placeholder="Search"  type="text"className="input ml-2 input-bordered rounded-full" ></input>
      <button className="btn btn-circle">
      <IoSearch className="w-6 h-6" />
      </button>
    </form>
  )
}

export default SearchInput
