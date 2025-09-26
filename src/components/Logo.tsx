import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface LogoPropsType {
  className?: string;
  spanDesign?: string;
}
const Logo = ({ className ,spanDesign} : LogoPropsType) => {
  return (
    <Link href={"/"} className="inline-flex">
      <h2
        className={cn(
          "text-2xl text-shop_dark_green font-black tracking-wider uppercase hover:text-shop_light_green hoverEffect group font-sans",
          className
        )}
      >
        shopcar
        <span
          className={cn(
            "group-hover:text-shop_dark_green text-shop_light_green hoverEffect", spanDesign
          )}
        >
          t
        </span>
      </h2>
    </Link>
  );
};

export default Logo;
