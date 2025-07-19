# Lesson 3: Working with Branches and Commits  

This lesson covers how to create and switch branches, make commits, push changes, and merge updates in Git.

---

## Step 1: Understanding Branches  

A branch in Git is an independent line of development that allows you to work on new features or fixes **without affecting the main code**.  

- The **`main` branch** is the default and stable branch.  
- New branches allow **parallel development** and prevent incomplete changes from affecting the main project.  
- Once a branch is ready, it can be **merged** back into `main`.  

---

## Step 2: Creating and Switching Branches  

### Using GitHub Web  
1. Open your repository on GitHub.  
2. Click the **"main"** dropdown at the top left.  
3. Type a new branch name (e.g., `feature-branch`).  
4. Click **"Create branch"**.

### Using Git (Command Line)  
1. Check existing branches:  
   ```bash
   git branch
   ```
2. Create a new branch:  
   ```bash
   git branch feature-branch
   ```
3. Switch to the new branch:  
   ```bash
   git checkout feature-branch
   ```

Alternatively, create and switch in a single command:  
```bash
git checkout -b feature-branch
```

---

## Step 3: Making, Committing, and Pushing Changes  

Once you are on a branch, you can start making changes.

1. Modify a file or create a new one:  
   ```bash
   echo "New feature added" > feature.txt
   ```
2. Check the repository status:  
   ```bash
   git status
   ```
   - This shows **untracked or modified files**.

3. Add the file to staging:  
   ```bash
   git add feature.txt
   ```
4. Commit the changes with a descriptive message:  
   ```bash
   git commit -m "Added feature.txt with a new feature"
   ```
   - Each commit creates a **history entry** in Git.

5. Push the changes to GitHub:  
   ```bash
   git push origin feature-branch
   ```
   - This uploads the `feature-branch` to GitHub so others can see your changes.

---

## Step 4: Merging Branches  

After testing, merge the changes back into `main`.

### Using GitHub Web (Pull Request)  
1. Open your repository on GitHub.  
2. Click **"Pull requests"** → **"New pull request"**.  
3. Select `feature-branch` and compare it to `main`.  
4. Click **"Create pull request"** and provide a description.  
5. Once reviewed, click **"Merge pull request"**.

### Using Git (Command Line)  
1. Switch back to the `main` branch:  
   ```bash
   git checkout main
   ```
2. Merge the feature branch into `main`:  
   ```bash
   git merge feature-branch
   ```
3. Push the updated `main` branch to GitHub:  
   ```bash
   git push origin main
   ```

---

## Step 5: Deleting a Branch (After Merging)  

Once the branch is merged, it can be deleted to keep the repository clean.

### Using GitHub Web  
1. After merging, click **"Delete branch"** in the pull request.

### Using Git (Command Line)  
1. Delete the branch locally:  
   ```bash
   git branch -d feature-branch
   ```
2. Delete the branch on GitHub:  
   ```bash
   git push origin --delete feature-branch
   ```

---
