/*import Header from './header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';*/

import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Students.jsx'; 
import UserGreeting from './UserGreeting.jsx';
function App() {
    return (
    <>
        <Card/>
        <Button/>
        <Button/>
        <Student name="Mohit" age={20} isStudent= {true}/>
        <Student name="Rohit" age={22} isStudent={true}/>
        <Student name="Mike" age={25} isStudent={true}/>
        <Student name="John" age={28} isStudent={false}/>
        <UserGreeting isLoggedIn={false} username = " Mohit "/>
    </>
        
    );
}

export default App
