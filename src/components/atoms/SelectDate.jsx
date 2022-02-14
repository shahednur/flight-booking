import React from 'react'
import DatePicker from 'react-datepicker';

const SelectDate = () => {
  return (
    <DatePicker
        name="startDate"
        dateFormat="MM/dd/yyyy"
    />
  )
}

export default SelectDate