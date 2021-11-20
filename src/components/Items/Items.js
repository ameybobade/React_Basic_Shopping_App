import "./Items.css";
import Shoppingitem from "../Shoppingitem";
import Card from '../UI/Card';
const Items=({items})=>
{
    return(
     <Card className="items">
    <Shoppingitem items = {items[0]}></Shoppingitem>
    <Shoppingitem items = {items[1]}></Shoppingitem>
     </Card>
    )
}
export default Items;