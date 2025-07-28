import { useRef } from "react";
import { FaPlay } from "react-icons/fa";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
  IoIosCall,
} from "react-icons/io";
import CoueseSidebarSkeleton from "./Skeleton/CoueseSidebarSkeleton";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

export default function HeroCourseCard({ courseData, isLoading }) {
  const mainRef = useRef(null);
  const thumbsRef = useRef(null);

  return (
    <div className="font-HindSiliguri absolute top-20 right-0 w-full max-w-[420px]">
      {isLoading ? (
        <CoueseSidebarSkeleton />
      ) : (
        <div>
          <div className="bg-primary border border-gray-300 p-1.5">
            {/* slider */}
            {courseData?.media?.length > 0 && (
              <div>
                <div className="relative">
                  <Splide
                    options={{
                      type: "slide",
                      perPage: 1,
                      pagination: false,
                      arrows: false,
                      gap: "1rem",
                      cover: true,
                      focus: "center",
                      isNavigation: false,
                      updateOnMove: true,
                    }}
                    ref={mainRef}
                    className="mainSlider"
                    onMoved={(splide) => {
                      thumbsRef.current?.splide?.go(splide.index);
                    }}
                  >
                    {courseData?.media?.map((item, index) => (
                      <SplideSlide
                        key={index}
                        className="relative aspect-video w-full"
                      >
                        <img
                          src={
                            item?.resource_type === "video"
                              ? item?.thumbnail_url
                              : item?.resource_value
                          }
                          alt={item?.name}
                          className="h-full w-full rounded object-cover"
                        />
                        {item?.resource_type === "video" && (
                          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
                            <div className="bg-primary flex size-14 items-center justify-center rounded-full text-2xl text-green-500">
                              <FaPlay className="ml-1" />
                            </div>
                          </div>
                        )}
                      </SplideSlide>
                    ))}
                  </Splide>

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => mainRef.current?.splide?.go("<")}
                    className="text-primary absolute top-1/2 left-0 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-3xl opacity-60 hover:opacity-100"
                  >
                    <IoIosArrowDropleftCircle />
                  </button>
                  <button
                    onClick={() => mainRef.current?.splide?.go(">")}
                    className="text-primary absolute top-1/2 right-0 z-20 flex size-10 -translate-y-1/2 items-center justify-center rounded-full text-3xl opacity-60 hover:opacity-100"
                  >
                    <IoIosArrowDroprightCircle />
                  </button>
                </div>

                {/* Thumbnail Slider */}
                <Splide
                  options={{
                    type: "slide",
                    rewind: true,
                    fixedWidth: 120,
                    height: 80,
                    gap: "1rem",
                    pagination: false,
                    cover: true,
                    isNavigation: true,
                    arrows: false,
                    focus: "center",
                  }}
                  ref={thumbsRef}
                  className="thumbSlider mt-2"
                  onMoved={(splide) => {
                    thumbsRef.current?.splide?.go(splide.index);
                  }}
                >
                  {courseData?.media?.map((item, index) => (
                    <SplideSlide
                      onClick={() => {
                        mainRef.current?.splide?.go(index);
                      }}
                      key={index}
                      className="overflow-hidden rounded"
                    >
                      <img
                        src={
                          item?.resource_type === "video"
                            ? item?.thumbnail_url
                            : item?.resource_value
                        }
                        alt={item?.name}
                        className="h-full w-full object-cover"
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
            )}
            {/* other details */}
            <div className="mt-8 px-4 pb-4">
              {/* price */}
              <div className="mb-6 flex items-center gap-2">
                <h5 className="text-2xl font-semibold">৳3850</h5>{" "}
                <span className="text-lg font-medium line-through">৳5000</span>{" "}
                <div className="text-primary relative rounded-sm bg-[#1cab55] px-1.5 py-1 text-sm font-medium">
                  <p className="">1150 ৳ ছাড়</p>
                </div>
              </div>
              {/* Enroll button */}
              <button className="text-primary w-full cursor-pointer rounded-md border-b-4 border-b-[#14773b] bg-[#1cab55] py-2 text-center text-lg font-medium capitalize duration-200 hover:bg-[#14773b]">
                {courseData?.cta_text?.name}
              </button>
              {/* course feature */}
              <div className="mt-8">
                <h5 className="text-2xl font-semibold">এই কোর্সে যা থাকছে</h5>
                <div className="mt-3 space-y-2.5">
                  {courseData?.checklist?.map((item, index) => (
                    <div
                      key={index}
                      className="font-inter flex items-center gap-2 text-lg font-normal opacity-80"
                    >
                      <img src={item?.icon} alt={item?.text} className="w-6" />
                      <p>{item?.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-base font-medium opacity-50">
              কোর্সটি সম্পর্কে বিস্তারিত জানতে
            </p>
            <div>
              <a
                href="tel:16910"
                className="flex items-center gap-1 text-base text-green-600"
              >
                <IoIosCall className="text-xl" />
                <p className="underline">ফোন করুন (16910)</p>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
