'use client';


import { navData } from "@/data/navData";
import Link from "next/link";
import { Sidebar as SidebarIcon } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  function handleOpen() {
    setSidebarOpen((prev) => !prev)
  }
  return (
    <div className={`hidden md:block transition-all duration-600 ${sidebarOpen ? 'w-60' : 'w-16'} bg-primary-foreground justify-center h-screen p-4`}>
      <div className="h-16 flex items-center  mb-4 cursor-pointer" onClick={handleOpen}>
        <SidebarIcon />
      </div>
      <nav className={`flex flex-col  ${sidebarOpen? "items-start" :'items-center '} justify-center`}>
        {navData.map((nav) => (
          <li key={nav.path} className="list-none">
            <Link href={nav.path} className="flex items-center gap-2 py-2 mb-2">
              <span>{nav.icon}</span>
              <span className={`${sidebarOpen ? 'inline-block' : 'hidden opacity-0'}`}>{nav.text}</span>
            </Link>
          </li>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
