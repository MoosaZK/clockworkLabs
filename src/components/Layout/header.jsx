import Image from "next/image";

import Logo from "@/images/logo.png";
import { useEffect, useState } from "react";
import Link from "next/link";

function Header() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const scroller = () => {
      if (window.scrollY < 50) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
    window.addEventListener("scroll", scroller);

    return () => window.removeEventListener("scroll", scroller);
  }, []);
  return (
    <header>
      <nav
        className={`${
          scroll ? "bg-black border-b border-gray-500" : ""
        } z-50 transition duration-300 ease-in-out fixed flex items-center justify-center w-full gap-16 py-4 text-[20px]`}
      >
        <p className="py-2 transition duration-700 ease-in-out cursor-pointer hover:border-b hover:border-white ">
          Home
        </p>
        <p className="py-2 transition duration-700 ease-in-out cursor-pointer hover:border-b hover:border-white">
          Join
        </p>
        <Link href={"/"}>
          <Image
            src={Logo}
            width={0}
            height={0}
            alt=""
            className="w-[70px] h-[70px]"
          />
        </Link>
        <p className="py-2 transition duration-700 ease-in-out cursor-pointer hover:border-b hover:border-white">
          Blog
        </p>
        <p className="py-2 transition duration-700 ease-in-out cursor-pointer hover:border-b hover:border-white">
          Press
        </p>
      </nav>
    </header>
  );
}
export default Header;
