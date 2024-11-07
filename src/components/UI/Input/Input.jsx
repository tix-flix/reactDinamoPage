import React from 'react'

function Input({place, onChange}) {
  return (
    <input type="text" placeholder={place} onChange={onChange}/>
  )
}

export default Input