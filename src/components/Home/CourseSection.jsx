import RenderSection from "./RenderSection";

export default function CourseSection({ courseData, isLoading }) {
  if (isLoading) {
    return (
      <div>
        <RenderSection section={{ type: "instructors" }} isLoading={true} />
      </div>
    );
  }

  if (!courseData?.sections?.length) {
    return null;
  }

  return (
    <div>
      {courseData.sections.map((section, idx) => (
        <RenderSection key={idx} section={section} />
      ))}
    </div>
  );
}
