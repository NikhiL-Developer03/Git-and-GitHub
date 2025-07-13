# Git & GitHub Syllabus

## Topics Covered
- Start
- Ideation
- Make changes
- Checking logs 
- Staging 
- Committing
- Reverting
- Branching 
- Staging 
- Conflicts handling
- & much more 
- Collaborating 
- Contribution 
- Remote 
- .gitignore 
- Fetch push pull 
- and much more

---

## Getting Started

### Initial Configuration
```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
git init
```

### File Stages
- **U** - Untracked
- **A** - Added or staged
- **C** - Committed
- **M** - Modified  
- **D** - Deleted
- **R** - Renamed

---

## Basic Commands

### Status and Logging
```bash
git status -s              # Know current status of unstaged and staged files
git log --oneline           # Know current status of saved points
git log --oneline --graph   # Logging everything in one line with graph
```

### Making a Checkpoint or Saved Point
```bash
git add <file_name>         # Staging files
git commit -m "message"     # Committing files
```

### Reverting Back
```bash
git reset --hard HEAD~1     # Go back to the previous saved point
git reset --hard HEAD~2     # Go back to the second last saved point
git checkout <commit_hash>   # Go back to a specific saved point
```

### Quick Status Check
```bash
git status -s               # Check konsi file kis stage mein hai 
git log --oneline --graph   # Check kitne saved checkpoint hai
```

---

## Branch Management

### Branching Operations
```bash
git checkout -b <branch_name>   # Creating a branch
git checkout <branch_name>      # Switching to a branch
git branch -d <branch_name>     # Deleting a branch
git merge <branch_name>         # Merge branch into current branch
```

---

## Stash

**Definition:** Stash is a way to save your current changes temporarily without committing them. It allows you to switch branches or work on something else without losing your changes.

### Stash Commands
```bash
git stash           # Save your current changes temporarily
git stash apply     # Apply the latest stashed changes
git stash pop       # Apply the stashed changes and remove them from the stash
git stash list      # See the list of stashed changes
```

---

## Collaboration Workflow

### Common Steps for Collaboration

1. **Main banda folder and initial files banayega**
2. **Ab usse github par daal dega**
3. **Collaborators ko add kar de**

4. **Ab sabhi log apne apne local machine par clone karenge**
   ```bash
   git clone <repository_url>
   ```

5. **[VERY IMPORTANT] Ab sabhi log apne apne feature branch banayenge**
   ```bash
   git checkout -b <feature_branch_name>
   ```

6. **Ab sabhi log apne apne feature branch par changes karenge**

```bash
   git add <file_name>
   git commit -m "Your commit message"
   git push origin <feature_branch_name>
```

7. **Ab sabhi log apne apne feature branch par changes ko commit karenge and push karenge**
   ```bash
    git add <file_name>
    git commit -m "Your commit message"
    # Push to the remote feature branch
    git push origin <feature_branch_name>
   ```

8. **Inform karein team ko about the commit and push**

9. **Merger banda fetch karega sabhi logon ke changes ko and merge karega and re-push karega**
   ```bash
   git fetch
   git checkout main
   git merge <feature_branch_name>
   git push origin main
   ```

10. **Ab sabhi log apne apne local machine par pull karenge**
    ```bash
    git pull origin main
    ```