import React from "react";
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {


    const selectedFilter = (event) => {
        props.onSelectFilter(event.target.value);
    }

    
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filtro por ano</label>

                <select value={props.selected} onChange={selectedFilter}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;