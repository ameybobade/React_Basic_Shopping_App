import './Shoppingitem.css';
import { usestate } from "react";
import Purchase_Date from './Purchase_Date';
import Card from './UI/Card';
import { useState } from 'react';
const Shoppingitem=({items})=>
{
    const [title,setTitle] = useState(items.title);

    function clickHandler(){
        // alert("test");
        setTitle("New Title");
    }

    return (
        <Card className="shopping_item">
            <div >
            <h2>{title}</h2>
            </div>
            <div className="shopping_item_Cost">{items.cost}</div>
            <Purchase_Date purchaseDate={items.date}/>
         <button onClick={clickHandler}>Change Title</button>
        </Card>    
    )
}
export default Shoppingitem;