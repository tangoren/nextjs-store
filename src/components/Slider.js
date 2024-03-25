"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import { Button } from "@/components/ui/button";

const SlideComponent = ({
  title,
  description,
  buttonText,
  titleClass,
  backgroundClass,
}) => {
  return (
    <div className={`${backgroundClass} h-[480px] flex`}>
      <div className="container flex flex-col items-start justify-center gap-6">
        <div
          className={`${titleClass} text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text`}
        >
          {title}
        </div>

        <p className="max-w-screen-sm font-medium text-slate-700">
          {description}
        </p>

        <Button className="px-12">{buttonText}</Button>
      </div>
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
      autoplay={{ delay: 6000 }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <SlideComponent
          title="New Arrivals Are Here"
          description="The new arrivals have, well, newly arrived. Check out the latest options from our summer small-batch release while they‘re still in stock."
          buttonText="Shop Now"
          titleClass="from-slate-400 to-slate-800"
          backgroundClass="bg-gradient-to-b from-slate-100 to-slate-300"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SlideComponent
          title="Fresh Finds Just For You"
          description="Be the first to explore our fresh arrivals. From vibrant summer styles to must-have accessories, find your new favorites today."
          buttonText="Shop Now"
          titleClass="from-gray-400 to-gray-800"
          backgroundClass="bg-gradient-to-b from-gray-100 to-gray-300"
        />
      </SwiperSlide>
    </Swiper>
  );
}
