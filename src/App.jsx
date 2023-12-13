import React ,{useState}from 'react';
import Expanse from './Component/Expanse';
import Input from './Component/Input';

import { v4 as uuidv4 } from 'uuid';
import Form from './Component/Form';

const App = () => {

  const [expenses, setExpenses] = useState([{title:"",price:null,id:uuidv4()}]);
  const [editingExpanse,setEditingExpanse]=useState({});
  const  [title,setTitle]=useState("");
  const [price,setPrice]=useState(0);
   

  console.log(expenses)

  const DeleteExpanse = (id) => {
    // Create a new array excluding the expense with the specified id
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    // Update the state with the new array
    setExpenses(updatedExpenses);
  };


  const updateExpanse=(id)=>{
      
    const expanseToEdit=expenses.find((expense)=>expense.id===id);

    setEditingExpanse(expanseToEdit);
    setTitle(editingExpanse.title);
    setPrice(editingExpanse.price);
    
    
  }




  return (
     <>
     

    

      
    <Input  
     setExpenses={setExpenses} 
     expenses={expenses}    
       setEditingExpanse={setEditingExpanse}
          editingExpanse={editingExpanse}
           title={title}
            price={price}
            setTitle={setTitle}
            setPrice={setPrice}

 />
    
      {  expenses.length>0&&expenses.map(({title,price,id})=>(
          <Expanse 
          
          title={title}
          price={price}
          id={id}
          DeleteExpanse={DeleteExpanse}
          updateExpanse={updateExpanse}
       
          />
        ))
      }


      
    

     </>
  )
}

export default App