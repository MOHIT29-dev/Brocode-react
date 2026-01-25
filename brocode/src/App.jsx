/*import Header from './header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';*/

import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Students.jsx'; 
import UserGreeting from './UserGreeting.jsx';
import List from './List.jsx';
function App() {
    return (
    <>
        <List/>
        <Student name="Mohit" age={20} isStudent= {true}/>
        <UserGreeting isLoggedIn={false} username = " Mohit "/>
    </>
        
    );
}

export default App
