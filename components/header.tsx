"use client";

import { useTheme } from "next-themes";
import { MenuIcon, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { SidebarMobile } from "./sidebar-mobile";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-primary-foreground mb-10">
      <header className=" max-w-7xl mx-auto py-3 px-4 md:px-5 flex justify-between items-center">
        <div className="flex items-center justify-center gap-4">
          {/* <Button
            variant="ghost"
            size="icon"
            className="inline-flex md:hidden"
          >
            <MenuIcon className="h-5 w-5" />
          </Button> */}
          <SidebarMobile />
          <h1 className="text-primary text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
            Msys Dicom Viewer
          </h1>
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
          <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:scale-100 dark:rotate-0  " />
        </Button>
      </header>
    </div>
  );
};

export default Header;
