import Instructor from "./AllSection/Instructor";

export default function RenderSection({ section, isLoading }) {
  switch (section?.type) {
    case "instructors":
      return <Instructor section={section} isLoading={isLoading} />;

    case "features":
      return null;

    case "offers":
      return null;

    default:
      return null;
  }
}
