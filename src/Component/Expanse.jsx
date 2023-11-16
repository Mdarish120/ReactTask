import React from 'react'

const Expanse = ({title,price,DeleteExpanse,id, updateExpanse}) => {

 


  return (
    <>
    {
      title !=="" &&
      <div style={{display:"flex" ,gap:10 ,alignItems:"center",justifyContent:"center",marginTop:"2%" }}>
     
      <h2>{title}</h2>
    <h2>{price}</h2>
    <button onClick={()=>DeleteExpanse(id)}>Delete</button>
    <button onClick={()=>updateExpanse(id)}>Add</button>
    </div>
    }
    
 
  
   
   

    </>
  )
}

export default Expanse