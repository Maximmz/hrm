"use client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useState } from "react"

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
    header: () => <div>Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("salary"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount)
 
      return <div className="font-medium">{formatted}</div>
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original
      const [menuOpen, setMenuOpen] = useState(false);
 
      return (
        <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel className="flex flex-col items-center">
            <div>
              <div className="flex justify-center">
                Mark Employee
                </div>
                <div className="flex">
                <div>
                <Button
              className="h-8 w-12 text-sm"
              variant="ghost"
            
            >
              Present
            </Button>
                </div>
                <div>
                <Button
              className="h-8 w-12 text-sm"
              variant="ghost"
            
            >
              Missing
            </Button>
                </div>
                </div>
            </div>
           <div>
           
           </div>
           <Button variant="destructive">
            Delete
            </Button>
          </DropdownMenuLabel>

          <DropdownMenuItem className="flex justify-center items-center">
            <div className="border bg-slate-200 w-32 h-10 flex justify-center items-center rounded-md">
              Employee is Present
            </div>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      )
    },
  },
]