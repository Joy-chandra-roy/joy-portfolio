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
} from "lucide-react";
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
    <header className=" bg-white border-b shadow-sm ">
      <div className="container mx-auto flex h-20 justify-between items-center px-5">
        <Link href="/" className="font-bold text-4xl">
          Joy{" "}
        </Link>
        <nav className="flex items-center gap-8 text-xl ">
          {navLinks.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                href={item.href}
                key={index}
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
      </div>
    </header>
  );
};

export default Navbar;
