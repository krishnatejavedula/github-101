
# Lesson 2: Initializing a Local Git Repository  

This lesson covers how to create a local Git repository, track files, and push changes to GitHub.

---

## Step 1: Creating a New Local Repository  

1. Open a terminal and navigate to the directory where you want to create a new project:  
   ```bash
   cd ~/projects  # Change to your preferred location
   mkdir my-first-repo  # Create a new directory
   cd my-first-repo  # Enter the directory
   ```
2. Initialize an empty Git repository:  
   ```bash
   git init
   ```
   - This sets up a `.git/` folder, which tracks changes inside this directory.  
   - You will see the message:  
     ```
     Initialized empty Git repository in /path/to/my-first-repo/.git/
     ```

---

## Step 2: Adding and Committing Files Locally  

1. Create a file inside the repository:  
   ```bash
   echo "My first Git-tracked file" > file.txt
   ```
2. Check the repository status:  
   ```bash
   git status
   ```
   - This will show `file.txt` as **untracked**.

3. Add the file to Git's tracking system:  
   ```bash
   git add file.txt
   ```
4. Commit the file with a descriptive message:  
   ```bash
   git commit -m "Initial commit: Added file.txt"
   ```
   - This saves the change history **locally**, but it is not yet uploaded to GitHub.

---

## Step 3: Connecting to a GitHub Repository  

To push your local repository to GitHub:  

1. Go to **GitHub** and create a new repository (without initializing a README).  
2. Copy the repository URL (e.g., `https://github.com/your-username/my-first-repo.git`).  
3. Link the local repository to GitHub:  
   ```bash
   git remote add origin https://github.com/your-username/my-first-repo.git
   ```
4. Push the local repository to GitHub:  
   ```bash
   git push -u origin main
   ```
   - This uploads all committed changes to GitHub.  
   - The `-u` flag sets `origin main` as the default push destination.
---
