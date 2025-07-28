import Container from "../common/Container";
import bg from "../../assets/Images/bg.jpeg";
import { FaStar } from "react-icons/fa";
import HeroCourseCard from "../../components/Home/HeroCourseCard";
import HeroSkeleton from "./Skeleton/HeroSkeleton";

export default function Hero({ courseData, isLoading }) {
  return (
    <div
      className="h-[300px] w-full font-inter"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="h-full relative">
        <div className="w-full max-w-[calc(100%_-_448px)] text-primary flex flex-col items-start justify-center h-full">
          {isLoading ? (
            <HeroSkeleton />
          ) : (
            <>
              <h1 className="text-4xl font-semibold text-primary mb-2">
                {courseData?.title}
              </h1>
              <div>
                <div className="font-normal text-lg flex items-center gap-2 font-HindSiliguri">
                  <div className="text-xl text-yellow-500 flex items-center gap-1.5">
                    {[...Array(5)].map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  (82.6% শিক্ষার্থী কোর্স শেষে ৫ রেটিং দিয়েছেন)
                </div>
                <p
                  dangerouslySetInnerHTML={{ __html: courseData?.description }}
                  className="text-base opacity-70 mt-2"
                />
              </div>
            </>
          )}
        </div>

        {/* course details */}
        <HeroCourseCard courseData={courseData} isLoading={isLoading} />
      </Container>
    </div>
  );
}
