import Container from "../components/common/Container";
import logo from "../assets/Images/10mslogo-svg.svg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
} from "react-icons/fa";
import { TbBrandYoutubeFilled } from "react-icons/tb";

export default function Footer() {
  const footerLinks = {
    company: [
      { label: "Career / Recruitment", href: "#" },
      { label: "Join as a Teacher", href: "#" },
      { label: "Join as an Affiliate", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Refund policy", href: "#" },
      { label: "Terms & Conditions", href: "#" },
    ],
    others: [
      { label: "Blog", href: "#" },
      { label: "Book Store", href: "#" },
      { label: "Free Notes & Guides", href: "#" },
      { label: "Job Preparation Courses", href: "#" },
      { label: "Verify Certificate", href: "#" },
      { label: "Free Download", href: "#" },
    ],
    contact: [
      { label: "Call Us", value: "16910 (24×7)", color: "text-green-600" },
      {
        label: "Whatsapp",
        value: "+8801896016252 (24×7)",
        color: "text-green-600",
      },
      {
        label: "Outside Bangladesh",
        value: "+880 961091690",
        color: "text-green-600",
      },
      {
        label: "Email Us",
        value: "support@10minuteschool.com",
        color: "text-green-600",
      },
    ],
    socialIcons: [
      {
        href: "#",
        svgPath: <FaFacebook />, // Facebook
      },
      {
        href: "#",
        svgPath: <FaInstagram />, // Instagram
      },
      {
        href: "#",
        svgPath: <FaLinkedinIn />, // LinkedIn
      },
      {
        href: "#",
        svgPath: <TbBrandYoutubeFilled />, // YouTube
      },
      {
        href: "#",
        svgPath: <FaTiktok />, // Tiktok
      },
    ],
  };
  return (
    <footer className="py-32">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and App Download */}
          <div className="space-y-6">
            <img src={logo} alt="logo" className="w-28" />
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">
                Download Our Mobile App
              </h3>
              <div className="space-y-3">
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-12"
                  />
                </a>
                <a href="#" className="block">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-secondary text-xl font-semibold mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 duration-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Others Section */}
          <div>
            <h3 className="text-secondary font-semibold text-xl mb-4">
              Others
            </h3>
            <ul className="space-y-3">
              {footerLinks.others.map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-green-600 duration-500"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-secondary text-xl font-semibold mb-4">
              Keep up with us at
            </h3>
            <div className="space-y-3">
              {footerLinks.contact.map((item, i) => (
                <p className="text-gray-600" key={i}>
                  {item.label}:{" "}
                  <span className={`${item.color} font-semibold`}>
                    {item.value}
                  </span>
                </p>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-6">
              {footerLinks.socialIcons.map((icon, i) => (
                <a
                  key={i}
                  href={icon.href}
                  className="bg-gray-800 text-white p-2 rounded hover:bg-gray-700"
                >
                  {icon?.svgPath}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-8">
          <p className="text-center text-gray-500">
            2015 - 2025 Copyright © 10 Minute School. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
