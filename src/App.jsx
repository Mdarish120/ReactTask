import React ,{useState}from 'react';
import Expanse from './Component/Expanse';

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, title: "Movie", price: 200 },
    { id: 2, title: "Transportation", price: 500 },
    { id: 3, title: "Travel", price: 200 },
    { id: 4, title: "Food", price: 700 },
  ]);

  const DeleteExpanse = (id) => {
    // Create a new array excluding the expense with the specified id
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    // Update the state with the new array
    setExpenses(updatedExpenses);
  };


  return (
     <>
      {
       expenses.map(({title,price,id})=>(
          <Expanse 
          
          title={title}
          price={price}
          id={id}
          DeleteExpanse={DeleteExpanse}
          />
        ))
      }

     </>
  )
}

export default App