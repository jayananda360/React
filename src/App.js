import React, { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";



const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: '100.12',
    date: new Date(2020, 7, 12)
  },
  {
    id: 'e2',
    title: 'Bike Insurance',
    amount: '220.23',
    date: new Date(2021, 8, 22)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: '150.78',
    date: new Date(2020, 6, 25)
  },
  {
    id: 'e4',
    title: 'Mobile Bill',
    amount: '120',
    date: new Date(2021, 5, 28)
  }
];


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>

  );
}

export default App;
