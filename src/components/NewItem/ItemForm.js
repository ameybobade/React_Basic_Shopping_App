    import { useState } from 'react';
    import './ItemForm.css';
    const ItemForm=()=>
    {
        // const [enteredTitle,setEnteredTitle] = useState("");
        // const [enteredCost,setEnteredCost] = useState("");
        // const [enteredDate,setEnteredDate] = useState("");
        const [userInput,setUserInput] = useState(
        {
            enteredTitle:"",
            enteredCost:"",
            enteredDate:""

        } 
        )
        
        const titleChangeHandler=(event)=>
    {
        //  setEnteredTitle(event.target.value);
        // setUserInput({...userInput,eneteredTitle:event.target.value})
        setUserInput((prevState)=>{
            return{...userInput,eneteredTitle:event.target.value};
    });
    };
    const costChangeHandler=(event)=>
    {
        //  setEnteredCost(event.target.value);
        setUserInput({...userInput,eneteredCost:event.target.value});   
    };
    const dateChangeHandler=(event)=>
    {
        //  setEnteredDate(event.target.value);
    };


        return(
            <form>
                <div className="new-item__controls">
                    <div className="new-item__control">
                        <label>Title</label>
                        <input type="text" onChange={titleChangeHandler}></input>
                    </div> 
                    <div className="new-item__control">
                    <label>Cost</label>
                        <input type="number" min="1" step="5" onChange={costChangeHandler}></input>
                    </div>   
                    <div className="new-item__control">
                    <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler}></input>
                    </div>
                    <div className="new-item__actions">
                    <button onClick="{displayData}">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
    export default ItemForm;