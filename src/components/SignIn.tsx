import { SignInButton } from "@clerk/nextjs";
import React from "react";

const SignIn = () => {
  return (
    <SignInButton mode="modal">
      <button className="text-m font-semibold hover:text-darkColor hoverEffect hover:cursor-pointer">
        Login
      </button>
    </SignInButton>
  );
};

export default SignIn;
