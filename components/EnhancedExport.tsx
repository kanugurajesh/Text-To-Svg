'use client'

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Slider } from './ui/slider';
import { type ExportFormat } from '@/utils/exportUtils';

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
  onExport: (format: ExportFormat, options: any) => void;
}

export function EnhancedExport({ onExport }: EnhancedExportProps) {
  const [format, setFormat] = React.useState<ExportFormat>('svg');
  const [platform, setPlatform] = React.useState('Instagram');
  const [size, setSize] = React.useState<ExportSize>(socialMediaSizes['Instagram'][0]);
  const [quality, setQuality] = React.useState(90);
  const [transparent, setTransparent] = React.useState(false);

  const handleExport = () => {
    onExport(format, {
      width: size.width,
      height: size.height,
      quality: quality,
      transparent: transparent,
    });
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Enhanced Export Options</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="preset">
          <TabsList>
            <TabsTrigger value="preset">Preset Sizes</TabsTrigger>
            <TabsTrigger value="custom">Custom Size</TabsTrigger>
          </TabsList>
          
          <TabsContent value="preset">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Platform</Label>
                <Select value={platform} onValueChange={setPlatform}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.keys(socialMediaSizes).map(platform => (
                      <SelectItem key={platform} value={platform}>
                        {platform}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Size Preset</Label>
                <Select 
                  value={`${size.width}x${size.height}`}
                  onValueChange={(val) => {
                    const [width, height] = val.split('x').map(Number);
                    setSize({ name: '', width, height });
                  }}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {socialMediaSizes[platform].map(size => (
                      <SelectItem key={size.name} value={`${size.width}x${size.height}`}>
                        {size.name} ({size.width}x{size.height})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label>Format</Label>
            <Select value={format} onValueChange={(value) => setFormat(value as ExportFormat)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="svg">SVG</SelectItem>
                <SelectItem value="png">PNG</SelectItem>
                <SelectItem value="jpeg">JPEG</SelectItem>
                <SelectItem value="webp">WebP</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {format !== 'svg' && (
            <div className="space-y-2">
              <Label>Quality ({quality}%)</Label>
              <Slider
                value={[quality]}
                min={1}
                max={100}
                step={1}
                onValueChange={([value]) => setQuality(value)}
              />
            </div>
          )}

          {(format === 'png' || format === 'webp') && (
            <div className="flex items-center space-x-2">
              <Switch
                checked={transparent}
                onCheckedChange={setTransparent}
              />
              <Label>Transparent Background</Label>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
