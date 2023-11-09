import React from 'react';
import { RiHome2Line, RiSearch2Line, RiAddLine, RiUserLine, RiMessage2Line } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 h-16 fixed bottom-0 w-full border-black border-b-8 px-10 md:px-44 cursor-pointer'>
      <Link to={"/"}><RiHome2Line className='mx-2 font-bold' size={30} /></Link>
      <Link to={"/search"}><RiSearch2Line className="mx-2" size={30} /></Link>
      <Link to={"/create"}><RiAddLine className="mx-2  font-bold" size={30} /></Link>
      <Link to={"/messages"}><RiMessage2Line className="mx-2" size={30} /></Link>
      <Link to={"/me"}><RiUserLine className="mx-2" size={30} /></Link>
    </div>
  );
}

export default Navigation;
