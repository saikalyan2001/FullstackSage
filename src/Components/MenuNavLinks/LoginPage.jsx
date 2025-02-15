import React, { useRef, useState } from "react";
import CustomBtn from "./CustomBtn";
import { LuUserRound } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [btnData, UpdateBtnData] = useState([
    {
      id: 1,
      label: "Continue",
      bgC: "bg-green-600 hover:bg-green-500",
      tC: "text-white",
      w: "w-full",
    },
    {
      id: 2,
      label: "Continue with Google",
      icon: <FcGoogle />,
      bgC: "bg-blue-500",
      tC: "text-white",
      w: "w-full",
      pad: "p-3",
    },
    {
      id: 3,
      label: "Continue with Apple",
      icon: <FaApple />,
      bgC: "bg-white",
      tC: "text-black",
      br: "border-2 border-black",
      w: "w-full",
    },
    {
      id: 4,
      label: "Sign Up",
      bgC: "bg-white",
      tC: "text-green-600 hover:text-green-500",
      br: "border-4 border-green-600 hover:border-green-500",
      w: "w-auto",
      pad: "px-10",
    },
  ]);

  const inputRef = useRef(null);

  return (
    <div className="bg-white z-10 inset-0 absolute top-0">
      <div className="flex flex-col text-center">
        <h1 className="font-bold text-xl mt-4">
          {" "}
          <Link to="/">FullstackSage </Link>
        </h1>
        <div className="space-y-6 mt-16">
          <p className="text-2xl">Log in to FullstackSage</p>

          <div
            className="mx-4 flex items-center border-2 border-gray-400 rounded-lg p-2 hover:outline focus-within:outline"
            onClick={() => inputRef.current?.focus()}
          >
            <LuUserRound className="mr-4 ml-2" />
            <input
              type="text"
              placeholder="Username or Email"
              ref={inputRef}
              className="w-full outline-none"
            />
          </div>

          <CustomBtn {...btnData[0]} />
        </div>

        <div className="m-8 flex items-center gap-3">
          <div className="h-px  w-full bg-gray-200"></div>
          <p className="text-gray-400">or</p>
          <div className="h-px  w-full bg-gray-200"></div>
        </div>
        <div className="space-y-6">
          <CustomBtn {...btnData[1]} className="" />

          <CustomBtn {...btnData[2]} />
        </div>

        <div className="space-y-6 mt-16">

          <div className="flex items-center gap-3 m-8">
            <div className="h-px  w-full bg-gray-200"></div>

            <p className="text-gray-500 whitespace-nowrap">
              Don't have an Upwork account?
            </p>
            <div className="h-px  w-full bg-gray-200"></div>
          </div>


          <Link to="/signup">
            <div className="flex justify-center  whitespace-nowrap">
              <CustomBtn {...btnData[3]} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
