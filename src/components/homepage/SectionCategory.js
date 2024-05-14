import classNames from "classnames";

const SectionCategoryItem = ({ size, image, title }) => {
  return (
    <div
      className={classNames(
        `${image} rounded-md flex items-end relative overflow-hidden bg-gradient-to-l pointer-events-none before:bg-[url('/img/pattern-cta.svg')] before:size-full before:bg-center before:bg-no-repeat before:absolute before:top-0 before:opacity-15 before:pointer-events-none before:rotate-12`,
        {
          "col-span-1 md:col-span-2 h-[320px]": size === "half",
          "col-span-1 md:col-span-2 row-span-1 md:row-span-2": size === "full",
        },
      )}
    >
      <div className="relative pb-8 pl-8 text-slate-800">
        <div className="font-semibold">{title}</div>
        <div className="mt-1 text-sm">Shop Now</div>
      </div>
    </div>
  );
};

export default function SectionCategory() {
  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-4 md:grid-rows-2 md:grid-cols-4 md:gap-8">
      <SectionCategoryItem
        size="half"
        image="from-slate-300 to-slate-400"
        title="Accessories"
      />

      <SectionCategoryItem
        size="full"
        image="from-zinc-300 to-zinc-400"
        title="New Arrivals"
      />

      <SectionCategoryItem
        size="half"
        image="from-neutral-300 to-neutral-400"
        title="Electronics"
      />
    </div>
  );
}
