import { cn } from "@/lib/utils";
import React from "react";

interface ContainerPropsType {
  children: React.ReactNode;
  className?: string;
}

// type ContainerProps = {
//   children: React.ReactNode;
//   className?: string;
// };

const Container = ({ children, className }: ContainerPropsType) => {
  return (
    <div className={cn("max-w-screen mx-auto px-4", className)}>{children}</div>
  );
};

export default Container;
