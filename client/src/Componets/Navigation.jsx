import React from 'react';
import { RiHome2Line, RiSearch2Line, RiAddLine, RiUserLine, RiMessage2Line } from 'react-icons/ri';

const Navigation = () => {
  return (
    <div className='flex justify-between items-center bg-gray-100 h-16 absolute bottom-0 w-full border-black border-b-8 px-10 md:px-44 cursor-pointer'>
      <RiHome2Line className='mx-2 font-bold' size={30} />
      <RiSearch2Line className="mx-2" size={30} />
        <RiAddLine className="mx-2  font-bold" size={30} />
      <RiMessage2Line className="mx-2" size={30} />
      <RiUserLine className="mx-2" size={30} />
    </div>
  );
}

export default Navigation;
