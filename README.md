# PDF Side-by-Side Merger

A modern web application that merges two PDF files by placing corresponding pages side-by-side. Built with Next.js, TypeScript, and Tailwind CSS.

## 🌐 Try It Now

**[Use the tool online →](https://pdf-side-by-side-merger.vercel.app)**

Free, private, and browser-based. No uploads required.

## Why Use This Tool?

- **🔒 Privacy-First**: All processing happens in your browser—no file uploads to servers. Your PDFs never leave your device.
- **🌐 Browser-Based**: No installation required. Works instantly in any modern web browser on any device.
- **💯 Free and Unlimited**: No subscription fees, file size limits, or usage restrictions. Completely free forever.
- **📄 Perfect for Comparison**: Ideal for comparing contract versions, reviewing translations, analyzing document changes, and creating dual-language materials.
- **⚡ Lightning Fast**: Client-side processing means instant results with no server delays.
- **🎯 Easy to Use**: Simple drag-and-drop interface. No technical knowledge required.

## Features

- 🔒 **100% Private** - All processing happens in your browser, no server uploads
- ⚡ **Fast & Efficient** - Client-side PDF manipulation with optimized performance
- 🎨 **Modern UI** - Clean, minimalist design with smooth animations
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🌙 **Dark Mode** - Full dark mode support
- ♿ **Accessible** - WCAG 2.1 AA compliant

## How It Works

1. **Upload** - Select or drag two PDF files
2. **Configure** - Choose page size handling mode:
   - Scale to fit (maintains aspect ratio)
   - Stretch to fill (equal halves)
   - Use larger size (no scaling)
3. **Merge** - Click to combine pages side-by-side
4. **Download** - Get your merged PDF instantly

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **PDF Processing**: pdf-lib
- **File Upload**: react-dropzone

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher (see `.nvmrc`)
- npm 10.0.0 or higher

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/HemanthGangula/pdf-side-by-side-merger.git
cd pdf-side-by-side-merger
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
# Copy the example env file
cp .env.example .env.local

# Edit .env.local with your configuration (optional)
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx          # Main application page
│   ├── layout.tsx        # Root layout with SEO
│   └── globals.css       # Global styles & animations
├── components/
│   ├── PDFUploader.tsx   # File upload with drag-and-drop
│   ├── PDFPreview.tsx    # PDF information display
│   ├── MergeOptions.tsx  # Configuration options
│   └── MergeButton.tsx   # Merge action button
└── lib/
    ├── pdf-utils.ts      # PDF merging logic
    └── file-utils.ts     # File validation utilities
```

## Core Implementation

### PDF Merging Algorithm

The side-by-side merge process:

1. Load both PDF documents using pdf-lib
2. Get page counts and determine max pages
3. For each page pair:
   - Extract or create blank pages
   - Calculate output dimensions based on mode
   - Create new page with combined width
   - Draw both pages horizontally adjacent
4. Save and download merged PDF

### Page Size Modes

- **Scale**: Scales pages proportionally to fit, maintains aspect ratio
- **Stretch**: Each page takes 50% width, may distort
- **Larger**: Uses original sizes combined, no scaling

### File Processing

All PDF processing happens client-side:
- No server uploads required
- Files never leave your browser
- Maximum file size: 50MB per PDF
- Supports mismatched page counts (fills with blank pages)

## Performance

- Lazy loading for all components
- Code splitting reduces initial bundle
- Optimized for 90+ Lighthouse scores
- Fast initial render with skeleton loaders

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

```bash
# Start dev server
npm run dev

# Type checking
npm run lint

# Build production
npm run build
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Update documentation as needed
- Test your changes thoroughly
- Ensure the build passes before submitting

## License

MIT License - Free to use

## Privacy

Your files are processed entirely in your browser. No data is collected, stored, or transmitted to any server.

## Support

If you find this project helpful, please give it a ⭐️ on GitHub!

For bugs and feature requests, please [open an issue](https://github.com/HemanthGangula/pdf-side-by-side-merger/issues).

## Live Site

**[Try the tool online →](https://pdf-side-by-side-merger.vercel.app)**

Compare PDFs side by side, merge documents horizontally, and process files entirely in your browser—no uploads, no tracking, completely free.
