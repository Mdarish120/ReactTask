import React from 'react';
import Expanse from './Component/Expanse';

const App = () => {

  let expanse=[
    {title:"Movie",price:200},
    {title:"Transportation",price:500},
    {title:"Travel",price:200},
    {title:"Food",price:700},
  ]
  return (
     <>
      {
        expanse.map(({title,price})=>(
          <Expanse 
          
          title={title}
          price={price}
          />
        ))
      }

     </>
  )
}

export default App