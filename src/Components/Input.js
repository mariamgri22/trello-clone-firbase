import React from 'react'

export default function Input({value,onChange,name}) {
  return (
    <div>
         <label htmlFor={name}>{name}</label>
            <input value={value} onChange={onChange} id={name}></input>
    </div>
  )
}
