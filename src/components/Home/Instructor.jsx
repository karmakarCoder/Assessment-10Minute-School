import Container from "../common/Container";
import { ChevronRight } from "lucide-react";

export default function Instructor() {
  const profileData = {
    name: "Munzereen Shahid",
    education: [
      "MSc (English), University of Oxford (UK);",
      "BA, MA (English), University of Dhaka;",
      "IELTS: 8.5",
    ],
    imageUrl: "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg",
  };
  return (
    <div className="pt-10 pb-300 font-inter">
      <Container>
        <div className="max-w-[calc(100%_-_448px)]">
          <h4 className="text-3xl font-semibold mb-6">Course instructor</h4>
          <div className=" rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <img
                  src={profileData?.imageUrl}
                  alt={profileData?.name}
                  className="size-20 rounded-full object-cover border-2 border-gray-100"
                />
              </div>

              {/* Profile Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1 mb-1">
                  <h2 className="text-xl hover:text-green-600 duration-300 cursor-pointer font-semibold text-gray-900 truncate">
                    {profileData?.name}
                  </h2>
                  <ChevronRight className="size-6 text-gray-400 mt-0.5 flex-shrink-0" />
                </div>

                <div className="space-y-1">
                  {profileData?.education.map((item, index) => (
                    <p key={index} className="text-md text-gray-600">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
