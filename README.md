# Cookbook

A collection of useful guides.

## Structure

- `/assets/` - CSS, images, and other static files
- `/docs/` - Documentation files in Markdown
- `/scripts/` - Build scripts for converting Markdown to HTML

## Adding Content

1. Add new guides in `/docs/` as Markdown files
2. Run `npm run build` to convert all markdown files to HTML
3. Add link to new guide in index.html

## Development

### Setup
```bash
npm install
```

### Building
```bash
npm run build
```

### Features
- Syntax highlighting for code blocks
- Copy buttons for code snippets
- Responsive design
- Dark mode friendly

### Adding New Pages
1. Create a new .md file in the `/docs/` folder
2. Add your content using Markdown
3. Run the build command
4. Add a link to your new page in index.html

## Technical Details
- Uses `marked` for Markdown conversion
- Uses `highlight.js` for syntax highlighting
- No complex frameworks or routing
- Works on any static host, including Arweave

## License

Content available under CC0.
