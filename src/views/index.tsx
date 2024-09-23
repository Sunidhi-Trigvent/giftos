import React from "react";
import Header from "../views/Header";
import Footer from "../views/Footer";
import { Outlet, useLocation } from "react-router-dom";
import Products from "../pages/Products";
import NewArrivals from "../pages/NewArrivals";
import WhyUs from "../pages/WhyUs";
import Gifts from "../pages/Gifts";
import ContactUs from "../pages/ContactUs";
import Testimonials from "../pages/Testimonials";

function Index() {
  // Change the component name to Index
  const location = useLocation();
  return (
    <>
      <Header />
      {location.pathname === "/" && (
        <>
          <Products />
          <NewArrivals />
          <WhyUs />
          <Gifts />
          <ContactUs />
          <Testimonials />
        </>
      )}
      <Outlet />
      <Footer />
    </>
  );
}

export default Index;
