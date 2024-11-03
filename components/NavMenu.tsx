import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator"
import { NavItems } from "./NavItems";


export const NavMenu = () => {
  return (
    <nav>
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image 
          src = "/assets/icons/menu.svg"
          width={32}
          height={32}
          className="cursor-pointer"
          alt="Menu button"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white">
          <Image 
            src="/assets/images/logo.svg"
            width={128}
            height={38}
            alt="Logo"
          />
          <Separator className="border border-black-50"/>
          <NavItems/>

        </SheetContent>
      </Sheet>
    </nav>
  );
};
