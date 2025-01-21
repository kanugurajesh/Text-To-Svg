# TextCraft Pro - Text to Image Generator

TextCraft Pro is a sophisticated web application that transforms text into various image formats including SVG, PNG, and JPEG. Built with modern web technologies, it offers a powerful yet user-friendly interface for creating stunning text effects with real-time preview and advanced styling options. Whether you need vector graphics (SVG) or raster images (PNG, JPEG), TextCraft Pro has you covered.

## Features

- Multi-format image generation:
  - SVG for scalable vector graphics
  - PNG for lossless raster images
  - JPEG for compressed photo-quality images
- Real-time preview with instant updates
- Comprehensive text styling options:
  - Font customization (family, size, weight, style)
  - Color controls with solid colors and gradients
  - Text effects (shadows, strokes, opacity)
  - Advanced positioning (alignment, letter spacing, rotation)
  - Background controls
- Export functionality
  - Format-specific optimization
  - High-quality output
  - Customizable export settings
- History tracking system
  - Automatic saving of recent designs
  - Undo/Redo functionality
  - Local storage persistence
- Modern, responsive interface
  - Intuitive tab-based controls
  - Mobile-friendly design
  - Dark mode support
- Zero-dependency text generation
  - No account required
  - Client-side processing

## Tech Stack

- **Frontend Framework**: Next.js 14 with App Router
- **UI Framework**: React 19
- **Styling**: 
  - Tailwind CSS for responsive design
  - Shadcn UI for component library
- **Language**: TypeScript for type safety
- **Components**:
  - Radix UI primitives for accessible components
  - React Icons for iconography
- **State Management**: React hooks with local storage persistence

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/your-username/ttsc.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

1. Enter your text in the input field
2. Customize your text using the available controls:
   - Basic tab: Font, size, and primary colors
   - Style tab: Advanced effects like shadows and gradients
3. Preview your design in real-time in the preview panel
4. Export your creation in your preferred format
5. Access your design history through the history panel
6. Use undo/redo for quick iterations

## Project Structure

```
ttsc/
├── app/                # Next.js app directory
│   ├── about/         # About page
│   ├── features/      # Features page
│   ├── how-to-use/    # Usage guide
│   └── page.tsx       # Home page
├── components/        # React components
│   ├── ui/           # Shadcn UI components
│   └── TextToSvgMain # Main text editor component
├── lib/              # Utility libraries
├── public/           # Static assets
└── utils/            # Helper functions
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

## Author

**Kanugu Rajesh**
- GitHub: [@kanugurajesh](https://github.com/kanugurajesh)
- LinkedIn: [Rajesh Kanugu](https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/)
- Portfolio: [kanugurajesh.vercel.app](https://kanugurajesh.vercel.app)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
