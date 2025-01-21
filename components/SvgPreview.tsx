import React from 'react';
import { TextStyle } from '@/types';
import { generateSvg } from '@/utils/svgGenerator';

interface SvgPreviewProps {
  text: string;
  style: TextStyle;
}

export const SvgPreview: React.FC<SvgPreviewProps> = ({ text, style }) => {
  const svgContent = generateSvg(text, style);
  
  return (
    <div className="border rounded p-4 bg-gray-50">
      <div 
        dangerouslySetInnerHTML={{ __html: svgContent }}
        className="w-full flex justify-center items-center"
      />
    </div>
  );
};