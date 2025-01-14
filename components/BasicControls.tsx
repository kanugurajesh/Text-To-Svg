import { TextStyle } from '@/types';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

interface BasicControlsProps {
  text: string;
  setText: (text: string) => void;
  style: TextStyle;
  onStyleChange: (updates: Partial<TextStyle>) => void;
}

export const BasicControls: React.FC<BasicControlsProps> = ({
  text,
  setText,
  style,
  onStyleChange,
}) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label>Text</Label>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text"
      />
    </div>

    <div className="space-y-2">
      <Label>Font Size: {style.fontSize}px</Label>
      <Slider
        value={[style.fontSize]}
        onValueChange={(value) => onStyleChange({ fontSize: value[0] })}
        min={12}
        max={100}
        step={1}
      />
    </div>

    <div className="space-y-2">
      <Label>Rotation: {style.rotation}°</Label>
      <Slider
        value={[style.rotation]}
        onValueChange={(value) => onStyleChange({ rotation: value[0] })}
        min={-180}
        max={180}
        step={1}
      />
    </div>

    <div className="space-y-2">
      <Label>Font Family</Label>
      <select
        value={style.fontFamily}
        onChange={(e) => onStyleChange({ fontFamily: e.target.value })}
        className="w-full p-2 border rounded"
      >
        <option value="Arial">Arial</option>
        <option value="Times New Roman">Times New Roman</option>
        <option value="Helvetica">Helvetica</option>
        <option value="Verdana">Verdana</option>
        <option value="Georgia">Georgia</option>
        <option value="Courier New">Courier New</option>
      </select>
    </div>
  </div>
);