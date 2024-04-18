"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ComponentProps, ReactNode } from "react"

export function Sidebar({children}: {children: ReactNode}) {
   return (
   <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
   <div className="h-full px-3 py-4 overflow-y-auto bg-gray-300 dark:bg-gray-800">
      <ul className="space-y-2 font-medium">
         <li>
               <span className="ms-3 flex flex-col">{children}</span>
               </li> 
               </ul>
               </div>
               </aside>)
}

export function SideLink(props: Omit<ComponentProps<typeof Link>, "className">) {
   const pathname = usePathname()
   return <Link {...props } className={cn("p-4 rounded-full hover:bg-secondary hover:text-secondary-foreground focus-visible:hover:bg-secondary focus-visible:hover:text-secondary-foreground",
   pathname=== props.href && "bg-background text-foreground")} />
}

