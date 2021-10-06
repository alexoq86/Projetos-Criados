import './Expenses.css';
import React, { useState } from "react";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

function Expenses(props) {

  const [enteredFilter, setEnteredFilter] = useState("2021");

  const newFilter = filterSelected => {
    setEnteredFilter(filterSelected)
  };
  
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onSelectFilter={newFilter}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
};


export default Expenses;