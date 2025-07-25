import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { FaPlay } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCall,
} from "react-icons/io";
import { CirclePlay, Clock, Scroll, Users } from "lucide-react";

export default function HeroCourseCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  //   sample data for course details
  const courseDetails = [
    {
      icon: <Users />,
      text: "Total Enrolled 32995",
    },
    {
      icon: <Clock />,
      text: "Time Required 50 hours",
    },
    {
      icon: <CirclePlay />,
      text: "54 Videos",
    },
    {
      icon: <Scroll />,
      text: "10 Reading & 10 Listening Mocktests",
    },
    {
      icon: "📄",
      text: "38 Lecture Sheets",
    },
    {
      icon: "🎬",
      text: "25 Video Lectures",
    },
    {
      icon: "📦",
      text: "1 Free Hardcopy Book Delivered",
    },
    {
      icon: "📘",
      text: "Facebook Support Group",
    },
    {
      icon: "📅",
      text: "Course Validity Lifetime",
    },
  ];

  return (
    <div className="max-w-[420px] font-HindSiliguri w-full absolute top-20 right-0">
      <div className=" p-1.5 bg-primary border border-gray-300 ">
        {/* slider */}
        <div>
          <div className="relative">
            <Swiper
              spaceBetween={10}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {[...Array(5)].map((_, index) => (
                <SwiperSlide
                  key={index}
                  className="relative w-full  aspect-video"
                >
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
            <button className="prev top-1/2 disabled:opacity-40 disabled:cursor-not-allowed -translate-y-1/2 z-50 size-10 absolute  rounded-full flex items-center justify-center text-3xl text-primary">
              <IoIosArrowDropleftCircle />
            </button>
            {/* next icon */}
            <button className="next top-1/2 disabled:opacity-40 disabled:cursor-not-allowed  -translate-y-1/2 z-50 right-0 size-10 absolute  rounded-full flex items-center justify-center text-3xl text-primary">
              <IoIosArrowDroprightCircle />
            </button>
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
              <SwiperSlide className="w-full aspect-video overflow-hidden">
                <img
                  key={index}
                  src="https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png"
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* other details */}
        <div className="mt-8 px-4 pb-4">
          {/* price */}
          <div className="flex items-center gap-2 mb-6">
            <h5 className="text-2xl font-semibold">৳3850</h5>{" "}
            <span className="text-lg font-medium line-through">৳5000</span>{" "}
            <div className="relative bg-[#1cab55] py-1 rounded-sm px-1.5 text-sm font-medium text-primary">
              <p className="">1150 ৳ ছাড়</p>
            </div>
          </div>
          {/* Enroll button */}
          <button className="py-2 rounded-md hover:bg-[#14773b] duration-200 cursor-pointer w-full bg-[#1cab55] text-center text-primary text-lg font-medium capitalize border-b-4 border-b-[#14773b]">
            Enroll
          </button>
          {/* course feature */}
          <div className="mt-8">
            <h5 className="text-2xl font-semibold">এই কোর্সে যা থাকছে</h5>
            <div className="mt-3 space-y-2.5">
              {courseDetails?.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center opacity-80 font-inter gap-2 text-lg font-normal"
                >
                  <Users className="size-5" />
                  <p>{item.text && item?.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <p className="text-base opacity-50 font-medium">
          কোর্সটি সম্পর্কে বিস্তারিত জানতে
        </p>
        <div>
          <a
            href="tel:16910"
            className="flex items-center text-green-600 text-base gap-1"
          >
            <IoIosCall className="text-xl" />
            <p className="underline">ফোন করুন (16910)</p>
          </a>
        </div>
      </div>
    </div>
  );
}
