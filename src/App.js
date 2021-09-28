import React from 'react';
import Expenses from './components/Expenses/Expenses';


function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Papel Higiênico',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'Televisão Nova',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Seguro de Automóvel',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'Mesa Nova (Madeira)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Lets get started!</h2>
      <Expenses expenses={expenses}/>
      </div>
      
  );
}

export default App;
