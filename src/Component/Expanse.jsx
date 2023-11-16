import React from 'react'

const Expanse = ({title,price,DeleteExpanse,id, updateExpanse}) => {

 


  return (
    <>
    {
      title !=="" &&(
       <div  
       
       style={{
        display: "inline-block",
        border: "1px solid #ddd", // Add your border style here
        borderRadius: "8px", // Optional: Add border-radius for rounded corners
        margin: "10px", // Optional: Add margin for spacing
        padding: "10px", // Optional: Add padding for spacing inside the border
      }}>

 
        <div style={{display:"flex" ,gap:10 ,alignItems:"center",justifyContent:"center",marginTop:"2%" }}>
     
        <h2>{title}</h2>
      <h2>{price}</h2>
      <button onClick={()=>DeleteExpanse(id)}>Delete</button>
      <button onClick={()=>updateExpanse(id)}>Add</button>
      </div>
      </div>

      )
     
    }
    
 
  
   
   

    </>
  )
}

export default Expanse