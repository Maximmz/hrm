import { Button } from "@/components/ui/button";


export default function Home() {
  const currentDate = new Date();
  return (
    <div>
   <div className="flex justify-center h-16 rounded-xl items-center mt-4 max-w-full bg-gradient-to-r from-pink-500 to-violet-500">
    <p className="text-white">{currentDate.toLocaleDateString()}</p>
  
   </div>
   <div className="max-w-full flex justify-end pe-24 pt-4">
   <Button className="">Add Employee</Button>
   
   </div>
   </div>
  );
}
