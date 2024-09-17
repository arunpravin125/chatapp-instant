import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import useConversation from "../../Zustand/useConversation";
import useGetConversation from '../../Hooks/useGetConversation'
import toast from 'react-hot-toast';
const SearchInput = () => {
  const [search,setSearch]=useState("")
   const {setSelectedConversation}=useConversation()
   const {conversations}=useGetConversation()
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!search)return;
    if(search.length<3){
      toast.error("Search term must be 3 characters and above")
    }
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()))
    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    }else{
      toast.error("No Such User found")
    }
  }
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search"  type="text"className="input ml-2 input-bordered rounded-full" ></input>
      <button className="btn btn-circle">
      <IoSearch className="w-6 h-6" />
      </button>
    </form>
  )
}

export default SearchInput
