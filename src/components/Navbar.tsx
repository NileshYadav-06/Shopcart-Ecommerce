import React from "react";
import Container from "./Container";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <header>
      <Container className="bg-white">
        <Logo />
      </Container>
    </header>
  );
};

export default Navbar;
