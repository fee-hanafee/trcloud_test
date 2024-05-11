import React from 'react'

export default function Input({name,onChange,value,type}) {
  return (
    <input className="border-gray-300 focus:border-blue-500 focus:ring-blue-300 w-full focus:outline-none px-2 py-1.5 border rounded-md  focus:ring-1"
    name={name}
    onChange={onChange}
    value={value}
    type={type}
    />
  )
}
