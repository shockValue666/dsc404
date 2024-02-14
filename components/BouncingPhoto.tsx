// components/BouncingPhoto.tsx
import Image from 'next/image';
import React from 'react';

const BouncingPhoto: React.FC = () => {
  return (
    <div className="relative h-[calc(100vh-64px)] pt-[7%]">
        
        <div className="h-1/6 flex items-center justify-start pl-[12%]">
            <h2 className="text-white text-[40px]">Roadmap</h2>
        </div>
        
        <div className="h-5/6 flex items-center justify-center -mt-[6%]">
            <div className="relative w-[80%] h-[60%] border-dashed border-2 border-[#B931FC] overflow-hidden">
                {/* <Image width={150} height={150} src="/images/nft_1.png" alt="Animated photo" className="animation-class pb-[5%] pt-[15%]" /> */}
                <Image width={200} height={200} src="/logoz/output-onlinepngtools.png" alt="Animated photo" className="animation-class pb-[15%]" />
                {/* <Image width={150} height={150} src="/images/nft_2.png" alt="Animated photo" className="slide-animation pb-[15%] pt-[5%] right-0" /> */}
                <p className="absolute bottom-0 right-0 text-white pr-[10px]">shhhh.... 🤪</p>
            </div>
        </div>
    </div>

  );
};

export default BouncingPhoto;
