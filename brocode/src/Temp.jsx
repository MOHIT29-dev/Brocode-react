import React, {useState} from 'react';  


function MyComponent(){
    const [name, setName] = useState("guest");
    const [age,setAge] = useState("");
    const [payment, setPayment] = useState("");


    function handleNameChange(event){
        setName(event.target.value);
        
    }

    function handleChangeAge(event){
        setAge(event.target.value);
        
    }

    function handleChangePayment(event){
        setPayment(event.target.value);
    }

    return( <div>
                <p>Name: {name}</p>
                <input type="text" value={name} onChange={handleNameChange}/>
                

                <p>Age : {age}</p> 
                <input type="number" value={age} onChange={handleChangeAge}/>   
                

                <p>Payment mode:{payment}</p>
                <select value={payment} onChange= {handleChangePayment}>
                    <option value="Credit Card">CREDIT CARD</option>
                    <option value="Debit Card">DEBIT CARD</option>
                    <option value="PayPal">PAYPAL</option>
                </select>    
                
            </div>);
}
export default MyComponent