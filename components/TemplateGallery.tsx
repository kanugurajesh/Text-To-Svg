'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ScrollArea } from './ui/scroll-area';
import type { TextStyle } from '@/types';

interface Template {
  id: string;
  name: string;
  category: string;
  style: TextStyle;
  preview: string;
}

const defaultTemplates: Template[] = [
  {
    id: 'social-1',
    name: 'Instagram Story Title',
    category: 'Social Media',
    style: {
      fontSize: 60,
      fontFamily: 'Inter',
      textColor: '#ffffff',
      backgroundColor: '#000000',
      showBackground: true,
      fontWeight: 'bold',
      fontStyle: 'normal',
      strokeWidth: 2,
      strokeColor: '#ff00ff',
      textDecoration: 'none',
      opacity: 100,
      alignment: 'center',
      letterSpacing: 2,
      rotation: 0,
      gradient: true,
      gradientColors: ['#ff00ff', '#00ffff'],
      shadow: true,
      shadowColor: '#000000',
      shadowBlur: 10,
      shadowOffset: 5,
    },
    preview: 'Story Title'
  },
  // Add more templates here
];

interface TemplateGalleryProps {
  onSelectTemplate: (style: TextStyle) => void;
}

export function TemplateGallery({ onSelectTemplate }: TemplateGalleryProps) {
  const [category, setCategory] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');

  const filteredTemplates = defaultTemplates.filter(template => 
    (category === 'all' || template.category === category) &&
    (searchQuery === '' || template.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Template Gallery</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredTemplates.map(template => (
            <Card 
              key={template.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => onSelectTemplate(template.style)}
            >
              <CardContent className="p-4">
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-2">
                  <span style={{
                    ...template.style,
                    fontSize: '16px',
                  }}>{template.preview}</span>
                </div>
                <p className="text-sm font-medium">{template.name}</p>
                <p className="text-xs text-gray-500">{template.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
