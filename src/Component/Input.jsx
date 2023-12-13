import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Input = ({setExpenses,expenses,setEditingExpanse,editingExpanse,title,price,setPrice,setTitle}) => {

const [isValid,setIsValid]=useState(false);

    const handleAddExpense=()=>{

      if(Object.keys(editingExpanse).length>0){

        setExpenses((prevExpanse)=>
         prevExpanse.map((expense)=>
         expense.id==editingExpanse.id?{...expense,title,price}:expense
         )
        )

        setEditingExpanse({});
      }else{

        if(title ="" || price==0){
          setIsValid(true);
          return;
        }else{
          setIsValid(false);
          setExpenses([...expenses,{title,price,id:uuidv4()}]);
        }
  
      }
    
       setTitle("");
       setPrice("");

       
    }






 
  return (
    <div style={{display:"flex",justifyContent:"center" , flexDirection:"column",alignItems:"center"}}>
       <h2>Add Expanse</h2><br/>
       <div style={{display:"flex",gap:10}}>
       <input placeholder='Expanse' value={ title}   onChange={(e)=>setTitle(e.target.value)}/>
       <input placeholder='Price'  value={price}    onChange={(e)=>setPrice(e.target.value)} />
      <button onClick={handleAddExpense}>Add</button>
    
       </div>
       {isValid &&  <h2 style={{color:"red"}}>Pls fill the form!!</h2>}
    </div>
     
  )
}

export default Input