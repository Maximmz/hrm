import { Button } from "@/components/ui/button";
import { Employees, columns } from "./_components/Columns";
import { DataTable } from "./_components/DataTable";
import db from "@/db/db";


async function getData(): Promise<Employees[]> {
  const employees = await db.employee.findMany();

  // Format the products data into the desired table format
  const formattedEmployees = employees.map(employee => ({
      id: employee.id || 0,
      name: employee.name || "N/A", 
      email: employee.email || "",
      salary: employee.salary || 0, 
  }));
  
  return formattedEmployees;
}


export default async function Home() {
  const currentDate = new Date();
  const data = await getData()
  return (
    <div>
   <div className="flex justify-center h-16 rounded-xl items-center mt-4 max-w-full bg-gradient-to-r from-pink-500 to-violet-500">
    <p className="text-white">{currentDate.toLocaleDateString()}</p>
  
   </div>
   <div className="max-w-full flex justify-end pe-24 pt-4">
   <Button className="">Add Employee</Button>
  
   
   </div>
   <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
   </div>
  );
}
