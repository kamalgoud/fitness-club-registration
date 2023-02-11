import React, { useState } from 'react'

export default function Add(props) {
    const [note,setNote] = useState({
        name:"",
        email:"",
        ph:"",
        address:""
    });
    function fun1(event){
        const newValue = event.target.value;
        const name=event.target.name;
        setNote(prev => {
            return {
                ...prev,
                [name]:newValue
            }
        })
    }
    function add(event){
        props.onAdd(note);
        setNote({
            name:"",
            email:"",
            ph:"",
            address:""
        })
        event.preventDefault();
    }
  return (
    <div className='ip'>
        <input className="ip1" name="name" onChange={fun1} value={note.name} placeholder="Name"/> <br />
        <input className="ip1" name="email" onChange={fun1} value={note.email} placeholder="Email"/> <br />
        <input className="ip1" name="ph" onChange={fun1} value={note.ph} placeholder="Phone Number"/> <br />
        <input className="ip1" name="address" onChange={fun1} value={note.address} placeholder="Address"/> <br />
        <button  onClick={add}>Add a member</button>
    </div>
  )
}
