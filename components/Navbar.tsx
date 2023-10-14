"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <nav className="flex items-center py-5 px-4 justify-between max-w-[1200px] mx-auto relative">
        <Link href="/" className="text-xl text-black">
          <Image src="/logo.svg" alt="Nandeesh Pandey" width={30} height={30} />
        </Link>

        <ul
          className={`flex flex-col gap-4 items-center bg-white min-h-[150px] max-w-[300px] w-full justify-end absolute right-0 px-2 py-6 rounded-md z-10 ${
            navOpen ? "top-[0px]" : "top-[-800px]"
          } transition shadow-md lg:items-center lg:flex-row lg:relative lg:top-0 lg:right-0 lg:max-w-[500px] lg:min-h-0 lg:shadow-none lg:py-0 lg:px-0`}
        >
          {/* <li className="w-full">
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-slate-200 py-2 px-3 bg-white rounded-full w-full text-black outline-none">
                Programming Languages
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full max-w-[300px] max-h-[400px] overflow-auto">
                <DropdownMenuItem>
                  <Link href="/">Assembly / Perl</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">C / C++ / C#</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Java</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">HTML / CSS / Javascript / PHP</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Android Development / Mobile Apps</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Python / R / SQL</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Matlab</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Prolog / GoLang / Haskell / Scala</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Ruby / Ruby on Rails</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Fortran / OCaml</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">MySQL / NO-SQL</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Dafny</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/">Docker Projects</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li> */}

          <li className="w-full lg:w-auto">
            <Link
              href="/contact"
              className="py-2 px-3 block text-center bg-white rounded-full border border-primary text-primary transition hover:bg-primary hover:text-white"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        <div className="lg:hidden relative z-20 flex items-center justify-center">
          <button onClick={() => setNavOpen((prev) => !prev)}>
            <Image
              src="/menu-icon.svg"
              width={30}
              height={30}
              alt="Menu"
              className="block"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
