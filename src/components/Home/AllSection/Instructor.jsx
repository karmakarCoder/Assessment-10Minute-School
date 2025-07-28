import Container from "../../common/Container";
import { ChevronRight } from "lucide-react";
import InstructorSkeleton from "../Skeleton/InstructorSkeleton";

export default function Instructor({ section, isLoading }) {
  return (
    <div className="pt-10 pb-120 font-inter">
      <Container>
        <div className="max-w-[calc(100%_-_448px)]">
          <div>
            <h4 className="text-3xl font-semibold mb-6 font-HindSiliguri">
              {isLoading ? "লোড হচ্ছে..." : section?.name}
            </h4>

            {isLoading ? (
              <InstructorSkeleton />
            ) : (
              <div className="rounded-lg border border-gray-200 p-6 space-y-3">
                {section?.values?.map((instructor, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Profile Image */}
                    <div className="flex-shrink-0">
                      <img
                        src={instructor?.image}
                        alt={instructor?.name}
                        className="size-20 rounded-full object-cover border-2 border-gray-100"
                      />
                    </div>

                    {/* Profile Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1 mb-1">
                        <h2 className="text-xl hover:text-green-600 duration-300 cursor-pointer font-semibold text-gray-900 truncate">
                          {instructor?.name}
                        </h2>
                        <ChevronRight className="size-6 text-gray-400 mt-0.5 flex-shrink-0" />
                      </div>

                      <div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: instructor?.description,
                          }}
                          className="text-md text-gray-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
