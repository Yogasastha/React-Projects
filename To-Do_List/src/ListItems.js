import React from 'react'

const ListItems = ({ item, handleChange, changeDelete }) => {
    return (
        <li className="list-elements">
            <label
                onDoubleClick={() => handleChange(item.id)}
                style={item.checked ? { textDecoration: 'line-through' } : null}
            >
                {item.activity}
            </label>
            <input type="checkbox" checked={item.checked} onChange={() => handleChange(item.id)} />
            <button onClick={() => changeDelete(item.id)}>Delete</button>
        </li>
    )
}

export default ListItems