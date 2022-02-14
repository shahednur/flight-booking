import React from 'react'
import SelectOption from '../atoms/SelectOption'
import TextInput from '../atoms/TextInput'
import Button from '../atoms/Button'

const Form = () => {
  return (
    <div className="container mx-auto w-3/5 mt-20 justify-center">
    <div className="flex flex-row">
      <div className="p-6 shadow-lg rounded-lg bg-white text-gray-700">
          <div className="flex flex-row justify-center">
            <h2 className="font-semibold text-3xl mb-5">Go Beyond Sky!</h2>
          </div>
          <div className="flex flex-row">
            <SelectOption />
            <SelectOption />
            <SelectOption />
          </div>
          <hr className="my-6 border-grey-300" />
          <div className="flex flex-row">
            <TextInput type='date' placeholder='Departure Date' name='Departure Date' />
            <TextInput type='date' placeholder='Return Date' name='Return Date' />
          </div>
          <div className="flex flex-row justify-center">
                <Button color='indigo'>Search</Button>
          </div>
      </div>
    </div>
    </div>
  )
}

export default Form