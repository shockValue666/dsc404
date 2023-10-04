// components/BouncingPhoto.tsx
import Image from 'next/image';
import React from 'react';

const BouncingPhoto: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-64px)]">
        <div className="h-1/6"></div>
        
        <div className="h-1/6 flex items-center justify-start pl-[12%]">
            <h2 className="text-white text-[30px]">Roadmap</h2>
        </div>
        
        <div className="h-4/6 flex items-center justify-center">
            <div className="relative w-[80%] h-[60%] border-dashed border-2 border-white">
                <Image width={150} height={150} src="/images/nft.jpeg" alt="Animated photo" className="animation-class pt-[50px] pb-[50px]" />
                <p className="absolute bottom-0 right-0 text-white pr-[10px]">jk bandits have fun 🤪</p>
            </div>
        </div>
    </div>

  );
};

export default BouncingPhoto;
