import React from 'react'
import { useRef } from 'react'

const Additems = ({newItem,setNewItem,handleSumbit}) => {
  const autofocuses=useRef('')
  return (
    <form className='addForm' onSubmit={handleSumbit}>
        <label htmlFor="additem">Add Item</label>
        <input ref={autofocuses} id='addItem' type='text' placeholder='Add Ur Wish Activities...' required value={newItem} onChange={(e)=>setNewItem(e.target.value)} />
        <button type='sumbit' aria-label='Add Items'onClick={()=>autofocuses.current.focus()}>Add</button>
    </form>
  )
}

export default Additems