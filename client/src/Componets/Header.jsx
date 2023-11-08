import React from 'react'
import {AiOutlineBell} from 'react-icons/ai'
import UserProfile from './UserProfile'
import {Link} from 'react-router-dom'
import {FiLogOut} from "react-icons/fi"
import {HiOutlineLogin} from "react-icons/hi"
const Header = () => {
  const isAuthenticated = true;
  return (
    <nav className="bg-gray-100 h-20 flex items-center border-black border-t-8 p-2">
<h1 className=' font-extrabold font-serif text-2xl '>Connected</h1>
  <div className=" absolute right-8 flex justify-center items-center">
         {!isAuthenticated &&  <a to="/" className=""><HiOutlineLogin size={40} /></a>
      }
      
      {isAuthenticated && <button className='mx-3'><AiOutlineBell size={25}/></button>
}
      {isAuthenticated && <UserProfile/>}
      {isAuthenticated &&  <button  className="p-1 m-3 border-black border rounded-md"><FiLogOut size={20}/></button>}
   
        </div>
    </nav>

  )
}

export default Header