'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BasicControls } from './BasicControls';
import { StyleControls } from './StyleControls';
import { SvgPreview } from './SvgPreview';
import { HistoryPanel } from './HistoryPanel';
import { ExportOptions } from './ExportOptions';
import { generateSvg } from '@/utils/svgGenerator';
import { downloadFile, type ExportFormat } from '@/utils/exportUtils';
import type { TextStyle, HistoryItem } from '@/types';

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
  const [history, setHistory] = useState<HistoryItem[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('svg-history');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [undoStack, setUndoStack] = useState<[string, TextStyle][]>([]);
  const [redoStack, setRedoStack] = useState<[string, TextStyle][]>([]);

  // Template presets
  const templates = {
    modern: {
      text: 'Modern Style',
      style: { ...defaultStyle, fontFamily: 'Arial', fontSize: 48, gradient: true, gradientColors: ['#FF6B6B', '#4ECDC4'] }
    },
    elegant: {
      text: 'Elegant',
      style: { ...defaultStyle, fontFamily: 'Times New Roman', fontSize: 52, fontStyle: 'italic', letterSpacing: 2 }
    },
    bold: {
      text: 'BOLD',
      style: { ...defaultStyle, fontFamily: 'Arial', fontSize: 60, fontWeight: 'bold', strokeWidth: 2 }
    },
    shadow: {
      text: 'Shadow Effect',
      style: { ...defaultStyle, shadow: true, shadowBlur: 8, shadowOffset: 4, shadowColor: '#000000' }
    }
  };

  useEffect(() => {
    const handleKeyboard = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
        e.preventDefault();
        if (e.shiftKey) {
          // Redo
          if (redoStack.length > 0) {
            const [redoText, redoStyle] = redoStack[redoStack.length - 1];
            setUndoStack([...undoStack, [text, style]]);
            setRedoStack(redoStack.slice(0, -1));
            setText(redoText);
            setStyle(redoStyle);
          }
        } else {
          // Undo
          if (undoStack.length > 0) {
            const [undoText, undoStyle] = undoStack[undoStack.length - 1];
            setRedoStack([...redoStack, [text, style]]);
            setUndoStack(undoStack.slice(0, -1));
            setText(undoText);
            setStyle(undoStyle);
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [text, style, undoStack, redoStack]);

  const applyTemplate = (template: keyof typeof templates) => {
    setUndoStack([...undoStack, [text, style]]);
    setRedoStack([]);
    setText(templates[template].text);
    setStyle(templates[template].style);
  };

  const handleStyleChange = (updates: Partial<TextStyle>) => {
    setUndoStack([...undoStack, [text, style]]);
    setRedoStack([]);
    setStyle(prev => ({ ...prev, ...updates }));
  };

  const saveToHistory = () => {
    const newItem: HistoryItem = {
      id: Date.now().toString(),
      text,
      style,
      timestamp: new Date().toLocaleString(),
    };
    setHistory(prev => [newItem, ...prev].slice(0, 10));
  };

  const handleHistorySelect = (item: HistoryItem) => {
    setText(item.text);
    setStyle(item.style);
  };

  const handleHistoryDelete = (id: string) => {
    setHistory(prev => prev.filter(item => item.id !== id));
  };

  const handleExport = async (format: ExportFormat) => {
    const svg = generateSvg(text, style);
    await downloadFile(svg, text.slice(0, 20).toLowerCase().replace(/\s+/g, '-'), format);
    saveToHistory();
  };

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle>Text to SVG Converter</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs defaultValue="basic" className="w-full space-y-4">
          <TabsList>
            <TabsTrigger value="basic" className="flex-1">Basic</TabsTrigger>
            <TabsTrigger value="style" className="flex-1">Style</TabsTrigger>
            <TabsTrigger value="history" className="flex-1">History</TabsTrigger>
            <TabsTrigger value="templates" className="flex-1">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="mt-4">
            <BasicControls
              text={text}
              setText={setText}
              style={style}
              onStyleChange={handleStyleChange}
            />
          </TabsContent>

          <TabsContent value="style" className="mt-4">
            <StyleControls
              style={style}
              onStyleChange={handleStyleChange}
            />
          </TabsContent>

          <TabsContent value="history" className="mt-4">
            <HistoryPanel
              history={history}
              onSelect={handleHistorySelect}
              onDelete={handleHistoryDelete}
            />
          </TabsContent>

          <TabsContent value="templates" className="mt-4">
            <div className="flex flex-wrap gap-4">
              {Object.keys(templates).map(template => (
                <button
                  key={template}
                  className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded"
                  onClick={() => applyTemplate(template as keyof typeof templates)}
                >
                  {templates[template as keyof typeof templates].text}
                </button>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <SvgPreview svgContent={generateSvg(text, style)} />
        
        <ExportOptions onExport={handleExport} />
      </CardContent>
    </Card>
  );
};

export default TextToSvgMain;