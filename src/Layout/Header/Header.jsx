import React, { useState } from "react";
import SVGicons from "../../Components/SVGicons/SVGicons";
import "./../../CSS/production/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  let arr_links = [
    {
      text: "Store",
      link: "/store",
    },
    {
      text: "Mac",
      link: "/mac",
    },
    {
      text: "iPad",
      link: "/ipad",
    },
    {
      text: "iPhone",
      link: "/iphone",
    },
    {
      text: "Watch",
      link: "/watch",
    },
    {
      text: "Airpods",
      link: "/airpods",
    },
    {
      text: "TV & Home",
      link: "/tv-home",
    },
    {
      text: "Only on Apple",
      link: "/services",
    },
    {
      text: "Accessories",
      link: "/accessories/all",
    },
    {
      text: "Support",
      link: "https://support.apple.com/",
    },
  ];

  let [isOpen, setIsOpen] = useState(false);
  let [isSearch, setIsSearch] = useState(false);
  let body = document.body;
  if (isOpen) body.style.overflow = "hidden";
  else body.style.overflow = "visible";
  return (
    <header
      style={{
        height: isOpen ? "100vh" : "48px",
        backgroundColor: isOpen ? "#000" : "rgba(0, 0, 0, 0.8)",
      }}
    >
      <div className="_width _pc">
        <a href="https://www.apple.com" className="logo">
          <SVGicons icon="logo" />
        </a>
        {arr_links.map((item, index) => (
          <Link to={item.link} key={index}>
            {item.text}
          </Link>
        ))}
        <SVGicons icon="search" />
        <SVGicons icon="bag" />
      </div>
      <div className="_mobile">
        <div
          className="header"
          style={{
            height: isSearch ? "0px" : "48px",
          }}
        >
          <div onClick={() => setIsOpen(!isOpen)} className="menu">
            <div
              style={{
                position: isOpen ? "absolute" : "static",
                transform: `rotate(${isOpen ? "45deg" : "0deg"})`,
              }}
              className="top-side"
            ></div>
            <div
              style={{
                position: isOpen ? "absolute" : "static",
                transform: `rotate(${isOpen ? "-45deg" : "0deg"})`,
              }}
              className="bottom-side"
            ></div>
          </div>
          <a href="https://www.apple.com" className="logo">
            <SVGicons icon="logo-mobile" />
          </a>
          <SVGicons
            icon="bag-mobile"
            style={{ opacity: isOpen ? "0%" : "100%" }}
          />
        </div>
        <div className="navigation">
          <div
            className="search"
            style={{ padding: isSearch ? "17px 0 0 0" : "0px" }}
          >
            <form
              onClick={() => setIsSearch(true)}
              style={{ width: isSearch ? "79%" : "100%" }}
            >
              <SVGicons icon="search" />
              <input type="text" placeholder="Search apple.com" />
            </form>
            <button
              onClick={() => setIsSearch(false)}
              style={{
                position: "absolute",
                right: isSearch ? "8px" : "-85px",
              }}
            >
              Cancle
            </button>
          </div>
          <div
            className="links"
            style={{
              height: isSearch ? "0px" : "100vh",
            }}
          >
            {arr_links.map((item, index) => (
              <a onClick={() => setIsOpen(false)} href={item.link} key={index}>
                {item.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
