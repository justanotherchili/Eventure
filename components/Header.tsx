import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { NavMenu } from "./NavMenu";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-100">
          <Image
            src="/assets/images/logo.svg"
            width={150}
            height={150}
            alt="Eventure Logo"
          />
        </Link>
        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <Button asChild className="rounded-full">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <NavMenu/>
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
