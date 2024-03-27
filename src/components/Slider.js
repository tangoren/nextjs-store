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
    <div className={`${backgroundClass} py-36 flex`}>
      <div className="container flex">
        <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-6 text-center">
          <div
            className={`${titleClass} text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text`}
          >
            {title}
          </div>

          <p className="max-w-screen-sm font-medium text-slate-700">
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
          className={`${circleClass} absolute left-[50%] -translate-x-[50%] -bottom-[420px] before:border-[8px] before:border-dashed before:rounded-full before:size-[600px] before:animate-spin-slow flex justify-center items-center pointer-events-none opacity-40`}
        />
      </div>
    </div>
  );
};

const SlideItemVerticalText = ({ title, color, direction }) => {
  return (
    <div
      className={classNames(
        `${color} whitespace-nowrap absolute -top-full text-6xl font-bold text-transparent bg-gradient-to-r bg-clip-text opacity-5 select-none pointer-events-none`,
        {
          "rotate-90 origin-left left-8": direction === "left",
          "-rotate-90 origin-right right-8": direction === "right",
        },
      )}
    >
      {title}
    </div>
  );
};

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, EffectFade, Autoplay]}
      effect="fade"
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true, dynamicBullets: true }}
      loop={true}
      // autoplay={{ delay: 3000 }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
      className="homepage-slider"
    >
      <SwiperSlide>
        <SlideItem
          title="New Arrivals Are Here"
          description="The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they‘re still in stock."
          buttonText="Shop Now"
          titleClass="from-slate-400 to-slate-800"
          backgroundClass="bg-gradient-to-b from-slate-100 to-slate-200"
          circleClass="before:border-slate-300"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem
          title="Fresh Finds Just For You"
          description="Be the first to explore our fresh arrivals. From vibrant summer styles to must-have accessories, find your new favorites today."
          buttonText="Shop Now"
          titleClass="from-zinc-400 to-zinc-800"
          backgroundClass="bg-gradient-to-b from-zinc-100 to-zinc-200"
          circleClass="before:border-zinc-300"
        />
      </SwiperSlide>
    </Swiper>
  );
}
