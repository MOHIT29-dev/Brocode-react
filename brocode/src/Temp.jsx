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


import React, { useState } from 'react';

function MyComponent() {

    const [car, setCar] = useState({
        year:2012,
        model:"ford",
        color : "red",
    });

    function handleYearChange(e){
         setCar(c=>({...c,year:e.target.value}));
    };
 
    function handleModelChange(e){
        setCar(c=>({...c,model:e.target.value}));
    };

    function handleColorChange(e){
        setCar(c=>({...c,color:e.target.value}));
    }

    return (
        <div>
            <p>year: {car.year} model: {car.model} color: {car.color}</p>
            <input type ="number" onChange={handleYearChange}/>
            <input type ="text" onChange={handleModelChange}/>
            <input type ="text" onChange={handleColorChange}/>
        </div>
      );
}
export default MyComponent



//git command to commit
// git add .
// git commit -m "message"
// git push origin main

//git to create new branch and push and commit
// git checkout -b branch_name
// git add .
// git commit -m "message"
// git push origin branch_name