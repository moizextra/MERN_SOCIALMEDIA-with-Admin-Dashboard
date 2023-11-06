import React from 'react'
import {AiOutlineBell} from 'react-icons/ai'
import UserProfile from './UserProfile'
const Header = () => {
  return (
    <nav className="bg-gray-100 h-20 flex justify-center items-center border-black border-t-8">
<h1 className='font-bold text-2xl font-mono text-center'>Connected</h1>
<div className='absolute right-8 flex justify-center items-center'>
<button className='mx-3'><AiOutlineBell size={40}/></button>
<UserProfile/>
</div>
    </nav>

  )
}

export default Header