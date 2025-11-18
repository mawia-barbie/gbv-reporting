import React from "react";

export const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md border border-gray-200 transition hover:shadow-lg ${className}`}
    >
      {children}
    </div>
  );
};
