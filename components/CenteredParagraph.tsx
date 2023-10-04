// components/CenteredParagraph.tsx
import React from 'react';

interface CenteredParagraphProps {
  content: string;
}

const CenteredParagraph: React.FC<CenteredParagraphProps> = ({ content }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-8">
      <p className="text-white text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wider">
        {content}
      </p>
    </div>
  );
};

export default CenteredParagraph;
