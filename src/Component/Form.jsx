import React ,{useState} from 'react'

const Form = () => {
    const [form,setForm]=useState({
        name:"",
        password:null,
        email:""
    });


    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(form);
    }

  return (
    <div>

      <form onSubmit={handleSubmit}>
        <input  placeholder='Name' type="text" value={form.name} onChange={(e)=>setForm({...form,name:e.target.value})}/>
        <input  placeholder='Email'  type="email" value={form.email} onChange={(e)=>setForm({...form,email:e.target.value})}/>
        <input  placeholder='Name'  type='password' value={form.password} onChange={(e)=>setForm({...form,password:e.target.value})}/>
        <button>Submit..</button>
      </form>
    </div>
  )
}

export default Form