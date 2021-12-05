import React,{useState} from "react";
import Expenses from "./Components/Expenses";
import NewExpense from "./Components/NewExpenses.js/NewExpense";


function App() {
 
  let DUMMY_EXPENSE =[
    {
      id:1,
      title:'School Fee',
      amount:250,
      date:new Date(2021,15,10)

    },
  
    {
      id:2,
      title:'Book',
      amount:555,
      date:new Date(2021,15,6)

    },
    {
      id:3,
      title:'Bus',
      amount:1000,
      date:new Date(2021,15,8)

    },
    {
      id:4,
      title:'Food',
      amount:600,
      date:new Date(2021,15,20)

    },
     
  ]
  const[expenses,setExpenses]=useState(DUMMY_EXPENSE)
  const addExpenseHandler=(expense) =>{
    const updateExpense=[expense,...expenses];
    setExpenses(updateExpense);
  }
  return (
    <div className="App">
      <div>

        <NewExpense  onAddExpense={addExpenseHandler} />
      <Expenses item={expenses}/>
      </div>
    
    </div>
  );
}

export default App;
