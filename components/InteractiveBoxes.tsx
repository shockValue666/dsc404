"use client";
// components/InteractiveBoxes.tsx
import React, { useState } from 'react';

const BoxContent = [
  { id: 1, initial: "how many?",content: '4.4K' },
  { id: 2, initial: "how much?", content: '0 $SOL' },
  { id: 3, initial: "wen?", content: 'we catch the bandits first' },
  { id: 4, initial: "where?", content: 'wen we find a suitable prison' },
];

const InteractiveBoxes: React.FC = () => {
  const [activeBox, setActiveBox] = useState<number | null>(null);

  const handleBoxClick = (id: number) => {
    setActiveBox(id === activeBox ? null : id);
  };

  return (
    <div className="relative h-[calc(100vh-64px)] px-[5%]">
      <div className="h-1/6 flex items-center justify-start p-5">
        <h2 className="text-white text-[40px]">Minting</h2>
      </div>

      <div className="h-5/6 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 p-4 ">
      {BoxContent.map((box) => (
          <div 
            className="w-full relative pb-full" // Added padding-bottom to enforce square shape
            onClick={() => handleBoxClick(box.id)}
            key={box.id}
          >
            <div
              className="bg-purple-600 rounded-xl transition-all duration-300 absolute inset-0 flex items-center justify-center"
            >
              <div className={`p-4 text-[30px] text-center font-bold ${activeBox === box.id ? 'hidden' : 'block'}`}>
                {box.initial}
              </div>
              <div className={`p-4 text-center text-[30px]  ${activeBox === box.id ? 'block' : 'hidden'}`}>
                {box.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveBoxes;
