// updater function = a function passed as an argument to setState()
// ex. setYear(arrow function)
// Allows for safe updates based on the previous state
// Used with multiple state updates and asynchronous functions
// Good practice to use updater functions



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



