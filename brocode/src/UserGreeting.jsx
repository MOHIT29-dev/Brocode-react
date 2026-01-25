
function UserGreeting(props){ 
    if (props.isLoggedIn){
        return <h1 className="welcome-msg">Welcome{props.username}</h1>
    } 
    else{
        return <h2 className="login-msg">Please Log in</h2>
    }

}

export default UserGreeting;

//Conditional rendering = allows you to control what gets rendered in your application based on certain conditions. 
// (ex. show, hide, or change components)





//git command to commit this file:
// git add .
// git commit -m "Add UserGreeting component"
// git push origin main





// GIT COMMANDS CHEAT SHEET
// git commands:
// git add .
// git commit -m "message"
// git push origin main

// git pull origin main
// git clone <repo link>
// git status
// git log
// git checkout <filename>
// git branch
// git checkout -b <branch name>
// git merge <branch name>
// git remote -v

// git stash : saves your changes without committing them.
// git stash apply: reapplies the changes you saved with git stash.
// git stash pop: reapplies the changes and removes them from the stash list.
// git stash list: shows the list of stashed changes.
// git stash drop: deletes a specific stash entry.
// git diff: shows the differences between your working directory and the index or a commit.
// git reset <filename>: unstage a file.
// git reset --hard: discard all local changes in your working directory.
// git reset --hard <commit id> : discard all local changes and reset to a specific commit.
// git reset --hard HEAD~1
// git revert <commit id>


// git fetch
// git merge origin/main
// git pull
// git cherry-pick <commit id>
// git tag <tag name>
// git tag -a v1.0 -m "version 1.0"
// git show <tag name>
// git push origin <tag name>
// git push origin --tags
// git rm <filename>
// git clean -f


// git config --global user.name "name"
// git config --global user.email "email"
// git config --global core.editor "code --wait"
// git log --oneline: shows a condensed version of the commit history.
// git log --graph --oneline --all : shows a graphical representation of the commit history.
// git show <commit id>
// git reset --soft <commit id>
// git reset --mixed <commit id>
// git reflog : shows a log of all your reference updates.
// git gc : cleans up unnecessary files and optimizes the local repository.
// git bisect start : starts the bisecting process.
// git bisect good <commit id> : marks a commit as good.


// git bisect bad <commit id>
// git bisect reset
// git submodule add <repo link>
// git submodule update --init --recursive

// git archive -o latest.zip HEAD
// git blame <filename>
// git shortlog
// git describe --tags




// what to type now 
    //Initial React project setup
//(END) answer: 