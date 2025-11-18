import React from "react";

export const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-lg font-semibold text-white bg-primary hover:bg-primary/90 transition ${className}`}
    >
      {children}
    </button>
  );
};
