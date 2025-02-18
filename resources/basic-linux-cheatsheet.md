# Basic Linux Commands Cheat Sheet

A quick reference guide to essential Linux file management, text editing, and package management commands.

---

## **File & Directory Management**  
| Command | Description |
|---------|------------|
| `ls` | List files and directories. |
| `ls -l` | Display files in long listing format. |
| `ls -a` | Show hidden files. |
| `pwd` | Print the current working directory. |
| `cd <directory>` | Change to a specified directory. |
| `cd ..` | Move up one directory level. |
| `mkdir <dir>` | Create a new directory. |
| `rmdir <dir>` | Remove an empty directory. |
| `rm <file>` | Delete a file. |
| `rm -r <dir>` | Delete a directory and its contents. |
| `cp <source> <destination>` | Copy a file to a new location. |
| `cp -r <source> <destination>` | Copy a directory recursively. |
| `mv <oldname> <newname>` | Move or rename a file/directory. |
| `touch <file>` | Create a new empty file. |

---

## **File Viewing & Editing**  
| Command | Description |
|---------|------------|
| `cat <file>` | Display the contents of a file. |
| `less <file>` | View file contents page by page. |
| `head -n <number> <file>` | Display the first `n` lines of a file. |
| `tail -n <number> <file>` | Display the last `n` lines of a file. |

### **Nano Editor (Simple)**
| Command | Description |
|---------|------------|
| `nano <file>` | Open a file in Nano editor. |
| `CTRL + X` | Exit Nano. |
| `CTRL + S` | Save changes. |
| `CTRL + W` | Search for a word or phrase. |
| `CTRL + K` | Cut a line. |
| `CTRL + U` | Paste a line. |

### **Vim Editor (Advanced)**
| Command | Description |
|---------|------------|
| `vim <file>` | Open a file in Vim editor. |
| `i` | Enter insert mode to edit text. |
| `ESC` | Exit insert mode. |
| `:w` | Save the file. |
| `:q` | Quit Vim. |
| `:wq` | Save and quit Vim. |
| `:q!` | Quit without saving changes. |

---

## **APT Package Management (Ubuntu/Debian)**  
| Command | Description |
|---------|------------|
| `sudo apt update` | Refresh package lists. |
| `sudo apt upgrade` | Upgrade all installed packages. |
| `sudo apt install <package>` | Install a specific package. |
| `sudo apt remove <package>` | Remove an installed package. |
| `sudo apt purge <package>` | Remove a package along with its configuration files. |
| `sudo apt search <package>` | Search for a package in the repository. |
| `sudo apt list --installed` | List all installed packages. |
| `sudo apt autoremove` | Remove unused dependencies. |
| `sudo apt clean` | Clear cached package files. |

---
