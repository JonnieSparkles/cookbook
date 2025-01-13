# Cookbook

A collection of guides, tools, and tips for building whatever comes to mind.

## Quick Start

```bash
npm install
npm run build
```

## Structure

```
cookbook/
├── assets/          # CSS, images, favicon
├── docs/           # Markdown content
├── scripts/        # Build scripts
└── index.html      # Homepage
```

## Adding New Guides

1. Create a markdown file in `/docs/`:
```markdown
# Guide Title

Brief introduction.

## Section

Content here...

## Code Example
```javascript
console.log('Hello World');
```
```

2. Add card to `index.html`:
```html
<div class="guide-card">
    <h3>Guide Title</h3>
    <p>Description</p>
    <a href="docs/your-guide.html" class="guide-link">Read Guide →</a>
</div>
```

3. Build: `npm run build`

## Features

- 🌓 Dark/light mode toggle
- 📱 Responsive design
- 🎨 Syntax highlighting
- 📋 Code copy buttons
- 📍 Sticky navigation
- 📱 Mobile-friendly

## Customization

### Colors
Edit theme variables in `style.css`:
```css
:root {
    --bg-color: #1a1b26;
    --text-color: #a9b1d6;
    /* ... */
}
```

### Adding Features
1. Update `build.js` template
2. Add styles to `style.css`
3. Modify `index.html` if needed

## Troubleshooting

1. **Build fails**: Run `npm install`
2. **Styles not updating**: Clear browser cache
3. **Code blocks not highlighting**: Check language specification

## License

Content available under CC0.
