"use client"
import { addEmployee } from '@/app/_actions/employees'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React from 'react'
import { useFormState, useFormStatus } from 'react-dom'

export default function NewEmp() {
  const [error, action] = useFormState(addEmployee, {})
  return (
    <div className="flex flex-col items-center">
        <span className="mt-24 ps-4 text-4xl text-slate-600">Add Employees</span>
         <form action={action} className="ps-2 border rounded-lg pe-2 pb-2 border-zinc-600 border-r-4 border-l-4 border-t-4 border-b-4">
            <div className="space-y-2 w-96">
                <Label htmlFor="name">Employee Name</Label>
                <Input type="text" id="name" name="name" required />
                {error.name && <div className='text-destructive'>{error.name}</div>}          
            </div>
            <div className="space-y-2 w-96">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" required />
            </div>
            <div className="space-y-2 w-96 pb-2">
                <Label htmlFor="salary">Salary</Label>
                <Input 
                type="number" 
                id="salary" 
                name="salary" 
                required 
                />
                {error.salary && <div className='text-destructive'>{error.salary}</div>} 
            </div>
            <SubmitButton />
        </form>
    </div>
  )
}
function SubmitButton() {
    const { pending } = useFormStatus()
    return <Button type="submit" disabled={pending}>{pending ? "Adding" : "Add Employee" }</Button>
  }

