import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "./NavMenu";
import Search from "./Search";
import CategoryFilter from "./CategoryFilter";

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b bg-white z-10">
      <div className="wrapper flex items-center justify-between p-4 max-w-screen-xl mx-auto">

        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/logo.svg"
            width={120}
            height={120}
            alt="Eventure Logo"
            className="w-32 md:w-40"
          />
        </Link>

        <div className="flex-grow flex items-center mx-4 md:mx-10 space-x-2 md:space-x-4">
          <div className="flex-1 max-w-xs md:max-w-2xl">
            <Search />
          </div>
          <div className="hidden md:block flex-none w-1/3">
            <CategoryFilter />
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <SignedOut>
            <Button asChild className="rounded-full px-3 py-1 text-sm md:text-base">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <NavMenu />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
