// components/Separator.tsx
import React from 'react';

interface SeparatorProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const Separator: React.FC<SeparatorProps> = ({ size = 'md' }) => {
  let className = "";

  switch (size) {
    case 'sm':
      className = "h-4";
      break;
    case 'md':
      className = "h-8";
      break;
    case 'lg':
      className = "h-16";
      break;
    case 'xl':
      className = "h-24";
      break;
  }

  return <div className={className}></div>;
};

export default Separator;
