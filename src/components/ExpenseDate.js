import React from 'react';
import './ExpenseDate.css';

function ExpenseDate(props) {

    const day = props.date.toLocaleString('pt-br', { day: '2-digit' });
    const month = props.date.toLocaleString('pt-br', { month: 'long' });
    const year = props.date.getFullYear();

    return (
        <div className="expense-date">
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__month">{"de "+month}</div>
            <div className="expense-date__year">{"de "+year}</div>
        </div>

    );

}

export default ExpenseDate;