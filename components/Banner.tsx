// components/Banner.tsx
import React from 'react';
import Image from 'next/image'

const Banner: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Image src="/images/leader_board.png" width={900} height={300} alt="Raccoon NFT Banner" className="rounded-md shadow-lg" />
    </div>
  );
};

export default Banner;

