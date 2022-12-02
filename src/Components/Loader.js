import React from "react";

export default function Loader() {
  return (
    <div className="loadmain">
      <div className="loader">
        <span
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            lineHeight: "1cm",
          }}
        >
          TechSpaces are Loading...
        </span>
      </div>
    </div>
  );
}
