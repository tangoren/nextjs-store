"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, UserRound, ShoppingBag } from "lucide-react";
import classNames from "classnames";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // FIXME: Update this with zustand
    if (1 > 2) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="sticky top-0 py-6 text-center border-b bg-white/85 border-slate-200 backdrop-blur-xl">
      <div className="container flex gap-4">
        <div className="rounded-full size-10 bg-gradient-to-r from-violet-500 to-fuchsia-500 shrink-0"></div>

        <div className="flex justify-between flex-1 gap-12">
          <div className="flex *:hover:no-underline *:font-semibold *:text-slate-600">
            <Button variant="link" asChild>
              <Link href="/">Men&lsquo;s Clothing</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">Women&lsquo;s Clothing</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">Jewelery</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">Electronics</Link>
            </Button>
            <Button variant="link" asChild>
              <Link href="/">All Products</Link>
            </Button>
          </div>

          <div className="flex gap-3">
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
                <ShoppingBag className="shrink-0" />{" "}
                <Badge className="select-none">99</Badge>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
