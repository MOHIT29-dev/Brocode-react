// useState() = Re-renders the component when the state value changes

// useRef()   = "use Reference" Does not cause re-renders when its value changes.
//                     1. Accessing/Interacting with DOM elements
//                     2. Handling Focus, Animations, and Transitions
//                     3. Managing Timers and Intervals

import React, {useEffect, useRef} from 'react';

function MyComponent(){

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    });

    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "yellow";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "yellow";
        inputRef3.current.style.backgroundColor = "";
    }

    function handleClick3(){
        inputRef3.current.focus(); //focus allows user to target or focus on single element of a component at as any event handler changed
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "yellow";
    }

    return (
        <div>
            <button onClick={handleClick1}>
                Click me 1!
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                Click me 2!
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                Click me 3!
            </button>
            <input ref={inputRef3}/>
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

