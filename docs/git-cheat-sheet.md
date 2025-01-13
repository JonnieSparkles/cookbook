# Git Cheat Sheet

## 1. Setting Up Git

### Initialize a repository
```bash
git init
```

### Connect to a GitHub repository
```bash
git remote add origin https://github.com/your-username/repo-name.git
```

### Check your configuration
```bash
git config --list
```

### Set your username and email
```bash
git config --global user.name "Your Name"
git config --global user.email "your-email@example.com"
```

## 2. Basic Commands

### Check repository status
```bash
git status
```

### Add files to staging
```bash
git add .
```

### Commit changes
```bash
git commit -m "Your commit message"
```

### Push changes to GitHub
```bash
git push origin main
```

## 3. Working with Versions

### Tag a commit (annotated)
```bash
git tag -a v1.0 -m "Version 1.0 release"
```

### Push tags to GitHub
```bash
git push origin --tags
```

### List all tags
```bash
git tag
```

### Checkout a specific version
```bash
git checkout v1.0
```

## 4. Undo Changes

### Unstage a file
```bash
git restore --staged filename
```

### Unstage all files
```bash
git restore --staged .
```

### Revert changes to last committed state
```bash
git checkout -- filename
```

### Undo the most recent commit (keep changes)
```bash
git reset --soft HEAD~1
```

### Undo the most recent commit (discard changes)
```bash
git reset --hard HEAD~1
```

## 5. Syncing with GitHub

### Clone a repository
```bash
git clone https://github.com/your-username/repo-name.git
```

### Pull latest changes
```bash
git pull origin main
```

### Pull with rebase
```bash
git pull --rebase origin main
```

## 6. Viewing History

### View commit history
```bash
git log
```

### View summarized history
```bash
git log --oneline
```

## 7. Branching (Advanced Use)

### Create a new branch
```bash
git branch branch-name
```

### Switch to a branch
```bash
git checkout branch-name
```

### Merge a branch into main
```bash
git checkout main
git merge branch-name
```

## 8. Updating Files

### Step 1: Check status
```bash
git status
```

### Step 2: Stage changes
```bash
git add .
```

### Step 3: Commit changes
```bash
git commit -m "Update files"
```

### Step 4: Push changes
```bash
git push
```

## 9. Updating Remote URL

### Update the remote URL
```bash
git remote set-url origin https://github.com/your-username/new-repo-name.git
```

## Tips

- **Use Semantic Versioning:** `vMAJOR.MINOR.PATCH` (e.g., `v1.0.0`).
- **Commit Often:** Break work into small, meaningful commits.
- **Write Descriptive Commit Messages:** Helps track changes. 