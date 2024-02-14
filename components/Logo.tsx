import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex justify-center bg-[#black]">
        <div className='animation-up-down'>
            <Image src="/logoz/output-onlinepngtools.png" width={400} height={400} alt="Raccoon NFT Banner" className="rounded-md" />
            <div className="flex justify-center">
              <h1 className="text-white text-4xl font-bold mt-4">Descientists404</h1>
            </div>
        </div>
    </div>
  )
}

export default Logo