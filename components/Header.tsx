// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-16 bg-[#3A3A3D] shadow-md">
      <a 
        href="https://twitter.com/yourhandle" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-700 text-white px-6 py-3 m-2 rounded-md hover:bg-gray-600 transition duration-300"
      >
        Twitter
      </a>
      <a 
        href="https://discord.gg/yourlink" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-gray-700 text-white px-6 py-3 m-2 rounded-md hover:bg-gray-600 transition duration-300"
      >
        Discord
      </a>
    </div>
  );
};

export default Header;
