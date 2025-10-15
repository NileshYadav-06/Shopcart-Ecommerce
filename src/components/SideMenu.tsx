"use client";
import React, { FC } from "react";
import Logo from "./Logo";
import { X } from "lucide-react";
import Link from "next/link";
import { headerData } from "@/constants/data";
import { usePathname } from "next/navigation";
import SocialMedia from "./SocialMedia";
// import { useOutsideClick } from "../../hooks";

interface SideBarProps {
  isOpen: boolean;
  onClose: () => void;
}
// const SideMenu = ({isOpen,onClose}:SideBarProps) => {}  [this and below line of code do the same
const SideMenu: FC<SideBarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  // const sidebarRef = useOutsideClick<HTMLDivElement>(onClose)   // we try to make functionality to close sidebar and also we have maje folder hooks inside it there is index.ts file for managing
  return (
    <div
      className={`fixed inset-y-0 h-screen left-0 z-50 w-full bg-black/50 text-white/50 shadow-xl  ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } hoverEffect`}
    >
      <div className="   min-w-96 max-w-96 bg-black h-screen p-10 ">
        <div className="   flex items-center justify-between gap-6">
          <Logo className="text-white" spanDesign="group-hover:text-white" />
          <button
            onClick={onClose}
            className="hover:text-shop_light_green hoverEffect"
          >
            <X />
          </button>
        </div>
        <div className=" mt-10 mb-10 flex flex-col gap-4 ">
          {headerData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`w-18 hover:text-shop_light_green hoverEffect ${
                pathname === item?.href && "text-white"
              }`}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideMenu;
