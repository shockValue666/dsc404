import React from 'react'
import {RiTwitterXLine} from 'react-icons/ri'
import {BsDiscord} from 'react-icons/bs' 

const Footer = () => {
  return (
    <div className="w-3/5 mx-auto my-8 bg-[#FFCF96] text-[#FF8080] rounded-xl p-10">
      <div className="h-[100px] flex-grow flex items-center justify-center">
          <h2 className="text-[#FF8080] text-[30px]">SolRaccs</h2>
      </div>
      <div className="h-24 flex items-center justify-center space-x-4">
          <button className="bg-black  text-white font-bold py-2 px-4 rounded-md transition duration-200">
              <a className="" href="https://twitter.com/SolRaccs" target="_blank" rel="noopener noreferrer">
                <RiTwitterXLine size={32} />
              </a>
          </button>
          <button className="bg-[#7289DA]  text-white font-bold py-2 px-4 rounded-md transition duration-200">
              <a className="" href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                <BsDiscord size={32}/>
              </a>
          </button>
      </div>
      <div className='flex items-center justify-center space-x-4'>
            <p>made with love by <a href="https://twitter.com/shockingClit" target='blank'><span className='text-indigo-300'>eunuch</span></a></p>
      </div>
    </div>
  )
}

export default Footer;
