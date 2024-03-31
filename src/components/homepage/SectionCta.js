import Link from "next/link";
import { BadgePercent } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function SectionCta() {
  return (
    <div className="select-none rounded-2xl bg-gradient-to-b from-indigo-500 to-indigo-600 py-24 relative before:bg-[url('/img/pattern-cta.svg')] before:size-full before:bg-contain before:bg-center before:bg-no-repeat before:absolute before:top-0 before:opacity-30 before:pointer-events-none">
      <div className="relative flex flex-col items-center justify-center">
        <div className="stroke-indigo-400">
          <BadgePercent size={48} color />
        </div>

        <div className="mt-3 text-4xl font-bold text-indigo-300">
          Exclusive Offer
        </div>

        <div className="mt-4 text-5xl font-bold text-indigo-100 underline decoration-pink-500">
          Save 50% Next Weekend
        </div>

        <div className="mt-12">
          <Button className="px-12" asChild>
            <Link href="/products">Explore Products</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
