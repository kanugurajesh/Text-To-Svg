'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { type ExportFormat, type ExportOptions } from '@/utils/exportUtils';

interface ExportSize {
  name: string;
  width: number;
  height: number;
}

const socialMediaSizes: Record<string, ExportSize[]> = {
  'Instagram': [
    { name: 'Square Post', width: 1080, height: 1080 },
    { name: 'Story', width: 1080, height: 1920 },
    { name: 'Portrait', width: 1080, height: 1350 },
  ],
  'Facebook': [
    { name: 'Post', width: 1200, height: 630 },
    { name: 'Cover', width: 1640, height: 624 },
    { name: 'Profile', width: 1080, height: 1080 },
  ],
  'Twitter': [
    { name: 'Post', width: 1200, height: 675 },
    { name: 'Header', width: 1500, height: 500 },
  ],
};

interface EnhancedExportProps {
  onExport: (format: ExportFormat, options: ExportOptions) => void;
}

export function EnhancedExport({ onExport }: EnhancedExportProps) {
  const [format, setFormat] = React.useState<ExportFormat>('svg');
  const [platform, setPlatform] = React.useState('Instagram');
  const [size, setSize] = React.useState<ExportSize>(socialMediaSizes['Instagram'][0]);
  const [quality, setQuality] = React.useState(90);
  const [transparent, setTransparent] = React.useState(false);

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Export</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Format</Label>
          <Select value={format} onValueChange={(value) => setFormat(value as ExportFormat)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpg">JPG</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Platform</Label>
          <Select value={platform} onValueChange={setPlatform}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(socialMediaSizes).map((p) => (
                <SelectItem key={p} value={p}>{p}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Size</Label>
          <Select 
            value={size.name} 
            onValueChange={(value) => {
              const newSize = socialMediaSizes[platform].find(s => s.name === value);
              if (newSize) setSize(newSize);
            }}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {socialMediaSizes[platform].map((s) => (
                <SelectItem key={s.name} value={s.name}>{s.name} ({s.width}x{s.height})</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label>Quality ({quality}%)</Label>
          </div>
          <Slider
            value={[quality]}
            min={1}
            max={100}
            step={1}
            onValueChange={([value]) => setQuality(value)}
          />
        </div>

        <div className="flex items-center space-x-2">
          <Switch
            id="transparent"
            checked={transparent}
            onCheckedChange={setTransparent}
          />
          <Label htmlFor="transparent">Transparent Background</Label>
        </div>

        <button
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md"
          onClick={() => onExport(format, {
            width: size.width,
            height: size.height,
            quality: quality,
            transparent: transparent,
          })}
        >
          Export
        </button>
      </CardContent>
    </Card>
  );
}
