import React from "react";
import "./../CSS/production/Containers.css";

const SecondVersion = ({ item }) => {
  return (
    <div
      className="banner"
      style={{
        background: `url("${item.img}")center/cover no-repeat`,
      }}
    >
      <div className={item.theme} style={{ top: `${item.style.top}` }}>
        <h2 style={{ fontSize: `${item.style.fontsize.h2}` }}>{item.title}</h2>
        <h3
          style={{
            fontSize: `${item.style.fontsize.h3}`,
          }}
        >
          {item.subtitle}
        </h3>
        <div className="links">
          {item.links.map((element, index) => (
            <a key={index} href={element.link}>
              {element.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondVersion;
