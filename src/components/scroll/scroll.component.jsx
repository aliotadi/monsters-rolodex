import React from "react";

export const Scroll = ({ children }) => {
  return (
    <div
      style={{ overflow: "scroll", border: "5px solid black", height: "800px" }}
    >
      {children}
    </div>
  );
};
