# Lesson 1: Getting Started with GitHub  
This lesson covers the basics of creating a GitHub account, setting up a repository, and adding files.

---

## Step 1: Creating a GitHub Account  
1. Go to [github.com](https://github.com).  
2. Click **"Sign up"** in the top-right corner.  
3. Enter the required details:  
   - **Username**  
   - **Email**  
   - **Password**  
4. Verify your email.  
5. Complete the setup (optional steps can be skipped).  

---

## Step 2: Creating a New Repository  
1. Click the **"+"** button in the top-right corner and select **"New repository"**.  
2. Fill in the repository details:  
   - **Repository name** (e.g., `my-first-repo`)  
   - **Description** (optional)  
   - Choose **Public** or **Private** visibility  
3. (Optional) Select **"Initialize this repository with a README"**.  
4. Click **"Create repository"**.  

---

## Step 3: Adding Files to the Repository  

### Method 1: Upload via GitHub Web  
1. Open your repository.  
2. Click **"Add file" → "Upload files"**.  
3. Drag and drop files or click **"Choose your files"**.  
4. Add a commit message (e.g., `"Added my first file"`).  
5. Click **"Commit changes"**.  

---

### Method 2: Using Git (Command Line)  
1. Install **Git** if it is not already installed.  
2. Open a terminal and run the following commands:  

   ```bash
   git clone <repo-url>
   cd <repo-name>
   echo "Hello GitHub" > hello.txt
   git add .
   git commit -m "Added hello.txt"
   git push origin main

