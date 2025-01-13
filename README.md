# Cookbook

A collection of useful guides with a clean, responsive design and dark/light mode support.

## 📚 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd cookbook

# Install dependencies
npm install

# Build the site
npm run build

# Open index.html in your browser
```

## 📁 Structure

```
cookbook/
├── assets/
│   ├── style.css        # Main stylesheet
│   ├── favicon.ico      # Site favicon
│   └── images/          # Image assets
├── docs/
│   ├── git-cheat-sheet.md   # Markdown content
│   └── template.md          # Template for new guides
├── scripts/
│   └── build.js         # Build script for MD to HTML
├── index.html           # Homepage
├── package.json         # Dependencies
└── README.md           # Documentation
```

## 📝 Content Management

### Adding New Guides

1. Create new markdown file in `/docs/`:
```markdown
# Guide Title

Brief introduction to your guide.

## Section 1

Your content here...

## Code Examples

```javascript
console.log('Hello World');
```

## Further Reading

- [Link 1](url)
- [Link 2](url)
```

2. Update homepage card in `index.html`:
```html
<div class="guide-card">
    <h3>Your Guide Title</h3>
    <p>Brief description of the guide.</p>
    <a href="docs/your-file.html" class="guide-link">Read Guide →</a>
</div>
```

3. Build the site:
```bash
npm run build
```

### Markdown Features

- Headers (H1-H6)
- Code blocks with language support
- Tables
- Lists (ordered and unordered)
- Links and images
- Blockquotes
- Inline code
- Bold and italic text

### Code Block Languages

Supported languages for syntax highlighting:
```markdown
```javascript
```python
```html
```css
```bash
```json
```

## 🎨 Styling & Customization

### Theme Variables

```css
:root {
    /* Dark theme (default) */
    --bg-color: #1a1b26;
    --text-color: #a9b1d6;
    --heading-color: #7aa2f7;
    --link-color: #bb9af7;
    --code-bg: #24283b;
    --content-bg: #1f2335;
    --toggle-bg: #24283b;
    --toggle-circle: #7aa2f7;
    --code-text: #a9b1d6;
    --card-bg: #24283b;
    --card-text: #a9b1d6;
    --nav-hover: #24283b;
    --nav-active: #24283b;
}
```

### CSS Components

- `.container`: Main layout wrapper
- `.sidebar`: Navigation sidebar
- `.content`: Main content area
- `.guide-card`: Homepage guide cards
- `.theme-toggle`: Dark/light mode toggle
- `pre`, `code`: Code block styling

### Adding Custom Styles

1. Add new variables to `:root`
2. Create new CSS classes
3. Update build template if needed

## 🛠 Development

### Prerequisites

- Node.js (v14+)
- npm (v6+)

### Local Development

```bash
# Watch for changes (requires nodemon)
npm install -g nodemon
nodemon scripts/build.js

# Serve locally (requires http-server)
npm install -g http-server
http-server
```

### Build Process

The build script (`build.js`):
1. Reads markdown files
2. Converts to HTML using `marked`
3. Applies syntax highlighting
4. Wraps in HTML template
5. Generates navigation
6. Outputs final HTML

### Modifying Build Process

1. Update HTML template in `build.js`:
```javascript
const template = `
<!DOCTYPE html>
<html lang="en">
...
</html>
`;
```

2. Modify markdown conversion options:
```javascript
marked.setOptions({
    highlight: function(code, lang) {
        // Custom highlighting
    }
});
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   - Check Node.js version: `node --version`
   - Delete `node_modules` and run `npm install`
   - Verify markdown syntax

2. **Styling Issues**
   - Clear browser cache
   - Check CSS variable names
   - Verify class names
   - Inspect element for conflicts

3. **Code Highlighting**
   - Verify language specification
   - Check highlight.js language support
   - Update highlight.js version

### Debug Tips

```javascript
// Add to build.js for debugging
console.log('Processing:', filename);
console.log('HTML output:', html.slice(0, 500));
```

## 🔄 Updates & Maintenance

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update specific package
npm update package-name
```

### Version Control

```bash
# Create new feature branch
git checkout -b feature/new-feature

# Commit changes
git add .
git commit -m "Add new feature"

# Push changes
git push origin feature/new-feature
```

## 📦 Deployment

### Building for Production

1. Update version in `package.json`
2. Build the site: `npm run build`
3. Test all pages locally
4. Deploy to hosting service

### Arweave Deployment

1. Build the site
2. Create manifest
3. Upload to Arweave
4. Verify gateway access

## 🤝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Run tests
5. Submit pull request

### Code Style

- Use consistent indentation
- Add comments for complex logic
- Follow naming conventions
- Keep functions focused

## 📄 License

Content available under CC0.

## 🆘 Support

- Create an issue for bugs
- Submit feature requests
- Check existing issues first

## 🔗 Useful Links

- [Marked Documentation](https://marked.js.org/)
- [Highlight.js](https://highlightjs.org/)
- [Markdown Guide](https://www.markdownguide.org/)
