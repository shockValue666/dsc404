"use client";
// components/InteractiveBoxes.tsx
import React, { useState } from 'react';
import Image from 'next/image';

const BoxContent = [
  { id: 1, initial: "how many?",content: '4040' },
  { id: 2, initial: "how much?", content: '0.00404 $ETH' },
  { id: 3, initial: "wen?", content: 'sooner than you think...' },
  { id: 4, initial: "where?", content: 'Ethereum' },
];

// const InteractiveBoxes: React.FC = () => {
//   const [activeBox, setActiveBox] = useState<number | null>(null);

//   const handleBoxClick = (id: number) => {
//     setActiveBox(id === activeBox ? null : id);
//   };

//   return (
//     <div className="relative h-[calc(100vh-64px)] px-[5%] bg-[#7858A6]">
//       <div className="h-2/6 flex items-center justify-between p-5 space-x-4"> {/* Added space-x-4 for spacing */}
//         <h2 className="text-white text-[40px]">Minting</h2>
//         <div className=''>
//           <div className='animation-rot'>

//             <Image src='/images/logo_2.png' width={200} height={200} alt="Description of Image" className=" transform rotate-12"/>
//           </div>
//         </div>
//       </div>

//       <div className="h-4/6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 w-[100%] p-4 ">
//       {BoxContent.map((box) => (
//           <div 
//             className="w-full relative" // Added padding-bottom to enforce square shape
//             onClick={() => handleBoxClick(box.id)}
//             key={box.id}
//           >
//             <div
//               className="bg-[#B931FC] rounded-xl transition-all duration-300 absolute inset-0 flex items-center justify-center"
//             >
//               <div className={` p-4 text-[30px] text-center text-white font-bold ${activeBox === box.id ? 'hidden' : 'block'}`}>
//                 {box.initial}
//               </div>
//               {
//                 box.src!=="" ? (
//                   <div className={` p-4 text-center text-[30px] text-white  ${activeBox === box.id ? 'block' : 'hidden'}`}>
//                     <Image src={box.src} alt='Image Description' layout="fill" className={` object-cover scaled-image ${box.id === 2 ? 'push-right' : ''}`}/>
//                   </div>
//                 ):
//                 (
//                   <div className={` p-4 text-center text-[30px] text-white  ${activeBox === box.id ? 'block' : 'hidden'}`}>
//                     {box.content}
//                   </div>
//                 )
//               }
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };


interface InteractiveBoxProps{
  box:any,
  isActive:any,
  onClick:any
}

const InteractiveBox:React.FC<InteractiveBoxProps> = ({ box, isActive, onClick }) => (
  <div 
    className="relative w-full pb-1/2 cursor-pointer" // width is 100% of its container, padding-bottom is 50% to enforce square
    onClick={onClick}
  >
    <div className="bg-white rounded-xl transition-all duration-300 flex items-center justify-center absolute top-0 left-0 right-0 bottom-0">
      { isActive ? (
        box.src ? (
          // <Image src={box.src} alt='Box Image' layout="fill" className={box.id === 2 ? 'object-right' : 'object-cover'} />
          <Image src={box.src} alt='Box Image' layout="fill" className={'object-right rounded-xl'} />
        ) : (
          <p className="text-[30px] text-center text-black">{box.content}</p>
        )
      ) : (
        <p className="text-[30px] text-center text-black font-bold">{box.initial}</p>
      )}
    </div>
  </div>
);

const InteractiveBoxes: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  return (
    <div className="relative h-[calc(100vh-64px)] px-[5%] bg-gradient-to-b from-[#000000] to-transparent border-t-2 border-gray-50">
      <div className="h-1/3 flex items-center justify-between p-5 space-x-4">
        <h2 className="text-white text-[40px]">Minting</h2>
        {/* <div className='animation-rot'> */}
        <div>
          <Image src='/logoz/output-onlinepngtools.png' width={200} height={200} alt="Logo" className="transform rotate-12"/>
        </div>
      </div>

      <div className="h-2/3 grid grid-cols-2 lg:grid-cols-4 gap-2 w-full p-4">
        {BoxContent.map((box) => (
          <InteractiveBox
            key={box.id}
            box={box}
            isActive={activeBox === box.id}
            onClick={() => setActiveBox(prev => (prev === box.id ? null : box.id))}
          />
        ))}
      </div>
    </div>
  );
};



export default InteractiveBoxes;
