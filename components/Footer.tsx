import React from 'react'

const Footer = () => {
  return (
    <div className="w-3/5 mx-auto my-8 bg-[#2E2E2E] rounded-xl p-10">
      <div className="h-[100px] flex-grow flex items-center justify-center">
          <h2 className="text-white text-[30px]">SolRaccs</h2>
      </div>
      <div className="h-24 flex items-center justify-center space-x-4">
          <button className="bg-violet-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200">
              <a href="https://twitter.com/SolRaccs" target="_blank" rel="noopener noreferrer">
                  Twitter
              </a>
          </button>
          <button className="bg-violet-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition duration-200">
              <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                  Discord
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
