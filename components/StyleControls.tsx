import { TextStyle } from '@/types';

import React from 'react';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Slider } from '@radix-ui/react-slider';

interface StyleControlsProps {
  style: TextStyle;
  onStyleChange: (updates: Partial<TextStyle>) => void;
}

export const StyleControls: React.FC<StyleControlsProps> = ({
  style,
  onStyleChange,
}) => (
  <div className="space-y-4">
    <div className="space-y-2">
      <Label>Text Color</Label>
      <div className="flex gap-2">
        <Input
          type="color"
          value={style.textColor}
          onChange={(e) => onStyleChange({ textColor: e.target.value })}
          className="w-12 h-8 p-0"
        />
        <Input
          type="text"
          value={style.textColor}
          onChange={(e) => onStyleChange({ textColor: e.target.value })}
          className="flex-1"
        />
      </div>
    </div>

    <div className="flex items-center space-x-2">
      <Switch
        id="gradient"
        checked={style.gradient}
        onCheckedChange={(checked) => onStyleChange({ gradient: checked })}
      />
      <Label htmlFor="gradient">Use Gradient</Label>
    </div>

    {style.gradient && (
      <div className="space-y-2">
        <Label>Gradient Colors</Label>
        <div className="flex gap-2">
          {style.gradientColors.map((color, index) => (
            <Input
              key={index}
              type="color"
              value={color}
              onChange={(e) => {
                const newColors = [...style.gradientColors];
                newColors[index] = e.target.value;
                onStyleChange({ gradientColors: newColors });
              }}
              className="w-12 h-8 p-0"
            />
          ))}
        </div>
      </div>
    )}

    <div className="flex items-center space-x-2">
      <Switch
        id="shadow"
        checked={style.shadow}
        onCheckedChange={(checked) => onStyleChange({ shadow: checked })}
      />
      <Label htmlFor="shadow">Text Shadow</Label>
    </div>

    {style.shadow && (
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Shadow Color</Label>
          <Input
            type="color"
            value={style.shadowColor}
            onChange={(e) => onStyleChange({ shadowColor: e.target.value })}
            className="w-12 h-8 p-0"
          />
        </div>
        <div className="space-y-2">
          <Label>Shadow Blur: {style.shadowBlur}px</Label>
          <Slider
            value={[style.shadowBlur]}
            onValueChange={(value) => onStyleChange({ shadowBlur: value[0] })}
            min={0}
            max={20}
            step={1}
          />
        </div>
        <div className="space-y-2">
          <Label>Shadow Offset: {style.shadowOffset}px</Label>
          <Slider
            value={[style.shadowOffset]}
            onValueChange={(value) => onStyleChange({ shadowOffset: value[0] })}
            min={-20}
            max={20}
            step={1}
          />
        </div>
      </div>
    )}
  </div>
);
