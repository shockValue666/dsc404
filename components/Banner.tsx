// components/Banner.tsx
import React from 'react';
import Image from 'next/image'

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center mt-10">
      <Image src="/images/banner.jpeg" width={1280} height={426} alt="Raccoon NFT Banner" className="rounded-md shadow-lg" />
    </div>
  );
};

export default Banner;

