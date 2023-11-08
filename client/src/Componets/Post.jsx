import React from 'react'
import {AiOutlineHeart} from "react-icons/ai"
import {BiMessageSquareDetail} from "react-icons/bi"
const Post = () => {
  return (
    <div className=' Post  flex flex-col p-3 m-10 rounded-md '>
      {/* User Avatar and Name */}
      <span className='flex items-center mb-2 '>
        <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='rounded-full h-12 w-12 mx-2' alt="" />
        <span className='font-bold'>moiz77131</span>
      </span>
        <span className='content my-2'>
          <img src="https://images.unsplash.com/photo-1699304051490-2cd1fa0b49ae?q=80&w=420&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='border h-1/4' alt="" />
          <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis commodi see more..</p>
        </span>
        <span className='likes flex justify-between '>
<span className='flex justify-center items-center'><p>20 comments </p><BiMessageSquareDetail className='mx-2'/></span>
<span className='mx-2 flex justify-around items-center'> You & 300 others <button className='mx-2'><AiOutlineHeart size={20}/></button></span> 
        </span>
    </div>
  )
}

export default Post