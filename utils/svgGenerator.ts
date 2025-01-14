import { TextStyle } from "@/types";

export const generateSvg = (text: string, style: TextStyle): string => {
    const width = Math.max(text.length * (style.fontSize * 0.6) + 40, 200);
    const height = Math.max(style.fontSize * 1.5, 80);
    
    let x = 20;
    if (style.alignment === 'center') {
      x = width / 2;
    } else if (style.alignment === 'right') {
      x = width - 20;
    }
    
    const y = height / 2 + style.fontSize / 3;
    
    let defs = '';
    let fill = style.textColor;
    
    if (style.gradient) {
      const gradientId = 'textGradient';
      defs = `
        <defs>
          <linearGradient id="${gradientId}" x1="0%" y1="0%" x2="100%" y2="0%">
            ${style.gradientColors.map((color, index) => 
              `<stop offset="${(index / (style.gradientColors.length - 1)) * 100}%" style="stop-color:${color}"/>`
            ).join('')}
          </linearGradient>
        </defs>
      `;
      fill = `url(#${gradientId})`;
    }
    
    let filter = '';
    if (style.shadow) {
      const filterId = 'textShadow';
      filter = `
        <filter id="${filterId}">
          <feGaussianBlur in="SourceAlpha" stdDeviation="${style.shadowBlur}"/>
          <feOffset dx="${style.shadowOffset}" dy="${style.shadowOffset}"/>
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.7"/>
          </feComponentTransfer>
          <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      `;
      defs = `<defs>${filter}${defs}</defs>`;
    }
  
    return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
      <svg xmlns="http://www.w3.org/2000/svg" 
           width="${width}" 
           height="${height}" 
           viewBox="0 0 ${width} ${height}">
        ${defs}
        ${style.showBackground ? `<rect width="100%" height="100%" fill="${style.backgroundColor}"/>` : ''}
        <text x="${x}" 
              y="${y}" 
              font-family="${style.fontFamily}"
              font-size="${style.fontSize}px"
              font-weight="${style.fontWeight}"
              font-style="${style.fontStyle}"
              fill="${fill}"
              stroke="${style.strokeColor}"
              stroke-width="${style.strokeWidth}"
              text-decoration="${style.textDecoration}"
              opacity="${style.opacity / 100}"
              letter-spacing="${style.letterSpacing}px"
              text-anchor="${style.alignment === 'center' ? 'middle' : style.alignment === 'right' ? 'end' : 'start'}"
              transform="rotate(${style.rotation} ${width/2} ${height/2})"
              ${style.shadow ? `filter="url(#textShadow)"` : ''}>
          ${text}
        </text>
      </svg>`;
  };