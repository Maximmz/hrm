"use client"
 
import { ColumnDef } from "@tanstack/react-table"
 
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employees = {
  id: number
  name: string
  email: string
  salary: number
}
 
export const columns: ColumnDef<Employees>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "salary",
    header: "Salary",
  },
]