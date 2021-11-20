import logo from './logo.svg';
import './App.css';
import Items from './components/Items/Items';
import NewItem from './components/NewItem/NewItem';


const App=()=>{
  const items = [
    {
      "id":100,
      "title": "Watter Bottle",
      "cost" : 200,
      "date":  new Date(2021,9,28)
    },
    {
      "id":200,
      "title": "Pencil",
      "cost" : 100,
      "date":  new Date(2021,9,21)
    }
  ]
  return (
     <div className="App">
    <NewItem></NewItem>
    <Items items = {items}></Items>
     </div>
    
  );
}

export default App;
