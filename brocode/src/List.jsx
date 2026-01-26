import PropTypes from "prop-types";

function List(props){


    const category = props.category;
    const items = props.items;


    const listItems = items.map(item => 
        <li key={item.id}>  {item.name}: &nbsp;
        <b>{item.calories}</b></li>);



    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
    //fruits.sort((a,b) => b.calories - a.calories); //CALORIE ORDER NUMERIC ORDER

    //const lowCalFruits = fruits.filter(fruits => fruits.calories < 60);

    //const highCalFruits = fruits.filter(fruits => fruits.calories >=60);



   /* const ListItems = fruits.map(fruit => 
    <li key = {fruit.id}>  {fruit.name}: &nbsp;
    <b>{fruit.calories}</b></li>);*/


    return(<>
           <h3>{category}</h3>
           <ol>{listItems}</ol>
           </>);
}
List.propTypes = {
    category: PropTypes.string.isRequired,

    //say that items is an array of objects with specific shape
    // each object has id, name, calories
    // and their respective data types
    // isRequired means that this prop must be provided
    // when the component is used.
    // if not provided, a warning will be shown in the console
    // during development.
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,  
        calories: PropTypes.number.isRequired
    })).isRequired  

}
export default List;


 // why added key here: Keys help React identify which items have changed, 
 // are added, or are removed. 
 // They are used to optimize 
 // rendering performance and ensure correct updates in the DOM.
// each child in a list should have a unique "key" prop.

//use id why: The id is a unique identifier for each fruit object in the array. 
//for large lists using index as key can lead to issues when the list is modified 
// (e.g., items are added, removed, or reordered).

// map() = creates a new array by performing a function on each array element.