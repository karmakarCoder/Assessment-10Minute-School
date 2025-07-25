import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlineArrowLeft } from "react-icons/md";
import { IoIosArrowDropleftCircle } from "react-icons/io";

export default function HeroCourseCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="max-w-[400px] w-full p-2 bg-primary absolute top-20 border border-gray-100 right-0">
      {/* left & right arrow */}

      {/* slider */}
      <div className="relative">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: ".prev",
          }}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {[...Array(5)].map((_, index) => (
            <SwiperSlide key={index} className="relative w-full aspect-video">
              <img
                src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                alt=""
              />
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black/30 z-30">
                <div className="size-14 bg-primary text-green-500 flex items-center justify-center text-2xl rounded-full">
                  <FaPlay className="ml-1" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* prev icon */}
        <div className="prev top-1/2 -translate-y-1/2 z-50 size-10 absolute  rounded-full flex items-center justify-center text-3xl text-primary">
          <IoIosArrowDropleftCircle />
        </div>
      </div>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper mt-2.5"
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide className="w-full aspect-video">
            <img
              src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
