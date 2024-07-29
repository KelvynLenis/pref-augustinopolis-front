import React from 'react'
import { Label } from './ui/label'
import { Input } from './ui/input'

function DatePickerRange() {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2 w-full items-center justify-center">
        <Label className='mr-1'>De</Label>
        <Input type='date' />
      </div>
      <div className="flex gap-2 w-full items-center justify-center">
        <Label>Até</Label>
        <Input type="date" />
      </div>
    </div>
  )
}

export default DatePickerRange