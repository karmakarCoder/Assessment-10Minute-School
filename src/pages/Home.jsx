import Hero from "../components/Home/Hero";
import Tagline from "../components/Home/Tagline";
import usePublicGetRequest from "../hooks/PublicQuery/usePublicGetRequest";
import CourseSection from "../components/Home/CourseSection";
import { getLocalStorage } from "../utils/localstorage";
import { useLanguage } from "../context/LanguageProvider";

export default function Home() {
  const { language } = useLanguage();

  // get api request here
  const { data: courseData, isLoading } = usePublicGetRequest({
    queryKey: ["course", language],
    endpoint: `/products/ielts-course?lang=${language}`,
  });

  return (
    <div>
      <Hero courseData={courseData} isLoading={isLoading} />
      <Tagline courseData={courseData} />
      <CourseSection courseData={courseData} isLoading={isLoading} />
    </div>
  );
}
