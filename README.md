# React Doc Viewer Plus

A React component for previewing various types of documents and images. This component provides a simple and elegant way to display documents in your React applications.

## Features

- 🖼️ Image preview support
- 📄 Document preview support
- 🎯 Simple and easy to use
- 🎨 Customizable UI
- 🔄 Preview toggle functionality

## Supported File Types

### Images
- PNG (.png)
- JPEG/JPG (.jpg, .jpeg)
- GIF (.gif)
- BMP (.bmp)
- WEBP (.webp)
- SVG (.svg)
- ICO (.ico)

### Documents
- PDF (.pdf)
- OFD (.ofd)
- Microsoft Word (.doc, .docx)
- Microsoft Excel (.xls, .xlsx)
- Microsoft PowerPoint (.ppt, .pptx)
- Text files (.txt)
- Rich Text Format (.rtf)
- Markdown (.md)

### Other Formats
- CSV (.csv)
- XML (.xml)
- HTML (.html, .htm)
- JSON (.json)

## Installation

```bash
npm install react-doc-viewer-plus
# or
yarn add react-doc-viewer-plus
```

## Usage

Here's a basic example of how to use the component:

```jsx
import React, { useState } from 'react';
import { DocViewerPlus } from 'react-doc-viewer-plus';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Close Preview' : 'Click to Preview'}
      </button>
      
      <DocViewerPlus 
        previewFile={{
          fileUrl: "your-file-url-here",
          fileName: "example.png"
        }}
        visibleViewerPlus={visible}
        onVisibleChange={() => setVisible(!visible)}
      />
    </div>
  );
}
```

## Props

| Prop | Type | Description |
|------|------|-------------|
| previewFile | Object | Contains fileUrl and fileName for the document to preview |
| visibleViewerPlus | boolean | Controls the visibility of the preview |
| onVisibleChange | function | Callback function when visibility changes |

## Development

```bash
# Clone the repository
git clone https://github.com/mengtaiqili/react-doc-viewer-plus.git

# Install dependencies
yarn install

# Start development server
yarn start
```

## License

MIT © [mengtaiqili](https://github.com/mengtaiqili)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Create a new Pull Request

## Support

If you have any questions or need help, please open an issue in the GitHub repository.
