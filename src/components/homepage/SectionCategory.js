import Link from "next/link";
import classNames from "classnames";

const SectionCategoryItem = ({ size, link = "/", image, title }) => {
  return (
    <Link
      href={link}
      className={classNames(
        `${image} bg-no-repeat bg-center bg-cover rounded-md flex items-end relative overflow-hidden before:bg-gradient-to-b before:from-black/10 before:to-black/40 before:absolute before:w-full before:h-full before:rounded-md`,
        {
          "col-span-1 md:col-span-2 h-[320px]": size === "half",
          "col-span-1 md:col-span-2 row-span-1 md:row-span-2": size === "full",
        },
      )}
    >
      <div className="relative pb-8 pl-8 text-white">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm">Shop Now</div>
      </div>
    </Link>
  );
};

export default function SectionCategory() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-rows-4 md:grid-cols-4 md:gap-8">
      <SectionCategoryItem
        size="half"
        link="/products"
        image="bg-[url('/img/category-sm.svg')]"
        title="Accessories"
      />

      <SectionCategoryItem
        size="full"
        link="/products"
        image="bg-[url('/img/category-lg.svg')]"
        title="New Arrivals"
      />

      <SectionCategoryItem
        size="half"
        link="/products"
        image="bg-[url('/img/category-sm.svg')]"
        title="Electronics"
      />
    </div>
  );
}
