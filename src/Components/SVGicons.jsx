import React from "react";

const SVGicons = ({ icon }) => {
  switch (icon) {
    case "logo":
      return (
        <svg
          enableBackground="new 0 0 14 44"
          height="44"
          viewBox="0 0 14 44"
          width="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m0 0h14v44h-14z" fill="none" />
          <path
            d="m13.0729 17.5214c-.093.0723-1.7248.9915-1.7248 3.0364 0 2.3651 2.0759 3.2017 2.1379 3.2223-.0103.0516-.3305 1.1464-1.0948 2.2618-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6835-.9089-2.4787-2.0243c-.9192-1.3117-1.6628-3.3463-1.6628-5.2776 0-3.0984 2.014-4.7406 3.9969-4.7406 1.0535 0 1.9313.692 2.5923.692.63 0 1.6112-.7333 2.8092-.7333.4545.0001 2.0864.0415 3.1605 1.5803zm-3.7284-2.8918c.4957-.5887.8469-1.4046.8469-2.2205 0-.1136-.0103-.2272-.031-.3202-.8056.031-1.7661.5371-2.3445 1.2084-.4544.5164-.8779 1.3323-.8779 2.1586 0 .1239.0207.2479.031.2892.0516.0103.1343.0207.2169.0207.723-.0001 1.6318-.4855 2.1586-1.1362z"
            fill="#F5F5F7"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#F5F5F7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-search"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      );
    case "bag":
      return (
        <svg
          height="44"
          viewBox="0 0 13 44"
          width="13"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="m0 44h13v-44h-13z" />
            <path
              d="m12 25.9c0 .6-.5 1.1-1.1 1.1h-8.8c-.6 0-1.1-.5-1.1-1.1v-7.9c0-.5.5-1 1.1-1h8.9c.6 0 1.1.5 1.1 1.1v7.8zm-5.5-11.9c1.2 0 2.1.9 2.3 2h-4.6c.2-1.1 1.1-2 2.3-2zm4.4 2h-1.1c-.2-1.7-1.6-3-3.3-3s-3.1 1.3-3.3 3h-1.1c-1.2 0-2.1.9-2.1 2.1v7.9c0 1.1.9 2 2.1 2h8.9c1.1 0 2.1-.9 2.1-2.1v-7.9c-.1-1.1-1-2-2.2-2z"
              fill="#F5F5F7"
            />
          </g>
        </svg>
      );
    case "logo-mobile":
      return (
        <svg
          height="48"
          viewBox="0 0 17 48"
          width="17"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="m0 48h17v-48h-17z" />
            <path
              d="m8.7168 16.7837c-.097 0-.193-.012-.253-.024-.012-.048-.036-.193-.036-.337 0-.963.493-1.913 1.023-2.515.674-.782 1.793-1.372 2.731-1.408.024.109.036.241.036.373 0 .951-.409 1.902-.986 2.587-.614.759-1.673 1.324-2.515 1.324m6.858 2.045c-.108.085-2.009 1.156-2.009 3.538 0 2.755 2.419 3.73 2.491 3.754-.012.06-.385 1.336-1.276 2.636-.794 1.143-1.624 2.286-2.888 2.286-1.263 0-1.588-.735-3.044-.735-1.42 0-1.925.759-3.08.759-1.156 0-1.962-1.059-2.888-2.359-1.071-1.528-1.937-3.898-1.937-6.149 0-3.609 2.346-5.523 4.656-5.523 1.228 0 2.25.807 3.02.807.735 0 1.878-.854 3.273-.854.53 0 2.431.047 3.682 1.84"
              fill="#F5F5F7"
            />
          </g>
        </svg>
      );
    case "bag-mobile":
      return (
        <svg
          height="48"
          viewBox="0 0 15 48"
          width="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fillRule="evenodd">
            <path d="m0 48h15v-48h-15z" />
            <path
              d="m14 28.5c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5v-9.002c0-.828.673-1.5 1.5-1.5h10c.827 0 1.5.672 1.5 1.5zm-6.5-14c1.436 0 2.607 1.098 2.752 2.498h-5.504c.145-1.4 1.316-2.498 2.752-2.498zm5 2.498h-1.248c-.148-1.952-1.765-3.498-3.752-3.498s-3.604 1.546-3.752 3.498h-1.248c-1.378 0-2.5 1.121-2.5 2.5v9.002c0 1.378 1.122 2.5 2.5 2.5h10c1.378 0 2.5-1.122 2.5-2.5v-9.002c0-1.379-1.122-2.5-2.5-2.5z"
              fill="#F5F5F7"
            />
          </g>
        </svg>
      );
    default:
      break;
  }
};

export default SVGicons;
