import { RiDiscountPercentLine } from "@remixicon/react";

import { Button } from "@/components/ui/button";

export default function SectionCta() {
  return (
    <div className="select-none rounded-2xl bg-gradient-to-b from-indigo-500 to-indigo-600 py-12 md:py-24 relative before:bg-[url('/img/pattern-cta.svg')] before:size-full before:bg-contain before:bg-center before:bg-no-repeat before:absolute before:top-0 before:opacity-30 before:pointer-events-none">
      <div className="relative flex flex-col items-center justify-center text-center">
        <RiDiscountPercentLine size={48} className="text-indigo-400" />

        <div className="mt-3 text-2xl font-bold text-indigo-300 md:text-4xl">
          Exclusive Offer
        </div>

        <div className="mt-4 text-3xl font-bold text-indigo-100 underline md:text-5xl decoration-pink-500">
          Save 50% Next Weekend
        </div>

        <div className="mt-12">
          <Button className="px-12">Explore Products</Button>
        </div>
      </div>
    </div>
  );
}
