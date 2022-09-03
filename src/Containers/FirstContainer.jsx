import React from "react";
import "./../CSS/production/Containers.css";

const FirstContainer = () => {
  return (
    <div
      className="banner"
      style={{
        background:
          "url(https://www.apple.com/v/home/aq/images/heroes/back-to-school-2022/hero_bts__bcuslanw39xe_largetall.jpg)center/cover no-repeat",
      }}
    >
      <div className="info">
        <h2 style={{ fontStyle: "italic" }}>
          Get <span>supercharged</span> for college.
        </h2>
        <h3
          style={{
            fontSize: "28px",
            fontWeight: 400,
            margin: "6px 0px 10px 0px",
          }}
        >
          Save on Mac or iPad. Plus get a gift card up to $150.
        </h3>
        <a href="https://www.apple.com/us-edu/shop/back-to-school">
          Show now {">"}
        </a>
      </div>
    </div>
  );
};

export default FirstContainer;
