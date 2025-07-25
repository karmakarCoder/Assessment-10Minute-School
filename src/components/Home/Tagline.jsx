import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Container from "../common/Container";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

export default function Tagline() {
  return (
    <div>
      <Container>
        <div className="max-w-[calc(100%_-_448px)] font-inter relative">
          <Swiper
            navigation={{
              prevEl: ".prev2",
              nextEl: ".next2",
            }}
            modules={[Navigation]}
            freeMode={true}
            spaceBetween={10}
            slidesPerView={3}
            className="mySwiper3 border-b-2 border-b-gray-200 text-lg font-normal"
          >
            {[...Array(10)].map((_, index) => (
              <SwiperSlide className="py-3 text-gray-500">
                How the course is laid out
              </SwiperSlide>
            ))}
          </Swiper>

          {/* prev icon */}
          <button className="prev2 top-1/2 disabled:opacity-40 disabled:cursor-not-allowed -translate-y-1/2 -left-12 z-50 size-10 absolute  rounded-full flex items-center justify-center text-4xl text-gray-500">
            <IoIosArrowDropleftCircle />
          </button>
          {/* next icon */}
          <button className="next2 top-1/2 disabled:opacity-40 disabled:cursor-not-allowed  -translate-y-1/2 z-50 -right-5 size-10 absolute  rounded-full flex items-center justify-center text-4xl text-gray-500">
            <IoIosArrowDroprightCircle />
          </button>
        </div>
      </Container>
    </div>
  );
}
