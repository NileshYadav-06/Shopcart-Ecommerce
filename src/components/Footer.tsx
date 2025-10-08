import Link from "next/link";
import Container from "./Container";
import FooterTop from "./FooterTop";
import Logo from "./Logo";
import SocialMedia from "./SocialMedia";
import { SubText, SubTitle } from "./ui/text";
import { quickLinksData, categoriesData } from "@/constants/data";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <Container>
        <FooterTop />
        <div className="  py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="  space-y-4 ">
            <Logo />
            <SubText className="mb-10 pb-3">
              Discover curated furniture collections at Shopcart, blending style
              and comfort to elevate your living spaces
            </SubText>
            <SocialMedia
              className="text-darkColor/60 "
              iconClassName=" border-darkColor/60 hover:border-shop_light_green hover:text-shop_light_green"
              tooltipClassName="bg-darkColor text-white"
            />
          </div>
          <div className="space-y-4">
            <SubTitle className="hover:text-gray-900/100 ">
              Quick Links
            </SubTitle>
            <ul className="space-y-3 mt-4">
              {quickLinksData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={item?.href}
                    className="hover:text-shop_light_green hoverEffect font-medium text-sm text-gray-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle className="hover:text-gray-900/100 ">Categories</SubTitle>
            <ul className="space-y-3 mt-4">
              {categoriesData?.map((item) => (
                <li key={item?.title}>
                  <Link
                    href={`/category/${item?.href}`}
                    className="hover:text-shop_light_green hoverEffect font-medium text-sm text-gray-600"
                  >
                    {item?.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <SubTitle className="hover:text-gray-900/100">Newsletter</SubTitle>
            <SubText>
              Subscribe to our news letter to recieve update and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input placeholder="Enter your email" type="email" required />
              <Button className="w-full">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="py-6 border-t text-center text-sm text-gray-600">
          <div>
            © {new Date().getFullYear()} <Logo className="text-sm hoverEffect" />. All rights reserved made with ❤️ by <span className=" hover:text-darkColor/90 font-black hoverEffect" >Nilesh Yadav </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
