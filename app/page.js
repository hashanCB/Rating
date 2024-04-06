"use client";
// page.js
import React, { useState } from "react";
import Start from "./start";

const Page = () => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [hoveredValue, setHoveredValue] = useState(null);

  const handleStarClick = (value) => {
    setSelectedValue(value);
  };

  const handleStarHover = (value) => {
    setHoveredValue(value);
  };

  const handleStarMouseOut = () => {
    setHoveredValue(null);
  };

  const renderStars = () => {
    const stars = [];
    for (let index = 0; index < 5; index++) {
      stars.push(
        <Start
          key={index}
          value={index + 1}
          filled={index < hoveredValue}
          onClick={handleStarClick}
          onMouseOver={handleStarHover}
          onMouseOut={handleStarMouseOut}
        />
      );
    }
    return stars;
  };

  return <div className="flex">{renderStars()}</div>;
};

export default Page;
