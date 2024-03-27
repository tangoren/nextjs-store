import Image from "next/image";
import Link from "next/link";

import convertCurrency from "@/helpers/currency";

export default function Card() {
  return (
    <Link href="/">
      <div className="relative p-6 transition-all rounded-md ring-1 ring-slate-200 hover:ring-slate-300">
        <Image
          src="/img/test.jpg"
          width={679}
          height={900}
          alt="img"
          className="rounded-md select-none"
        />
      </div>

      <div className="mt-3 text-sm truncate text-slate-500">
        BIYLACLESEN Women&lsquo;s 3-in-1 Snowboard Jacket Winter Coats
      </div>

      <div className="mt-1 font-bold">{convertCurrency(56.99)}</div>
    </Link>
  );
}
