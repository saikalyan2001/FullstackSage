import React, { useState } from "react";

import { PiSuitcaseSimple } from "react-icons/pi";
import { AiOutlineLaptop } from "react-icons/ai";
import CustomRadioBtn from "./CustomRadioBtn";
import CustomSignUpBtn from "./CustomSignUpBtn";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const [workType, setWorkType] = useState([
    {
      id: 1,
      icon: <PiSuitcaseSimple />,
      label: "I'm client, hiring for a project",
      isActive: false,
      btnLabel: "Join as a Client",
    },
    {
      id: 2,
      icon: <AiOutlineLaptop />,
      label: "I'm a freelancer,looking for work",
      isActive: false,
      btnLabel: "Apply as a Freelancer",
    },
  ]);

  const handleActive = (id) => {
    setWorkType((types) =>
      types.map((type) => ({
        ...type,
        isActive: type.id === id ? !type.isActive : false,
      }))
    );
  };

  return (
    <div className="bg-white z-10 inset-0 absolute top-0">
      <div className="p-4">
        <h1 className="font-bold text-lg">FullstackSage</h1>

        <div className="">
          <p className="mt-10 text-2xl text-center mb-8">
            Join as a client or freelancer
          </p>

          <div className="space-y-4 relative">
            {workType.map((data) => (
              <div key={data.id} onClick={() => handleActive(data.id)}>
                <CustomRadioBtn data={data} />
              </div>
            ))}

            <div className="absolute left-0 right-0 -bottom-20">
              {workType.some((data) => data.isActive) ? (
                workType
                  .filter((data) => data.isActive)
                  .map((data) => (
                    <CustomSignUpBtn
                      key={data.id}
                      label="Create Account"
                      data={data}
                    />
                  ))
              ) : (
                <CustomSignUpBtn label="Create Account" data={null} />
              )}
            </div>
          </div>

          <div className="text-center mt-20">
            <p>
              Already have an account?{" "}
              <Link to="/login">
                <span>Log In</span>{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
