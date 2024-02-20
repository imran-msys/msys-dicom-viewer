import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navData } from "@/data/navData";
import { Activity, MenuIcon } from "lucide-react";
import Link from "next/link";

export function SidebarMobile() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="inline-flex md:hidden">
          <MenuIcon className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 mb-4">
            <Activity size="32" />
            <span className="font-bold text-2xl bg-primary-foreground">MDV</span>
          </SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav>
          {navData.map((nav) => (
            <li key={nav.path} className="list-none">
              <Link href={nav.path} className="flex items-center gap-2 py-2 mb-2">
                <span>{nav.icon}</span>
                <span>{nav.text}</span>
              </Link>
            </li>
          ))}
        </nav>
        {/* <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter> */}
      </SheetContent>
    </Sheet>
  );
}
