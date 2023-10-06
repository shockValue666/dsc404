// components/Title.tsx
import React from 'react';
import Image from 'next/image'

const Title: React.FC = () => {
    return (
        <div className="flex justify-center items-center my-0">
            <Image src={'/images/text_white.png'} width={300} height={300} alt="Logo" />
        </div>
    );
};

export default Title;
