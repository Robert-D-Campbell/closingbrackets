"use client"; // Add this line to mark the component as a Client Component

import React, { useEffect } from 'react';

const Percentage = () => {
  const updateScrollPercentage = () => {
    const percentageBar = document.querySelector(".percentage-bar");
    if (percentageBar) {
      const scrollTop = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      const percentage =
        Math.floor((scrollTop / (documentHeight - windowHeight)) * 100) + "%";

      percentageBar.style.width = percentage;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollPercentage);
    window.addEventListener("load", updateScrollPercentage);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
      window.removeEventListener("load", updateScrollPercentage);
    };
  }, []);

  return (
    <div className="percentage-bar"></div>
  );
};

export default Percentage;
