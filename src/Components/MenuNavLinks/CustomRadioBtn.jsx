import React from "react";
import { PiSuitcaseSimple } from "react-icons/pi";

const CustomRadioBtn = ({data}) => {

    const {id, icon, label, isActive} = data
    
  return (
    <div>
      <div className="border-2 border-gray-400 rounded-lg p-4 space-y-8">
        <div className="flex justify-between">
            <p className="text-2xl">{icon}</p>
            <input type="radio" checked={isActive ? true : false} className="scale-150" />
        </div>
        <p className="text-2xl">{label}</p>
      </div>
    </div>
  );
};

export default CustomRadioBtn;
