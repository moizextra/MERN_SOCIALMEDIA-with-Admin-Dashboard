import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>&copy; 2023 Connected</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-500">
            <FaFacebook size={20} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaTwitter size={20} />
          </a>
          <a href="#" className="hover:text-gray-500">
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
