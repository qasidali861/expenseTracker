import { useState } from 'react';
import './App.css';
import AddNewTransaction from './components/AddNewTransaction';
import Balance from './components/Balanace';
import Header from './components/Header';
import History from './components/History';
import IncomeExpense from './components/IncomeExpense';

function App() {
  const dummy_expense = [
    { msg: 'Cash', value: 400 },
    { msg: 'Pay bills', value: 500 },
    { msg: 'Rent', value: 900}
    
]

const [data, setData] = useState(dummy_expense);
const getData = (mssg, data) =>{
  // console.log(mssg, data)
  setData((prvTodos) => {
    return [...prvTodos, {msg: mssg, value : data}]
  });
}

  return (
    <div  className="container" >
        <Header />
        <Balance />
        <IncomeExpense data = {data} />
        <History expense = {data} />
        <AddNewTransaction getData = {getData} />
    </div>
  );
}

export default App;
