import React from 'react'
import ListItems from './ListItems'

const Condition = ({ items, handleChange, changeDelete }) => {
    return (
        <ol className="listorder">
            {items.map(item => (<ListItems item={item}  key={item.id} changeDelete={changeDelete} handleChange={handleChange}/>))}
        </ol>
    )
}

export default Condition