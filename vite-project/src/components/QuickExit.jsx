import React from "react";

export const QuickExit = () => {
  const handleExit = () => {
    // Immediately redirect to Google
    window.location.href = "https://www.google.com";
  };

  return (
    <button
      onClick={handleExit}
      className="fixed top-4 right-4 px-3 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600 transition"
    >
      Quick Exit
    </button>
  );
};
