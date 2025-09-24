import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Slack,
  Youtube,
} from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "./ui/tooltip";

import Link from "next/link";

const SocialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Instagram",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Instagram className="w-5 h-5" />,
  },
  {
    title: "Facebook",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Facebook className="w-5 h-5" />,
  },
  {
    title: "Slack",
    href: "https://www.youtube.com/@Nileshyadav_06",
    icon: <Slack className="w-5 h-5" />,
  },
];
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex item-center gap-4", className)}>
        {SocialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white py-2 text-darkColor font-semibold ",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
