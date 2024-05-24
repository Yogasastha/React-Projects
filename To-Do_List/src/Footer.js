import React from 'react'

const Footer = ({items}) => {
  return (
    <footer>
      Today {(items.length ==1?"Activity":"Activities")} are:  {items.length}
    </footer>
  )
}

export default Footer