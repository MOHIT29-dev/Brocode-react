/*import Header from './header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';*/

import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Students.jsx'; 
function App() {
    return (
    <>
        <Card/>
        <Button/>
        <Button/>
        <Student name="Mohit" age={20}/>
        <Student name="Rohit" age={22}/>
        <Student name="Mike" age={25}/>
    </>
        
    );
}

export default App
