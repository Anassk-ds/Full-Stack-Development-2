import React from "react";
function App() 
{
const fruits = ["Apple", "Banana", "Cherry", "Date"];
const fruitItems = [];
for (let i = 0; i < fruits.length; i++) 
 {
fruitItems.push( <li> {fruits[i]} </li> );
 }
return (
<div>
<h2>Fruit List</h2>
<ul>{fruitItems}</ul>
</div>
 );
}
export default App;
