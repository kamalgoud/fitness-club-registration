import React, { useState } from 'react'
import Add from './Add';
import Note from './Note';

export default function App() {
  const [items, setItems] = useState([])

  function addItem(inputText) {
    setItems(prev => {
      return [...prev,inputText]
    })
  }

  function deleteFun(id){
    setItems(prev => {
      return prev.filter((pitem,index)=>{
        return index!==id;
      })
    })
  }
  
  return (
    <div className='ipbox'>
      <h1>Fitness Club Registration</h1>
      <center>
         <Add onAdd={addItem}/>
         
         {items.map((note,index) => {
          return <Note key={index} id={index} onDelete={deleteFun}  name={note.name} email={note.email} ph={note.ph} address={note.address}/>
        })}

       
      </center>
    </div>
  )
}
