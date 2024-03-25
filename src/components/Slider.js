import { Button } from "@/components/ui/button";

export default function Slider() {
  return (
    <div class="bg-gradient-to-b from-slate-100 to-slate-300 h-[480px] flex">
      <div class="container flex flex-col justify-center items-start gap-6">
        <div className="text-5xl font-bold text-transparent bg-gradient-to-r from-indigo-400 to-indigo-600 bg-clip-text">
          New arrivals are here
        </div>

        <p className="max-w-screen-sm font-medium text-slate-700">
          The new arrivals have, well, newly arrived. Check out the latest
          options from our summer small-batch release while they&lsquo;re still
          in stock.
        </p>

        <Button className="px-12">Shop Now</Button>
      </div>
    </div>
  );
}
