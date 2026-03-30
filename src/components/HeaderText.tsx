import React from 'react'

interface HeaderTextProps{
    text? : string;
}

function HeaderText({text} : HeaderTextProps) {
  return (
    <div>HeaderText : {text} </div>
  )
}

export default HeaderText