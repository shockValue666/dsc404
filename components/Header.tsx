// components/Header.tsx
import React from 'react';
import {RiTwitterXLine} from 'react-icons/ri'
import {BsDiscord} from 'react-icons/bs'

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-24 shadow-sm ">
      <a 
        href="https://twitter.com/SolRaccs" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-black text-white px-6 py-3 m-2 rounded-md hover:bg-gray-600 transition duration-300"
      >
        <RiTwitterXLine size={32} />
      </a>
      <a 
        href="https://discord.gg/yourlink" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#7289DA] text-white px-6 py-3 m-2 rounded-md hover:bg-gray-600 transition duration-300"
      >
        <BsDiscord size={32}/>
      </a>
    </div>
  );
};

export default Header;
