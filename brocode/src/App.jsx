/*import Header from './header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';*/

import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Students.jsx'; 
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
function App() {
    const fruits  =[{id: 1,name:"Apple",calories:52},
                    {id: 2,name:"Banana",calories:89},  
                    {id: 3,name:"Orange",calories:47}, 
                    {id: 4,name:"Mango",calories:100}];

    const vegetables  =[{id: 1,name:"Carrot",calories:52},
                    {id: 2,name:"Broccoli",calories:89},  
                    {id: 3,name:"Spinach",calories:47}, 
                    {id: 4,name:"Potato",calories:100}];

    return (<>
        {fruits.length > 0 ? <List items={fruits} category = "Fruits"/> : null}
        {vegetables.length > 0 ? <List items={vegetables} category = "Vegetables"/> : null}
    </>);
    
}

export default App
