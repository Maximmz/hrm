"use server"


import db from "@/db/db"
import { redirect } from "next/navigation"
import { z } from "zod"

//Schema for adding products
const addSchema = z.object({
    name: z.string().min(1).max(25),
    email: z.string().min(1).max(150),
    salary: z.coerce.number().int().min(1),
})

export async function addEmployee(prevState: unknown, formData: FormData) {
    const result = addSchema.safeParse(Object.fromEntries(formData.entries()))
    if( result.success === false) {
        return result.error.formErrors.fieldErrors
    }

    const data = result.data;
    await db.employee.create({data: {
        name: data.name,
        email: data.email,
        salary: data.salary,
    }})
redirect("/")
}