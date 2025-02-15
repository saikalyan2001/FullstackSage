import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const MenuNavBtn = ({ menuItem }) => {
  const { id, label, icon, icon2, isActive } = menuItem;

  return (
    <>
      <div className="flex justify-between text-sm">
        <p>{label}</p>
        <p>{isActive ? icon2 : icon}</p>
      </div>

      <div>{isActive && id === 1 && <p>Talent</p>}</div>
      <div>{isActive && id === 2 && <p>FullstackSage</p>}</div>
      <div>{isActive && id === 3 && <p>Why FullstackSage</p>}</div>
      <div>{isActive && id === 4 && <p>New</p>}</div>
    </>
  );
};

export default MenuNavBtn;
