import React from "react";

const CustomBtn = ({ id, label, icon, bgC, tC, br, w, pad }) => {
  return (
    <div className="mx-4">
      <button
        className={`${bgC}   ${tC} ${
          br ? br : ""
        } ${w} p-2 ${pad} rounded-xl gap-4 relative`}
      >
        <span className="relative">{label}
        {icon && id === 3 && (
          <span
            className={`${id === 3 ? "absolute top-1 right-36" : " "}`}
          >
            {icon}{" "}
          </span>
        )}
        </span>
        {icon && id === 2 && (
          <span
            className={`${id === 2 ? "absolute top-1 left-1 text-2xl bg-white rounded-lg p-2 w-fit" : ""}`}
          >
            {icon}{" "}
          </span>
          )}
      </button>
    
    </div>
  );
};

export default CustomBtn;
