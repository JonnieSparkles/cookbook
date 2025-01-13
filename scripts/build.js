const fs = require('fs');
const path = require('path');
const marked = require('marked');
const hljs = require('highlight.js');

// Configure marked to use highlight.js
marked.setOptions({
    highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
            return hljs.highlight(code, { language: lang }).value;
        }
        return code;
    }
});

// Get list of docs for navigation
function getDocsList() {
    const docsDir = path.join(__dirname, '../docs');
    const files = fs.readdirSync(docsDir)
        .filter(file => file.endsWith('.md'))
        .map(file => {
            const content = fs.readFileSync(path.join(docsDir, file), 'utf-8');
            const title = content.split('\n')[0].replace('# ', '');
            return {
                title,
                file: file.replace('.md', '.html')
            };
        });
    return files;
}

// Generate navigation HTML
function generateNav(currentFile) {
    const docs = getDocsList();
    return `
        <div class="sidebar">
            <h2>Navigation</h2>
            <nav>
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    ${docs.map(doc => `
                        <li>
                            <a href="${doc.file}" 
                               ${currentFile === doc.file ? 'class="active"' : ''}>
                                ${doc.title}
                            </a>
                        </li>
                    `).join('')}
                </ul>
            </nav>
        </div>
    `;
}

// HTML template
const template = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jonnie's Cookbook</title>
    <link rel="stylesheet" href="../assets/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">
    <link rel="icon" type="image/x-icon" href="../assets/favicon.ico">
    <style>
        pre {
            position: relative;
            padding: 1rem;
            background: #282c34;
            border-radius: 4px;
            overflow-x: auto;
        }
        
        pre code {
            display: block;
            padding: 0;
            font-family: 'Fira Code', monospace;
        }
        
        .copy-button {
            position: absolute;
            top: 5px;
            right: 5px;
            padding: 5px 10px;
            background: #363b46;
            border: none;
            border-radius: 4px;
            color: #abb2bf;
            cursor: pointer;
            font-size: 12px;
        }
        
        .copy-button:hover {
            background: #424855;
        }
    </style>
</head>
<body>
    <!-- Add theme toggle -->
    <div class="theme-toggle" role="button" aria-label="Toggle theme" tabindex="0"></div>
    
    <div class="container">
        ${generateNav('git-cheat-sheet.html')}
        <main>
            <div class="content">
                {{content}}
            </div>
        </main>
    </div>
    <script>
        // Add copy buttons to code blocks
        document.querySelectorAll('pre code').forEach((block) => {
            const button = document.createElement('button');
            button.className = 'copy-button';
            button.textContent = 'Copy';
            
            button.addEventListener('click', async () => {
                try {
                    await navigator.clipboard.writeText(block.textContent);
                    button.textContent = 'Copied!';
                    setTimeout(() => {
                        button.textContent = 'Copy';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                    button.textContent = 'Error';
                }
            });
            
            block.parentNode.style.position = 'relative';
            block.parentNode.appendChild(button);
        });
    </script>
    
    <!-- Add theme toggle script -->
    <script>
        const toggle = document.querySelector('.theme-toggle');
        const root = document.documentElement;
        
        const savedTheme = localStorage.getItem('theme') || 'dark';
        root.setAttribute('data-theme', savedTheme);
        
        toggle.addEventListener('click', () => {
            const currentTheme = root.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            root.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
        
        toggle.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle.click();
            }
        });
    </script>
</body>
</html>
`;

// Read markdown file
const mdFile = path.join(__dirname, '../docs/git-cheat-sheet.md');
const markdown = fs.readFileSync(mdFile, 'utf-8');

// Convert to HTML
const content = marked.parse(markdown);

// Insert into template
const html = template.replace('{{content}}', content);

// Write HTML file
const outputFile = path.join(__dirname, '../docs/git-cheat-sheet.html');
fs.writeFileSync(outputFile, html);

console.log('Built git-cheat-sheet.html'); 