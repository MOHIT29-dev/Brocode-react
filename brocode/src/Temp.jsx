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


import React, { useState, useEffect } from "react";

function MyComponent() {

    const [width, setWidth] = useState(() => window.innerWidth);
    const [height, setHeight] = useState(() => window.innerHeight);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    return (
        <>
            <p>Window Width: {width}px</p>
            <p>Window Height: {height}px</p>
        </>
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

