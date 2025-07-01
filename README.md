# Git and GitHub Complete Guide

## Introduction to Git and GitHub

### Git
Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on a project simultaneously without interfering with each other's work.

### GitHub
GitHub is a web-based platform that uses Git for version control. It allows developers to collaborate on projects, host repositories, and share code. It also offers additional features such as issue tracking, project management, and code reviews.

## Git Configuration

### Initial Setup
```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
```

### Check Configuration
```bash
git config --list
git config user.name
git config user.email
```

## Repository Operations

### Initialize Repository
```bash
git init                                    # Initialize new repository
git init <directory-name>                   # Initialize repository in specific directory
```

### Clone Repository
```bash
git clone <repository-url>                  # Clone repository
git clone <repository-url> <directory>      # Clone to specific directory
git clone --branch <branch-name> <url>      # Clone specific branch
```

## Basic Git Workflow

### Check Status
```bash
git status                                  # Check repository status
git status --short                          # Short status format
git status --porcelain                      # Machine-readable format
```

### Staging Changes
```bash
git add <file>                              # Stage specific file
git add .                                   # Stage all changes in current directory
git add -A                                  # Stage all changes (including deletions)
git add -u                                  # Stage only modifications and deletions
git add *.js                                # Stage all JavaScript files
```

### Committing Changes
```bash
git commit -m "Commit message"              # Commit with message
git commit -am "Message"                    # Add and commit in one step
git commit --amend                          # Amend last commit
git commit --amend -m "New message"         # Amend with new message
```

## Branch Management

### Creating and Switching Branches
```bash
git branch                                  # List local branches
git branch -a                               # List all branches (local and remote)
git branch <branch-name>                    # Create new branch
git checkout <branch-name>                  # Switch to branch
git checkout -b <branch-name>               # Create and switch to new branch
git switch <branch-name>                    # Modern way to switch branches
git switch -c <branch-name>                 # Create and switch (modern syntax)
```

### Branch Operations
```bash
git branch -d <branch-name>                 # Delete merged branch
git branch -D <branch-name>                 # Force delete branch
git branch -m <old-name> <new-name>         # Rename branch
git branch -m <new-name>                    # Rename current branch
```

### Merging Branches
```bash
git merge <branch-name>                     # Merge branch into current branch
git merge --no-ff <branch-name>             # Merge without fast-forward
git merge --squash <branch-name>            # Squash merge
```

## Remote Repository Operations

### Remote Management
```bash
git remote                                  # List remotes
git remote -v                               # List remotes with URLs
git remote add origin <url>                 # Add remote
git remote remove origin                    # Remove remote
git remote rename origin upstream           # Rename remote
```

### Push and Pull
```bash
git push origin <branch-name>               # Push to remote branch
git push -u origin <branch-name>            # Push and set upstream
git push --all origin                       # Push all branches
git push --tags                             # Push all tags
git pull origin <branch-name>               # Pull from remote
git pull --rebase origin <branch-name>      # Pull with rebase
git fetch origin                            # Fetch without merging
```

## Undoing Changes and Deletions

### Unstaged Changes
```bash
git checkout -- <file>                     # Discard changes in specific file
git checkout .                              # Discard all unstaged changes
git restore <file>                          # Modern way to discard changes
git restore .                               # Restore all files
```

### Staged Changes
```bash
git reset HEAD <file>                       # Unstage specific file
git reset HEAD                              # Unstage all files
git restore --staged <file>                 # Modern way to unstage
```

### Committed Changes
```bash
git reset --soft HEAD~1                     # Undo last commit, keep changes staged
git reset --mixed HEAD~1                    # Undo last commit, keep changes unstaged
git reset --hard HEAD~1                     # Undo last commit, discard all changes
git reset --hard HEAD~3                     # Go back 3 commits
git revert <commit-hash>                     # Create new commit that undoes specific commit
```

### Handling Deleted Files
```bash
git restore <deleted-file>                  # Restore accidentally deleted file
git rm <file>                               # Properly delete file and stage deletion
git rm --cached <file>                      # Remove from tracking but keep locally
git add -A                                  # Stage deletions along with other changes
```

### Clean Untracked Files
```bash
git clean -n                                # Preview what will be deleted (dry run)
git clean -f                                # Remove untracked files
git clean -fd                               # Remove untracked files and directories
git clean -fx                               # Remove untracked and ignored files
```

## Viewing History and Differences

### Log and History
```bash
git log                                     # View commit history
git log --oneline                           # Compact log format
git log --graph                             # Show branch graph
git log --author="Name"                     # Filter by author
git log --since="2 weeks ago"               # Filter by date
git log -p                                  # Show patch/diff for each commit
git log --stat                              # Show file statistics
```

### Differences
```bash
git diff                                    # Show unstaged changes
git diff --staged                           # Show staged changes
git diff HEAD                               # Show all changes since last commit
git diff <commit1> <commit2>                # Compare two commits
git diff <branch1> <branch2>                # Compare two branches
```

## Advanced Operations

### Stashing
```bash
git stash                                   # Stash current changes
git stash save "message"                    # Stash with message
git stash list                              # List all stashes
git stash apply                             # Apply latest stash
git stash apply stash@{2}                   # Apply specific stash
git stash drop                              # Delete latest stash
git stash pop                               # Apply and delete latest stash
```

### Rebasing
```bash
git rebase <branch>                         # Rebase current branch onto another
git rebase -i HEAD~3                        # Interactive rebase for last 3 commits
git rebase --continue                       # Continue rebase after resolving conflicts
git rebase --abort                          # Abort rebase operation
```

### Tags
```bash
git tag                                     # List all tags
git tag <tag-name>                          # Create lightweight tag
git tag -a <tag-name> -m "message"          # Create annotated tag
git push origin <tag-name>                  # Push specific tag
git push --tags                             # Push all tags
git tag -d <tag-name>                       # Delete local tag
```

## Reset to Remote State
```bash
git fetch origin                            # Fetch latest changes
git reset --hard origin/main                # Reset to match remote main branch
git reset --hard origin/<branch-name>       # Reset to match specific remote branch
```

## Troubleshooting

### Common Issues
```bash
git status                                  # Always start here
git log --oneline -5                        # Check recent commits
git reflog                                  # See all recent HEAD movements
git fsck                                    # Check repository integrity
```

### Merge Conflicts
```bash
git status                                  # Check which files have conflicts
# Edit files to resolve conflicts
git add <resolved-files>                    # Stage resolved files
git commit                                  # Complete the merge
```

### Undo Almost Anything
```bash
git reflog                                  # Find the commit you want to return to
git reset --hard <commit-hash>              # Reset to that commit
```

## Best Practices

1. **Commit Often**: Make small, frequent commits with clear messages
2. **Use Branches**: Create feature branches for new development
3. **Write Good Commit Messages**: Use imperative mood, be descriptive
4. **Pull Before Push**: Always pull latest changes before pushing
5. **Review Before Commit**: Use `git diff --staged` to review staged changes
6. **Use .gitignore**: Exclude files that shouldn't be tracked
7. **Backup Important Work**: Push regularly to remote repositories

## Helpful Aliases
Add these to your `.gitconfig` file:
```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.cm commit
git config --global alias.lg "log --oneline --graph --decorate"
```





