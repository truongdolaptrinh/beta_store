"use client";

import * as React from "react";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";

import { cn } from "@/lib/utils";
// import { Icons } from "@/components/icons"
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import AuthButton from "./AuthButton/AuthButton";

import { Playfair_Display } from "@next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"], // optional, you can customize it
  weight: "400", // optional, set font weight if needed
});

export function NavigationMenuDemo() {
  const [menuOpen, setMenuOpen] = React.useState(false); // State to track the menu's open/close status

  function openMenu() {
    setMenuOpen((prevState) => !prevState); // Toggle the menu state
  }

  return (
    <div className="flex justify-around p-5 items-center sm:overflow-hidden relative z-10">
      <div className="flex-1 flex items-center justify-center">
        <Link href="/" className="text-5xl">
          𝕿𝕷𝖄 𝕾𝖙𝖔𝖗𝖊
        </Link>
      </div>
      <div className="sm:flex hidden flex-none">
        <div className="flex items-center space-x-8">
          <input
            type="text"
            placeholder="Search..."
            className="border border-gray-300 rounded-full px-4 py-2 w-[40rem] text-lg focus:outline-none focus:border-black"
          />
          <div className={playfair.className}>
            <ul className="flex items-center space-x-8">
              <li className="text-xl">
                <Link href={"/aboutus"}>About</Link>
              </li>
              <li className="text-xl">
                <Link href={"/news"}>News</Link>
              </li>
              <li className="text-xl">
                <Link href={"/contactus"}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className={`flex items-center justify-center flex-1 ${playfair.className}`}
      >
        <span
          className="rounded-full border border-black px-5 py-2 text-xl mr-3 hover:bg-black hover:text-white transition duration-150 ease-in-out
          hidden sm:block
        "
        >
          Login
        </span>
        <span className="rounded-full border border-black px-5 py-2 text-xl bg-black text-white hidden sm:block">
          SignUp
        </span>
      </div>
      {/* Mobile Menu */}{" "}
      <div>
        <IoMdMenu
          className="text-3xl sm:hidden cursor-pointer"
          onClick={openMenu}
        />
      </div>
      {/* Conditionally render the mobile menu */}
      {menuOpen && (
        <div
          className={`absolute left-0 right-0 top-[7rem] bg-white rounded-lg shadow-lg p-5 transform transition-all duration-300 ease-in-out z-10 ${
            menuOpen
              ? "opacity-100 scale-100 visible"
              : "opacity-0 scale-95 invisible"
          }`}
        >
          <ul className="space-y-4 text-lg text-left">
            <li>
              <Link
                href="/shoes"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Shoes
              </Link>
            </li>
            <li>
              <Link
                href="/clothes"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Clothes
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Contact
              </Link>
            </li>
          </ul>
          <AuthButton />
        </div>
      )}
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
