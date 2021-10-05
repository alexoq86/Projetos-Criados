import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const newExpense = (props) => {

    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        setIsEditing(false)
        props.onAddExpense(expenseData);
    };
    const startEditingHandler = () => {
        setIsEditing(true)
    }

    const stopEditingHandler = () => {
        setIsEditing(false)
    }

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={startEditingHandler}>Adicionar despesa</button>}
            {isEditing && <ExpenseForm 
            onSaveExpenseData={saveExpenseDataHandler} 
            onCancel={stopEditingHandler} />}
        </div>
    );
};

export default newExpense;