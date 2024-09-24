import React from "react";
import Slider from "./Slider";
import { Link, useLocation } from "react-router-dom";

function Index() {
  const location = useLocation();

  const navItems = [
    {
      id: 1,
      name: "HOME",
      navLinks: "/",
    },
    {
      id: 2,
      name: "SHOP",
      navLinks: "/shop",
    },
    {
      id: 3,
      name: "WHY US",
      navLinks: "/why",
    },
    {
      id: 4,
      name: "TESTIMONIAL",
      navLinks: "/testimonial",
    },
    {
      id: 5,
      name: "CONTACT US",
      navLinks: "/contact",
    },
  ];

  return (
    <div className="hero_area">
      {/* <!-- header section starts --> */}
      <header className="header_section">
        <nav className="navbar navbar-expand-lg custom_nav-container">
          <a className="navbar-brand" href="/">
            <span>Giftos</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              {navItems?.map((item: any) => (
                <li
                  className={`nav-item  ${
                    location?.pathname === item?.navLinks && "active"
                  }`}
                >
                  <Link className="nav-link" to={item.navLinks}>
                    {item?.name}
                    {/* Home <span className="sr-only">(current)</span> */}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      {location.pathname === "/" && <Slider />}
    </div>
  );
}

export default Index;
