import React from 'react'
import Image from 'next/image'

const Logo = () => {
  return (
    <div className="flex justify-center bg-[#FF6AC2]">
        <div className='animation-up-down'>
            <Image src="/images/logo.png" width={400} height={400} alt="Raccoon NFT Banner" className="rounded-md my-[5%]" />
        </div>
    </div>
  )
}

export default Logo