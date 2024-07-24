# README

## Introduction to Git and GitHub

### Git
Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It allows multiple developers to work on a project simultaneously without interfering with each other's work.

### GitHub
GitHub is a web-based platform that uses Git for version control. It allows developers to collaborate on projects, host repositories, and share code. It also offers additional features such as issue tracking, project management, and code reviews.

## Basic Git Commands

### Configuration
```sh
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"


### Initialization
git init

### Cloning a Repository
git clone https://github.com/username/repository.git

### Staging and Committing Changes
git add <file>    # Stage a specific file
git add .         # Stage all changes
git commit -m "Commit message"

git push origin <branch>   # Push changes to the remote repository

git pull origin <branch>   # Pull changes from the remote repository

git branch               # List branches
git branch <branch-name> # Create a new branch
git checkout <branch-name> # Switch to a branch





