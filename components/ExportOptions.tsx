'use client'

import React from 'react';
import { Button } from './ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import type { ExportFormat } from '@/utils/exportUtils';

interface ExportOptionsProps {
  onExport: (format: ExportFormat) => void;
}

export const ExportOptions: React.FC<ExportOptionsProps> = ({ onExport }) => {
  const [selectedFormat, setSelectedFormat] = React.useState<ExportFormat>('svg');

  const handleExport = () => {
    onExport(selectedFormat);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor="format" className="text-right">
          Format
        </Label>
        <div className="col-span-3">
          <Select
            value={selectedFormat}
            onValueChange={(value: ExportFormat) => setSelectedFormat(value)}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select format" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="svg">SVG</SelectItem>
              <SelectItem value="png">PNG</SelectItem>
              <SelectItem value="jpeg">JPEG</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex justify-end">
        <Button 
          onClick={handleExport}
          className="bg-purple-600 hover:bg-purple-700 text-white"
        >
          Export
        </Button>
      </div>
    </div>
  );
};
