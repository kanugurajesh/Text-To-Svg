export interface TextStyle {
    fontSize: number;
    fontFamily: string;
    textColor: string;
    backgroundColor: string;
    showBackground: boolean;
    fontWeight: 'normal' | 'bold' | 'lighter';
    fontStyle: 'normal' | 'italic';
    strokeWidth: number;
    strokeColor: string;
    textDecoration: 'none' | 'underline' | 'line-through';
    opacity: number;
    alignment: 'left' | 'center' | 'right';
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
