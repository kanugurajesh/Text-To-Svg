import React from 'react';

interface SvgPreviewProps {
  svgContent: string;
}

export const SvgPreview: React.FC<SvgPreviewProps> = ({ svgContent }) => (
  <div className="border rounded p-4 bg-gray-50">
    <div 
      dangerouslySetInnerHTML={{ __html: svgContent }}
      className="w-full flex justify-center items-center"
    />
  </div>
);