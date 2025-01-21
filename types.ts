export interface TextStyle {
  fontSize: number;
  fontFamily: string;
  textColor: string;
  backgroundColor: string;
  showBackground: boolean;
  fontWeight: string;
  fontStyle: string;
  strokeWidth: number;
  strokeColor: string;
  textDecoration: string;
  opacity: number;
  alignment: string;
  letterSpacing: number;
  rotation: number;
  gradient: boolean;
  gradientColors: string[];
  shadow: boolean;
  shadowColor: string;
  shadowBlur: number;
  shadowOffset: number;
}

export interface HistoryItem {
  id: string;
  text: string;
  style: TextStyle;
  format?: string;
  timestamp: string;
}

export interface Template {
  id: string;
  name: string;
  category: string;
  style: TextStyle;
  preview: string;
}

export interface ExportOptions {
  format: 'svg' | 'png' | 'jpeg' | 'webp';
  width?: number;
  height?: number;
  quality?: number;
  transparent?: boolean;
  dpi?: number;
}

export interface SocialMediaPreset {
  name: string;
  width: number;
  height: number;
  platform: string;
  description?: string;
}