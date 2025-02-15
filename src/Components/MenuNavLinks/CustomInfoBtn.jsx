import React from "react";

const CustomInfoBtn = ({data}) => {
    const {t1, t2, icon} = data

  return (
    <div>
      <div className="flex justify-between items-center mt-4 mx-4 group">
       <div className="space-y-4">
       <p>{t1}</p>
       <p className="group-hover:text-green-600">{t2}</p>
       </div>

        <p className="group-hover:text-green-600">{icon}</p>
      </div>
    </div>
  );
};

export default CustomInfoBtn;
