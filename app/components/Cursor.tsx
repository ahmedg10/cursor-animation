import React from "react";
export default function Cursor() {
  const size = 20;
  return (
    <div
      className="fixed top-0 left-0 rounded-full bg-orange-500"
      style={{
        width: size,
        height: size,
      }}
    />
  );
}
