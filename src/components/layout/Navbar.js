"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, UserRound, ShoppingBag, Menu } from "lucide-react";
import classNames from "classnames";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const MenuItems = ({ isParentDrawer }) => {
  return (
    <div
      className={classNames(
        "*:text-slate-600 *:px-3 *:text-sm *:font-medium *:leading-10 ",
        {
          "flex-col *:px-0 flex": isParentDrawer,
          "lg:flex hidden": !isParentDrawer,
        },
      )}
    >
      <Link href="/products">Men&lsquo;s Clothing</Link>
      <Link href="/products">Women&lsquo;s Clothing</Link>
      <Link href="/products">Jewelery</Link>
      <Link href="/products">Electronics</Link>
      <Link href="/products">All Products</Link>
    </div>
  );
};

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // FIXME: Update this with zustand
    if (false) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="sticky top-0 z-10 py-6 text-center border-b bg-white/85 border-slate-200 backdrop-blur-xl">
      <div className="container flex gap-4">
        <Link href="/">
          <div className="rounded-full size-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shrink-0"></div>
        </Link>

        <div className="flex justify-between w-full gap-12">
          <MenuItems />

          <div className="flex gap-3 ml-auto">
            <Button variant="link" size="icon">
              <Search />
            </Button>
            <Button
              variant="link"
              size="icon"
              className={classNames(
                "relative before:content-[''] before:bg-red-600 before:size-2 before:rounded-full before:absolute before:top-1 before:right-1 before:transition-all",
                {
                  "before:bg-green-600": isLoggedIn,
                },
              )}
            >
              <UserRound />
            </Button>
            <Button variant="link" className="p-0 pl-2" asChild>
              <Link href="/" className="flex gap-2">
                <ShoppingBag className="shrink-0" />
                <Badge className="select-none">99</Badge>
              </Link>
            </Button>

            {isClient && (
              <Sheet>
                <SheetTrigger className="inline-flex items-center justify-center lg:hidden size-10">
                  <Menu />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader className="text-left">
                    <SheetTitle>Menu</SheetTitle>
                  </SheetHeader>

                  <SheetDescription className="flex flex-col mt-2 h-[calc(100%-48px)]">
                    <MenuItems isParentDrawer />

                    <div class="mt-auto text-xs text-slate-500">
                      &copy; {new Date().getFullYear()} Next.js Store. All
                      rights reserved.
                    </div>
                  </SheetDescription>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
