# Git Cheatsheet  

A quick reference guide to the most commonly used Git commands.

---

## **Repository Setup**  
| Command | Description |
|---------|------------|
| `git init` | Initialize a new Git repository locally. |
| `git clone <repo-url>` | Clone a remote repository to your local machine. |

---

## **Working with Changes**  
| Command | Description |
|---------|------------|
| `git status` | Check the status of changes in the working directory. |
| `git add <file>` | Stage a specific file for commit. |
| `git add .` | Stage all changes. |
| `git commit -m "message"` | Commit staged changes with a descriptive message. |
| `git log` | View commit history. |
| `git diff` | Show changes between working directory and last commit. |

---

## **Working with Remote Repositories**  
| Command | Description |
|---------|------------|
| `git remote add origin <repo-url>` | Connect a local repository to a remote one. |
| `git push origin main` | Push changes to the main branch of the remote repository. |
| `git pull origin main` | Fetch and merge changes from the remote repository. |
| `git fetch` | Retrieve changes from the remote repository without merging. |

---

## **Branching and Merging**  
| Command | Description |
|---------|------------|
| `git branch` | List all branches. |
| `git branch <branch-name>` | Create a new branch. |
| `git checkout <branch-name>` | Switch to an existing branch. |
| `git checkout -b <branch-name>` | Create and switch to a new branch. |
| `git merge <branch-name>` | Merge changes from another branch into the current branch. |
| `git rebase <branch-name>` | Reapply commits on top of another base branch. |

---

## **Undoing Changes**  
| Command | Description |
|---------|------------|
| `git reset --soft <commit-hash>` | Reset to a previous commit but keep changes staged. |
| `git reset --hard <commit-hash>` | Reset to a previous commit and discard all changes. |
| `git revert <commit-hash>` | Undo a commit by creating a new commit that reverses it. |
| `git checkout -- <file>` | Discard local changes to a specific file. |

---

## **Other Useful Commands**  
| Command | Description |
|---------|------------|
| `git stash` | Temporarily save changes without committing. |
| `git stash pop` | Reapply stashed changes. |
| `git tag <tag-name>` | Create a tag for a specific commit. |
| `git show <commit-hash>` | Display detailed information about a commit. |

---
 
For more advanced Git usage, refer to the official documentation: [Git Documentation](https://git-scm.com/doc).

