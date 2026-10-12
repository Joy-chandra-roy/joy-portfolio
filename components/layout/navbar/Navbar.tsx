"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import {
  House,
  User,
  Code,
  Briefcase,
  Folder,
  Mail,
  Download,
  Menu,
} from "lucide-react";

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const navLinks = [
    { name: "Home", href: "/", icon: House },
    { name: "About", href: "/about", icon: User },
    { name: "Skills", href: "/skills", icon: Code },
    { name: "Services", href: "/services", icon: Briefcase },
    { name: "Projects", href: "/projects", icon: Folder },
    { name: "Contact", href: "/contact", icon: Mail },
  ];

  return (
    <header className=" bg-white border-b shadow-sm sticky top-0 z-50  ">
      <div className="container mx-auto flex h-20 justify-between items-center px-5">
        <Link href="/" className="font-bold text-4xl">
          Joy{" "}
        </Link>
        <nav className="md:flex items-center gap-8 text-xl hidden ">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={item.href}
                className={
                  pathname === item.href
                    ? "flex items-center gap-2 text-green-500 border px-2 py-1 rounded-2xl shadow-xl"
                    : "flex items-center gap-2 transition-colors hover:text-green-500"
                }
              >
                <Icon size={18} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <Button>
            <Download size={18} />
            Resume
          </Button>
        </div>

        {/* mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu size={22} />
          </SheetTrigger>

          <SheetContent className="pl-8  pt-3">
            <SheetTitle className="text-4xl font-bold">Joy </SheetTitle>
          {
            navLinks.map((item)=>{
               const Icon = item.icon;
              return(
                <Link href={item.href} key={item.href} className="flex items-center gap-3 py-2 text-lg transition-colors hover:text-green-500">
                  <Icon size={18} />
                  {item.name}
                  </Link>
              )
            })
          }
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;
