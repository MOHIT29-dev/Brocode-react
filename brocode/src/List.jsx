function List(){
    const fruits  =["Apple", "Banana", "Orange", "Mango"];
    const ListItems = fruits.map(fruits => <li>{fruits}</li>);
    return(<ol>{ListItems}</ol>);
}
export default List;


