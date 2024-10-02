"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import classNames from "classnames";

import { Button } from "@/components/ui/button";

const SlideItem = ({
  title,
  description,
  buttonText,
  titleClass,
  backgroundClass,
  circleClass,
}) => {
  return (
    <div
      className={`${backgroundClass} pt-16 pb-20 lg:py-36 flex overflow-hidden`}
    >
      <div className="container flex">
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6 text-center">
          <div
            className={`${titleClass} text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text`}
          >
            {title}
          </div>

          <p className="max-w-screen-sm text-sm font-medium lg:text-base text-slate-700">
            {description}
          </p>

          <Button className="px-12">{buttonText}</Button>

          <SlideItemVerticalText
            title={title}
            color={titleClass}
            direction="left"
          />

          <SlideItemVerticalText
            title={title}
            color={titleClass}
            direction="right"
          />
        </div>

        <div
          className={`${circleClass} absolute left-[50%] -translate-x-[50%] -bottom-[490px] lg:-bottom-[420px] before:border-[8px] before:border-dashed before:rounded-full before:size-[600px] before:animate-spin-slow flex justify-center items-center pointer-events-none opacity-40`}
        />
      </div>
    </div>
  );
};

const SlideItemVerticalText = ({ title, color, direction }) => {
  return (
    <div
      className={classNames(
        `${color} whitespace-nowrap absolute -top-24 lg:-top-full text-4xl lg:text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text opacity-5 select-none pointer-events-none`,
        {
          "rotate-90 origin-left left-2 lg:left-8": direction === "left",
          "-rotate-90 origin-right right-2 lg:right-8": direction === "right",
        },
      )}
    >
      {title}
    </div>
  );
};

const slideData = [
  {
    title: "New Arrivals Are Here",
    description:
      "The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they’re still in stock.",
    buttonText: "Shop Deals",
    titleClass: "from-slate-400 to-slate-800",
    backgroundClass: "bg-gradient-to-b from-slate-100 to-slate-200",
    circleClass: "before:border-slate-300",
  },
  {
    title: "Exclusive Collection",
    description:
      "Unveil the summer vibes with our exclusive collection. From beachwear to casual outfits, get ready for a stylish summer season.",
    buttonText: "Explore Now",
    titleClass: "from-orange-400 to-orange-800",
    backgroundClass: "bg-gradient-to-b from-orange-50 to-orange-100",
    circleClass: "before:border-orange-300",
  },
  {
    title: "Limited Time Special Offer",
    description:
      "Don’t miss out on our limited-time offers! Get amazing discounts on selected items. Hurry, while stocks last!",
    buttonText: "Shop Now",
    titleClass: "from-pink-400 to-pink-800",
    backgroundClass: "bg-gradient-to-b from-pink-50 to-pink-100",
    circleClass: "before:border-pink-300",
  },
  {
    title: "Fresh Finds Just For You",
    description:
      "Be the first to explore our fresh arrivals. From vibrant summer styles to must-have accessories, find your new favorites today.",
    buttonText: "Shop Now",
    titleClass: "from-zinc-400 to-zinc-800",
    backgroundClass: "bg-gradient-to-b from-zinc-100 to-zinc-200",
    circleClass: "before:border-zinc-300",
  },
  {
    title: "Freshly Restocked Items",
    description:
      "Finally your favorites are back! Check out our restocked items and grab them before they’re gone again.",
    buttonText: "View Now",
    titleClass: "from-emerald-400 to-emerald-800",
    backgroundClass: "bg-gradient-to-b from-emerald-50 to-emerald-100",
    circleClass: "before:border-emerald-300",
  },
  {
    title: "Exclusive Member Access",
    description:
      "Members get early access to new products and exclusive offers. Join now and be part of our community.",
    buttonText: "Join Today",
    titleClass: "from-indigo-400 to-indigo-800",
    backgroundClass: "bg-gradient-to-b from-indigo-50 to-indigo-100",
    circleClass: "before:border-indigo-300",
  },
];

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      autoHeight={true}
      autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
      className="select-none homepage-slider"
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideItem
            title={slide.title}
            description={slide.description}
            buttonText={slide.buttonText}
            titleClass={slide.titleClass}
            backgroundClass={slide.backgroundClass}
            circleClass={slide.circleClass}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
