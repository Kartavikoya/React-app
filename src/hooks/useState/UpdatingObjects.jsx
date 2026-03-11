import { useState } from "react";

function Obj(){
//   const [serach, setSearch] = useState();

    const initalState = {
        name:'',
        email:'',
        password:'',
        mobile:'',
        altNumber:''


    }
    const [form, setForm] = useState(initalState);

//   const OnSearchChange = (event) =>{
//     setSearch(event.target.value)
//   }
    const onNameChange = (e) =>{
        setForm({ ... form, name: e.target.value})
    }
    const onEmailChange = (e) =>{
        setForm({ ... form, email: e.target.value})
    }
    // console.log(form);
    

  return (
    <>
    <div>
        <label htmlFor="">Name</label>
        <input  onChange= {onNameChange}placeholder="Please enter your name" />
    </div>
     <div>
        <label htmlFor="">Email</label>
        <input  onChange={onEmailChange} placeholder="Please enter your email" />
    </div>
     <div>
        <label htmlFor="">Password</label>
        <input  placeholder="Please enter your password" />
    </div>
     <div>
        <label htmlFor="">Mobile Number</label>
        <input  placeholder="Please enter your mobile number" />
    </div>
     <div>
        <label htmlFor="">Alternate Number</label>
        <input  placeholder="Please enter your alternate number" />
    </div>

    </>
  );
}

export default Obj;