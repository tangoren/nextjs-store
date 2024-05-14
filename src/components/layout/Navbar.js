"use client";

import { useState, useEffect } from "react";
import { Search, UserRound, ShoppingBag, Menu } from "lucide-react";
import classNames from "classnames";

import DevLink from "../DevLink";

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
        "*:text-slate-600 *:text-sm *:font-medium *:leading-10 cursor-no-drop",
        {
          "flex-col *:px-0 flex": isParentDrawer,
          "*:px-3 lg:flex hidden": !isParentDrawer,
        },
      )}
    >
      <span>Men&lsquo;s Clothing</span>
      <span>Women&lsquo;s Clothing</span>
      <span>Jewelery</span>
      <span>Electronics</span>
      <span>All Products</span>
    </div>
  );
};

export default function Navbar() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="sticky top-0 z-10 py-6 text-center border-b bg-white/85 border-slate-200 backdrop-blur-xl">
      <div className="container flex gap-4">
        <div className="rounded-full size-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shrink-0"></div>

        <div className="flex justify-between w-full gap-12">
          <MenuItems />

          <div className="flex gap-3 ml-auto">
            <Button variant="link" size="icon" className="cursor-no-drop">
              <Search />
            </Button>
            <Button variant="link" size="icon" className="cursor-no-drop">
              <UserRound />
            </Button>
            <Button variant="link" className="p-0 pl-2 cursor-no-drop" asChild>
              <div className="flex gap-2">
                <ShoppingBag className="shrink-0" />
                <Badge className="select-none">99</Badge>
              </div>
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

                    <div className="flex gap-2 mt-auto *:w-full">
                      <DevLink type="github" />
                      <DevLink type="linkedin" />
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
