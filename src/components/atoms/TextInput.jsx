import React from 'react'

const TextInput = ({ type,name, placeholder,...rest }) => {
  return (
    <div className="mb-3 xl:w-80 mr-2">
    <label
      htmlFor={`${name}`}
      className="form-label inline-block mb-2 text-gray-700 text-xl"
      >{name}</label>
    <input
    type={`${type}`}
      className="
        form-control
        block
        w-full
        px-4
        py-2
        text-xl
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border-default border-solid border-grey-500
        rounded-default
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-indigo-600 focus:outline-none
      "
      id={`${name}`}
      placeholder={`${placeholder}`}
        {...rest}
    />
  </div>
  )
}

export default TextInput