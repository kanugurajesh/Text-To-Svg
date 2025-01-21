'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { BasicControls } from './BasicControls';
import { StyleControls } from './StyleControls';
import { SvgPreview } from './SvgPreview';
import { HistoryPanel } from './HistoryPanel';
import { TemplateGallery } from './TemplateGallery';
import { EnhancedExport } from './EnhancedExport';
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
  const [activeTab, setActiveTab] = useState('edit');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('svg-history', JSON.stringify(history));
    }
  }, [history]);

  const handleStyleChange = (newStyle: Partial<TextStyle>) => {
    setStyle(prev => {
      const updated = { ...prev, ...newStyle };
      setUndoStack([...undoStack, [text, prev]]);
      setRedoStack([]);
      return updated;
    });
  };

  const handleTemplateSelect = (templateStyle: TextStyle) => {
    setStyle(templateStyle);
    setUndoStack([...undoStack, [text, style]]);
    setRedoStack([]);
    
    // Add to history
    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      text,
      style: templateStyle,
      timestamp: new Date().toISOString(),
    };
    setHistory([newHistoryItem, ...history].slice(0, 50));
  };

  const handleEnhancedExport = async (format: ExportFormat, options: any) => {
    const svg = generateSvg(text, style);
    
    if (format === 'svg') {
      downloadFile(svg, 'text.svg', format);
    } else {
      // For now, just download SVG since we haven't implemented format conversion yet
      downloadFile(svg, 'text.svg', format);
    }
    
    // Add to history
    const newHistoryItem: HistoryItem = {
      id: Date.now().toString(),
      text,
      style,
      timestamp: new Date().toISOString(),
    };
    setHistory([newHistoryItem, ...history].slice(0, 50));
  };

  const handleUndo = () => {
    if (undoStack.length > 0) {
      const [prevText, prevStyle] = undoStack[undoStack.length - 1];
      setRedoStack([...redoStack, [text, style]]);
      setUndoStack(undoStack.slice(0, -1));
      setText(prevText);
      setStyle(prevStyle);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const [nextText, nextStyle] = redoStack[redoStack.length - 1];
      setUndoStack([...undoStack, [text, style]]);
      setRedoStack(redoStack.slice(0, -1));
      setText(nextText);
      setStyle(nextStyle);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full">
            <TabsTrigger value="edit">Edit</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
            <TabsTrigger value="export">Export</TabsTrigger>
          </TabsList>

          <TabsContent value="edit">
            <div className="space-y-8">
              <BasicControls
                text={text}
                style={style}
                setText={setText}
                onStyleChange={handleStyleChange}
              />
              <StyleControls
                style={style}
                onStyleChange={handleStyleChange}
              />
            </div>
          </TabsContent>

          <TabsContent value="templates">
            <TemplateGallery onSelectTemplate={handleTemplateSelect} />
          </TabsContent>

          <TabsContent value="export">
            <EnhancedExport onExport={handleEnhancedExport} />
          </TabsContent>
        </Tabs>
      </div>

      <div className="lg:col-span-1 space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <SvgPreview text={text} style={style} />
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>History</CardTitle>
          </CardHeader>
          <CardContent>
            <HistoryPanel
              history={history}
              onSelect={(item) => {
                setText(item.text);
                setStyle(item.style);
              }}
              onDelete={(id) => {
                setHistory(history.filter(item => item.id !== id));
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextToSvgMain;