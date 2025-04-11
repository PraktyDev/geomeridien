'use client'
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconDropletDollar,
  IconHome,
  IconShieldSearch,
} from "@tabler/icons-react";
import { usePathname } from "next/navigation";

export function DockLink() {
  const pathname = usePathname()

  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className={`link ${pathname === '/' ? 'text-gray-200' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
      ),
      href: "/",
    },
    {
      title: "Discover",
      icon: (
        <IconShieldSearch className={`link ${pathname === '/discover' ? 'text-gray-200' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
      ),
      href: "/discover",
    },
    // {
    //   title: "Products",
    //   icon: (
    //     <IconBrandAppgallery className={`link ${pathname === '/products' ? 'text-gray-200' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
    //   ),
    //   href: "/products",
    // },
    {
      title: "Tour Details",
      icon: (
        <IconDropletDollar className={`link ${pathname === '/tour-details' ? 'text-gray-200' : 'text-neutral-500 dark:text-neutral-300'} h-full w-full`} />
      ),
      href: "/tour-details",
    },
    {
      title: "X",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.x.com",
      target: "_blank"
    },
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
      target: "_blank"
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com",
      target: "_blank"
    },
  ];
  return (
    <div className="flex items-center justify-center fixed bottom-4 left-4 md:inset-x-0 z-99">
      <FloatingDock
        mobileClassName="" 
        items={links}
      />
    </div>
  );
}