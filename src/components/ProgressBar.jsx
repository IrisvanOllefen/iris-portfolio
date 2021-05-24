import React from "react";

export function ProgressBar({ rating }) {
  return (
    <div className="flex bg-purple-50  w-full h-6 shadow-inner rounded-2xl">
      <div
        className={`bg-purple-700 inline-block w-${rating}/12 z-10 shadow-2xl rounded-tl-2xl rounded-bl-2xl`}
      ></div>
    </div>
  );
}
