import './ExpenseItem.css';

import React,{useState} from 'react'
import ExpenseDate from './ExpenseDate';


function ExpenseItem(props) {

//     const[newTitle,setNewTitle]= useState("");
//    const[title,setTitle]= useState(props.title);
    
   
//    const clickHandler=() =>{
//         setTitle(newTitle);
//     }

//     const changeHandler = (event)=>{
//         setNewTitle(event.target.value);
//     }
    return (
        <div className="expense-item">
            
           <ExpenseDate date={props.date}/>
           <div className="expense-item_description">
               <h2>{props.title}</h2>
               <div className="expense-item_price">${props.amount}</div>
           </div>
           {/* <input type="text" value= {newTitle} onChange={changeHandler} />
           <button onClick={clickHandler}>Change Title</button> */}
        </div>
    )
}

export default ExpenseItem
