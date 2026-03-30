import React from 'react'

function Button() {
  return (
    <button 
    className='bg-black text-white p-2 rounded-md text-sm'
    onClick={() => alert("hello")}
    >Button</button>
  )
}

export default Button