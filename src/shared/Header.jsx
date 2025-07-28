import { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import Container from "../components/common/Container";
import logo from "../assets/Images/10mslogo-svg.svg";
import SearchSvg from "../assets/svg/SearchSvg";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
import { useLanguage } from "../context/LanguageProvider";

export default function Header() {
  // all state and hooks
  const [searchQuery, setSearchQuery] = useState("");
  const [isClassDropdownOpen, setIsClassDropdownOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  // menu item sample data
  const menuItems = [
    {
      label: "Class 6–12",
      hasDropdown: true,
      items: [
        { label: "Class 6", href: "/class-6" },
        { label: "Class 7", href: "/class-7" },
        { label: "Class 8", href: "/class-8" },
        { label: "Class 9", href: "/class-9" },
        { label: "Class 10", href: "/class-10" },
        { label: "Class 11", href: "/class-11" },
        { label: "Class 12", href: "/class-12" },
      ],
    },
    {
      label: "Skills",
      hasDropdown: true,
      items: [
        { label: "Programming", href: "/skills/programming" },
        { label: "Graphics Design", href: "/skills/graphics-design" },
        { label: "Video Editing", href: "/skills/video-editing" },
        { label: "Public Speaking", href: "/skills/public-speaking" },
      ],
    },
    {
      label: "Admission",
      hasDropdown: false,
      href: "/admission",
    },
    {
      label: "Online Batch",
      hasDropdown: true,
      items: [
        { label: "SSC 2025", href: "/online-batch/ssc-2025" },
        { label: "HSC 2026", href: "/online-batch/hsc-2026" },
        { label: "Admission Batch", href: "/online-batch/admission" },
      ],
    },
    {
      label: "English Centre",
      hasDropdown: true,
      items: [
        { label: "Complete IELTS", href: "/english/ielts" },
        { label: "Spoken English", href: "/english/spoken" },
        { label: "Grammar Mastery", href: "/english/grammar" },
      ],
    },
    {
      label: "More",
      hasDropdown: true,
      items: [
        { label: "Blog", href: "/blog" },
        { label: "Success Stories", href: "/success-stories" },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ];

  return (
    <header className="py-2 border-b border-b-gray-200 font-HindSiliguri">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div>
              <img
                src={logo}
                alt="logo"
                title="10 MINUTE SCHOOL"
                className="w-28"
              />
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-[180px]">
              <div className="relative">
                <div className="absolute top-[50%] -translate-y-[55%] left-0 pl-3 flex items-center pointer-events-none">
                  <SearchSvg />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-11 pr-3 py-2.5 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0"
                  placeholder="স্কিলস কোর্স"
                />
              </div>
            </div>
          </div>

          {/* Navigation and Right Side */}
          <div className="flex items-center space-x-6">
            {/* Navigation Links */}
            <nav className="hidden lg:flex text-[15px] items-center space-x-6">
              {menuItems?.map((item, index) => (
                <div key={index} className="relative">
                  <button
                    onClick={() => setIsClassDropdownOpen(!isClassDropdownOpen)}
                    className="flex items-center cursor-pointer duration-300 gap-1 text-gray-700 hover:text-green-500 font-medium"
                  >
                    {item?.label}
                    <ChevronDown className="size-5" />
                  </button>
                </div>
              ))}
            </nav>

            {/* Language Toggle */}
            <div className="flex items-center">
              <span
                className="text-gray-700 font-medium uppercase cursor-pointer"
                onClick={() => setLanguage(language === "en" ? "bn" : "en")}
              >
                {language === "en" ? "BN" : "EN"}
              </span>
            </div>

            {/* Phone */}
            <div className="flex items-center text-green-600">
              <Phone className="h-4 w-4 mr-1" />
              <span className="font-medium">16910</span>
            </div>

            {/* Login Button */}
            <button className="bg-green-600 text-nowrap hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors">
              লগ-ইন
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
}
