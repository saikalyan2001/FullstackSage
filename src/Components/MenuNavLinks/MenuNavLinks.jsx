import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown, IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import MenuNavBtn from "./MenuNavBtn";
import CustomSignUpBtn from "./CustomSignUpBtn";
import { Link } from "react-router-dom";

const MenuNavLinks = ({ setIsMenu, isMenu }) => {
  const [menuNavItems, UpdateMenuNavItems] = useState([
    {
      id: 1,
      label: "Find talent",
      icon: <IoIosArrowDown />,
      icon2: <IoIosArrowUp />,
      isActive: false,
    },
    {
      id: 2,
      label: "Find work",
      icon: <IoIosArrowDown />,
      icon2: <IoIosArrowUp />,
      isActive: false,
    },
    {
      id: 3,
      label: "Why FullstackSage",
      icon: <IoIosArrowDown />,
      icon2: <IoIosArrowUp />,
      isActive: false,
    },
    {
      id: 4,
      label: "What's new",
      icon: <IoIosArrowDown />,
      icon2: <IoIosArrowUp />,
      isActive: false,
    },
    { id: 5, label: "Enterprise", icon: null },
    { id: 6, label: "Pricing", icon: null },
    { id: 7, label: "Log in", icon: null },
  ]);


  const handleNavLinks = (id) => {
    UpdateMenuNavItems((items) =>
      items.map((item) => ({
        ...item,
        isActive: item.id === id ? !item.isActive : false,
      }))
    );
  };

 

  return (
    <div className="bg-white z-10 inset-0 absolute top-0">
      <div className="w-[93%] h-[90%] border relative">
        <div className="flex justify-between items-center p-3 border-b">
          <div className="flex gap-2">
            <button>
              <IoMdClose
                className="text-3xl"
                onClick={() => setIsMenu(!isMenu)}
              />
            </button>
            <h1 className="font-bold text-lg cursor-pointer" onClick={() => setIsMenu(!isMenu)} >FullstackSage</h1>
          </div>
          <IoSearch className="text-2xl" />
        </div>

        <div className="space-y-12 mt-6 mb-32">
          {menuNavItems.map((menuItem) => (
            <div
              key={menuItem.id}
              className="cursor-pointer"
              onClick={() => handleNavLinks(menuItem.id)}
            >
              <MenuNavBtn menuItem={menuItem} />
            </div>
          ))}
        </div>

       <Link to="signup">
       <div className="border">
          <CustomSignUpBtn label="Sign up"/>
        </div>
       </Link>
      </div>

    </div>
  );
};

export default MenuNavLinks;
