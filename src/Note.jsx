import React from 'react'

export default function Note(props) {
    function Handle(){
        props.onDelete(props.id)
      }
  return (
    <div className='note'>
        <hr />
        <p><b>Name</b> : {props.name}</p>
        <p><b>Email</b> : {props.email}</p>
        <p><b>Phone Number </b>:{props.ph}</p>
        <p><b>Address</b> : {props.address}</p>
        <button onClick={Handle}>DELETE</button>
    </div>
  )
}
