import Image from "next/image";
import React from "react";

const NavHeader = () => {
  return (
    <header className="w-full bg-[#F5F5F5] flex justify-between items-center px-4 py-2 md:px-6 md:py-4 sticky md:fixed top-0 z-99 shadow-lg backdrop-blur-md">
      <Image
        src="/geotravels.png"
        alt="geomeridien logo"
        width={2006}
        height={714}
        className="object-cover w-24 md:w-32 h-auto"
        priority={true}
      />
    </header>
  );
};

export default NavHeader;
