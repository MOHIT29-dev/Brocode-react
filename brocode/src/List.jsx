function List(){
    const fruits  =[{id: 1,name:"Apple",calories:52},
                    {id: 2,name:"Banana",calories:89},  
                    {id: 3,name:"Orange",calories:47}, 
                    {id: 4,name:"Mango",calories:100}];

    //fruits.sort((a,b) => a.name.localeCompare(b.name)); //ALPHABETICAL ORDER
    //fruits.sort((a,b) => b.calories - a.calories); //CALORIE ORDER NUMERIC ORDER

    //const lowCalFruits = fruits.filter(fruits => fruits.calories < 60);

    const highCalFruits = fruits.filter(fruits => fruits.calories >=60);



    const ListItems = highCalFruits.map(highCalFruits => 
    <li key = {highCalFruits.id}>  {highCalFruits.name}: &nbsp;
    <b>{highCalFruits.calories}</b></li>);


    return(<ol>{ListItems}</ol>);
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