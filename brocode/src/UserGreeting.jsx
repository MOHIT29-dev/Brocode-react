
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

// git stash
// git stash apply
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
// git log --oneline
// git log --graph --oneline --all
// git reflog
// git gc
// git bisect start
// git bisect good <commit id>



// git bisect bad <commit id>
// git bisect reset
// git submodule add <repo link>
// git submodule update --init --recursive

// git archive -o latest.zip HEAD
// git blame <filename>
// git shortlog
// git describe --tags
