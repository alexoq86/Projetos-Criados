import './Expenses.css';
import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

  const [enteredFilter, setEnteredFilter] = useState("2020");

  const newFilter = filterSelected => {
    setEnteredFilter(filterSelected)
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === enteredFilter;
  });

  let expensesContent = <p>Sem itens.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date} />
    ));
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={enteredFilter}
          onSelectFilter={newFilter}
        />
        {expensesContent}
      </Card>
    </div>
  );
};


export default Expenses;