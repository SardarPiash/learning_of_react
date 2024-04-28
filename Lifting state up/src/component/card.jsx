import React, { useState } from "react";

export default function Card({ title, children, isActive, activeIndex }) {
  return (
    <div>
      <div style={{ border: "2px solid black", margin: "5px" }}>
        <h3>{title}</h3>
        {isActive ? (
          <p>{children}</p>
        ) : (
          <button
            style={{ marginLeft: "4px", marginBottom: "4px" }}
            onClick={activeIndex}
          >
            show
          </button>
        )}
      </div>
    </div>
  );
}
