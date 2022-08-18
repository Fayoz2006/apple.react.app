import React from "react";
import "./../../CSS/production/Containers.css";

const FirstVersion = ({ item }) => {
  return (
    <div
      className="banner"
      style={{
        background: `url("${item.img}")center/cover no-repeat`,
      }}
    >
      <div
        className={item.theme}
        style={{ left: `${item.style.left}`, top: `${item.style.top}` }}
      >
        <h2 style={{ fontSize: `${item.style.fontsize}` }}>{item.title}</h2>
        <h3
          style={{
            background: `url(${item.subtitleImg})center/cover no-repeat`,
            width: `${item.style.width}`,
            height: `${item.style.height}`,
          }}
        >
          {" "}
        </h3>
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

export default FirstVersion;
