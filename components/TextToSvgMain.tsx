'use client'

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BasicControls } from './BasicControls';
import { StyleControls } from './StyleControls';
import { SvgPreview } from './SvgPreview';
import { generateSvg } from '@/utils/svgGenerator';
import type { TextStyle } from '@/types';

const defaultStyle: TextStyle = {
  fontSize: 40,
  fontFamily: 'Arial',
  textColor: '#000000',
  backgroundColor: '#ffffff',
  showBackground: false,
  fontWeight: 'normal',
  fontStyle: 'normal',
  strokeWidth: 0,
  strokeColor: '#000000',
  textDecoration: 'none',
  opacity: 100,
  alignment: 'left',
  letterSpacing: 0,
  rotation: 0,
  gradient: false,
  gradientColors: ['#000000', '#ffffff'],
  shadow: false,
  shadowColor: '#000000',
  shadowBlur: 4,
  shadowOffset: 4,
};

const TextToSvgMain = () => {
  const [text, setText] = useState('Hello World');
  const [style, setStyle] = useState<TextStyle>(defaultStyle);

  const handleStyleChange = (updates: Partial<TextStyle>) => {
    setStyle(prev => ({ ...prev, ...updates }));
  };

  const downloadSvg = () => {
    const svg = generateSvg(text, style);
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'text.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Text to SVG Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="basic">Basic</TabsTrigger>
            <TabsTrigger value="style">Style</TabsTrigger>
          </TabsList>

          <TabsContent value="basic">
            <BasicControls
              text={text}
              setText={setText}
              style={style}
              onStyleChange={handleStyleChange}
            />
          </TabsContent>

          <TabsContent value="style">
            <StyleControls
              style={style}
              onStyleChange={handleStyleChange}
            />
          </TabsContent>
        </Tabs>

        <SvgPreview svgContent={generateSvg(text, style)} />

        <Button 
          onClick={downloadSvg}
          className="w-full"
        >
          Download SVG
        </Button>
      </CardContent>
    </Card>
  );
};

export default TextToSvgMain;