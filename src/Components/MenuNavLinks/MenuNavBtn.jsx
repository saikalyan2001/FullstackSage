import React from "react";
import CustomInfoBtn from "./CustomInfoBtn";
import { MdKeyboardArrowRight } from "react-icons/md";

const MenuNavBtn = ({ menuItem }) => {
  const { id, label, icon, icon2, isActive } = menuItem;

  const talentData = [
    {
      id: 1,
      t1: "Post a job and hire a pro",
      t2: "Talent Marketplace",
      icon: <MdKeyboardArrowRight />,
    },
    {
      id: 2,
      t1: "Browse and buy projects",
      t2: "Project Catalog",
      icon: <MdKeyboardArrowRight />,
    },
    {
      id: 3,
      t1: "Get advice from an industry expert",
      t2: "Consultations",
      icon: <MdKeyboardArrowRight />,
    },
  ];

  return (
    <>
      <div
        className={`flex justify-between items-center text-sm ${
          isActive && "bg-gray-400 h-16"
        } group`}
      >
        <p className="mx-4">{label}</p>
        <p className="mx-4 group-hover:text-green-600">
          {isActive ? icon2 : icon}
        </p>
      </div>

      <div>
        {isActive && id === 1 && (
          <div className="space-y-10">
           { talentData.map((data) => (
            <div className="">
              <CustomInfoBtn data={data} />
            </div>
            )) }
          </div>
        )}
      </div>
      <div>{isActive && id === 2 && <p>FullstackSage</p>}</div>
      <div>{isActive && id === 3 && <p>Why FullstackSage</p>}</div>
      <div>{isActive && id === 4 && <p>New</p>}</div>
    </>
  );
};

export default MenuNavBtn;
