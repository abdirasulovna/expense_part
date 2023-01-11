import "./App.css";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Expenses } from "./components/expenses/Expenses";
import { useState } from "react";



function App() {
  const [expenses,setExpenses] = useState([
  {
    title: "Туалетная бумага",
    price:  300,
    date: new Date(),
  },
  {
    title: "Зарядник",
    price: 500,
    date: new Date(),
  },
])
  const addNewExpensehandler =(data)=>{
    const updatedExpenses =[...expenses]
    updatedExpenses.push(data)
    setExpenses(updatedExpenses);
  }
  return (
    <div className="App">
      <NewExpense onNewExpenseAdd={addNewExpensehandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
