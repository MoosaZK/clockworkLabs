import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import Logo from "@/images/logo.png";

function Footer() {
  return (
    <footer className="py-20 bg-[#0b0f19] pl-8 pr-4  md:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row lg:justify-between ">
            <div className="flex flex-col w-[280px]">
              <Link href="/" className="flex items-center">
                <Image
                  src={Logo}
                  width={96}
                  height={96}
                  alt="fourseason - logo"
                />
              </Link>
              <p className="py-4 mr-2 text-white opacity-70 ">
                © Clockwork Labs 2024. All Rights Reserved.
              </p>
            </div>
            <div className="flex sm:justify-between  sm:flex-nowrap flex-wrap lg:gap-32 gap-8 mt-12 lg:mt-0 text-[15px]">
              <div className="flex flex-col text-white w-min md:w-auto">
                <Link
                  href="/"
                  className="mb-4 hover:text-[#4044ee] transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  href="/"
                  className="mb-4 hover:text-[#4044ee] transition-all duration-300"
                >
                  Join
                </Link>
                <Link
                  href="/"
                  className="mb-4 hover:text-[#4044ee] transition-all duration-300"
                >
                  Blogs
                </Link>
                <Link
                  href="/"
                  className="mb-4 hover:text-[#4044ee] transition-all duration-300 break-normal"
                >
                  Press{" "}
                </Link>
              </div>
              <div className="flex flex-col mx-auto text-white">
                <Link
                  href="https://www.linkedin.com/company/clockwork-labs/"
                  className="mb-4 flex items-center hover:text-[#4044ee] transition-all duration-300"
                >
                  <FaFacebook className="mr-2" />
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/company/clockwork-labs/"
                  className="mb-4 flex items-center hover:text-[#4044ee] transition-all duration-300"
                >
                  <FaLinkedin className="mr-2" />
                  LinkedIn
                </Link>
                <Link
                  href="https://www.linkedin.com/company/clockwork-labs/"
                  className="mb-4 flex items-center hover:text-[#4044ee] transition-all duration-300"
                >
                  <FaTwitter className="mr-2" />
                  Twitter
                </Link>
                <Link
                  href="https://www.linkedin.com/company/clockwork-labs/"
                  className="mb-4 flex items-center hover:text-[#4044ee] transition-all duration-300"
                >
                  <FaInstagram className="mr-2" />
                  Instagram
                </Link>
                <Link
                  href="https://www.linkedin.com/company/clockwork-labs/"
                  className="mb-4 flex items-center hover:text-[#4044ee] transition-all duration-300"
                >
                  <FaYoutube className="mr-2" />
                  Youtube
                </Link>
              </div>
              <div className="flex flex-col text-white">
                <h4 className="font-[800] text-white mb-4">Get in Touch</h4>


                <div className="opacity-90 sm:w-80">
                  <p className="mb-1 hover:text-[#4044ee]   font-medium transition-all duration-300">
                    Visit our Main Office:
                  </p>
                  <p className="leading-6 opacity-90">
                  Computer Games San Francisco, California
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-20 pb-10 text-center">
          @{" "}
          <span className="text-green-500 hover:text-[#4044ee]">
            Clockwrok Labs
          </span>{" "}
          . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
export default Footer;
