import React from "react";
import "./../../CSS/production/Containers.css";

const ThirdVersion = ({ item }) => {
  return (
    <div
      className="banner"
      style={{
        background: `url("${item.img}")center/cover no-repeat`,
      }}
    >
      <div className={item.theme}>
        <h2
          style={{
            background: `url(${item.title.link})center/cover no-repeat`,
            width: `${item.title.style.width}`,
            height: `${item.title.style.height}`,
          }}
        >
          {" "}
        </h2>
        <h3>{item.subtitle}</h3>
        <div className="links">
          {item.links.map((element, index) => (
            <a href={element.link} key={index}>
              {element.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdVersion;
