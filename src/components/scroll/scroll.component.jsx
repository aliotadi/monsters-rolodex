import React from "react";

export const Scroll = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", paddingTop: "20px", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};
