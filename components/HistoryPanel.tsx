'use client'

import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';
import type { TextStyle } from '@/types';

interface HistoryItem {
  id: string;
  text: string;
  style: TextStyle;
  timestamp: string;
}

interface HistoryPanelProps {
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  onDelete: (id: string) => void;
}

export const HistoryPanel: React.FC<HistoryPanelProps> = ({
  history,
  onSelect,
  onDelete,
}) => {
  return (
    <ScrollArea className="h-[400px] w-full pr-4">
      <div className="space-y-4">
        {history.map((item) => (
          <Card key={item.id} className="p-4 hover:bg-slate-50">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <p className="font-medium truncate">{item.text}</p>
                <p className="text-sm text-gray-500">{item.timestamp}</p>
              </div>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSelect(item)}
                >
                  Use
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onDelete(item.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </Button>
              </div>
            </div>
          </Card>
        ))}
        {history.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No history items yet
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
