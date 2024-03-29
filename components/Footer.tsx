import React from 'react'
import {RiTwitterXLine} from 'react-icons/ri'
import {BsDiscord} from 'react-icons/bs' 
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="w-3/5 mx-auto my-8 bg-[#black] border border-white rounded-xl p-10">
      <div className="h-[100px] flex-grow flex items-center justify-center">
          <h2 className="text-white text-[30px]">Descientists404</h2>
          {/* <Image src={'/images/text_white.png'} width={1000} height={1000} alt="Logo" className="h-[400px] w-[400px]" /> */}
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
            <div className="flex items-center">
              <p className='mr-[5%]'>made with love by</p>
              <Image src={'/logoz/trans.png'} width={50} height={50} alt='trans' />
            </div>
      </div>
    </div>
  )
}

export default Footer;
