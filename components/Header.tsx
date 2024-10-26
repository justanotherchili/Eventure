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
      <div className="wrapper flex items-center justify-between p-4">
        
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/assets/images/logo.svg"
            width={150}
            height={150}
            alt="Eventure Logo"
          />
        </Link>

        {/* Flex container for Search and Category Filter */}
        <div className="flex-grow flex items-center mx-10 space-x-4">
          <div className="flex-1 max-w-2xl"> {/* Set max width for search */}
            <Search />
          </div>
          <div className="flex-none w-1/3"> {/* Set width for category filter */}
            <CategoryFilter />
          </div>
        </div>

        {/* User Authentication Section */}
        <div className="flex items-center gap-3">
          <SignedOut>
            <Button asChild className="rounded-full">
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
