// useEffect()
// React Hook that tells React to DO THIS CODE WHEN:
// (pick one) 
// This component re-renders
// This component mounts
// The state of a value changes

// useEffect(function, [dependencies])

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (real-time updates)
// #4 Fetching Data from an API
// #5 Clean up when a component unmounts


import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
    const inputRef = useRef(null);
    
    
    useEffect(()=> {
        console.log("The component has rendered or re-rendered.");
        console.log('inputRef current value:', inputRef.current);   
    })

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = 'yellow';
    }

    useEffect(() => {

    }, []);

    return(<div>
        <button onClick={handleClick}>
            Click me.
        </button>
        <input ref={inputRef}/>
    </div>
        
    );
}

export default MyComponent;






//git command to commit
// git add .
// git commit -m "message"
// git push origin main

//git to create new branch and push and commit
// git checkout -b branch_name
// git add .
// git commit -m "message"
// git push origin branch_name

//rollback to previous commit
// git checkout commit_id
// git checkout main (to go back to main branch)
// git merge commit_id (to merge changes from commit_id to main branch)

