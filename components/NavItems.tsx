'use client'
import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const NavItems = () => {
  const currentPath = usePathname()
  return (
    <ul className="flex w-full flex-col items-start gap-5">
      {navLinks.map((item) => {
        const isActive = currentPath === item.route
        return (
          <li key={item.route}
          className={`${isActive && 'text-primary-500'} flex-center `}>

            <Link href={item.route}>{item.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};
