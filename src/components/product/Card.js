import Image from "next/image";
import Link from "next/link";

import convertCurrency from "@/helpers/currency";

export default function Card({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="flex flex-col">
      <div className="relative h-0 px-12 pb-[136%] overflow-hidden transition-all rounded-md ring-1 ring-slate-200 hover:ring-slate-300">
        <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center h-full p-12">
          <Image
            src={product.image || "/img/fallback.jpg"}
            width={679}
            height={900}
            alt={product.title}
            className="object-cover w-full rounded-md select-none"
            loading="lazy"
          />
        </div>
      </div>

      <div className="mt-3 text-sm truncate text-slate-500">
        {product.title}
      </div>

      <div className="mt-1 font-bold">{convertCurrency(product.price)}</div>
    </Link>
  );
}
