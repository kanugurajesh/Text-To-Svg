export type ExportFormat = 'svg' | 'png' | 'jpeg';

export const convertSvgToImage = (
  svgString: string,
  format: 'png' | 'jpeg',
  scale: number = 2
): Promise<string> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const svg = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svg);

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d')!;
      
      // Scale up the canvas for better quality
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      
      // Set background to white for JPEG
      if (format === 'jpeg') {
        ctx.fillStyle = 'white';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      URL.revokeObjectURL(url);
      resolve(canvas.toDataURL(`image/${format}`));
    };

    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('Error converting SVG to image'));
    };

    img.src = url;
  });
};

export const downloadFile = async (
  content: string,
  filename: string,
  format: ExportFormat
) => {
  let blob: Blob;
  let finalFilename = filename;

  if (format === 'svg') {
    blob = new Blob([content], { type: 'image/svg+xml' });
    finalFilename = `${filename}.svg`;
  } else {
    const base64Data = await convertSvgToImage(content, format);
    const binaryData = atob(base64Data.split(',')[1]);
    const array = new Uint8Array(binaryData.length);
    for (let i = 0; i < binaryData.length; i++) {
      array[i] = binaryData.charCodeAt(i);
    }
    blob = new Blob([array], { type: `image/${format}` });
    finalFilename = `${filename}.${format}`;
  }

  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = finalFilename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};
