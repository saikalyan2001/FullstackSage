import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";

const CustomRadioBtn = ({data}) => {

    const {id, icon, label, isActive} = data
    
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-lg p-4 space-y-4">
        <div className="flex justify-between">
            <p>{icon}</p>
            <input type="radio" checked={isActive ? true : false} />
        </div>
        <p>{label}</p>
      </div>
    </div>
  );
};

export default CustomRadioBtn;
