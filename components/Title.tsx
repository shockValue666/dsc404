// components/Title.tsx
import React from 'react';
import Image from 'next/image'

const Title: React.FC = () => {
    return (
        <div className="flex justify-center items-center my-4 ">
            {/* <Image src={'/images/text_white.png'} width={250} height={250} alt="Logo" /> */}
            <h2 className="text-4xl font-bold text-center h-250 w-250 my-16">Descientists404</h2>
        </div>
    );
};

export default Title;
