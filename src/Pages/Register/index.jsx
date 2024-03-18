import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import React from "react";

const Register = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[40%] shadow-lg justify-center flex py-10 px-10">
        <div className="grid gap-7 justify-center w-[100%]">
          <div className="flex gap-32 items-center w-full">
            <p className="text-[22px] font-semibold"> Sign Up</p>
            <p className="text-[12px] text-blue-600">
              Already have an account?
            </p>
          </div>
          <div className="flex gap-2 justify-between">
            <div className="grid">
              <label htmlFor="" className="text-xs">
                Company
              </label>
              <input
                type="text"
                placeholder=""
                value="info"
                className="border outline-blue-300 hover:border-blue-300 pl-2 py-2 w-[140px]"
              />
            </div>
            <div className="grid">
              <label htmlFor="" className="text-xs">
                Company
              </label>
              <input
                type="text"
                placeholder=""
                value="info"
                className="border outline-blue-300 hover:border-blue-300 pl-2 py-2 w-[140px]"
              />
            </div>
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Company
            </label>
            <input
              type="text"
              placeholder=""
              value="info@codedthemes.com"
              className="border outline-blue-300 hover:border-blue-300 pl-2 py-2"
            />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Email Address*
            </label>
            <input
              type="text"
              placeholder=""
              value="info@codedthemes.com"
              className="border outline-blue-300 hover:border-blue-300 pl-2 py-2"
            />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Password
            </label>
            <input
              type="password"
              placeholder=""
              value="123456"
              className="border outline-red-400 hover:border-red-600 pl-2 py-2"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" placeholder="" />
              <span className="text-sm"> Keep me sign in</span>
            </div>
            <p className="text-sm"> Forgot Password</p>
          </div>
          <button className="py-2 bg-blue-600 text-white rounded-md">
            Sign up with
          </button>
          <p className="text-center text-xs"> Login with</p>
          <div className="flex gap-4">
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <FcGoogle /> Google
            </div>
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <AiOutlineTwitter color="blue" /> Twitter
            </div>
            <div className="border-[1.8px] border-gray-300 flex gap-4 items-center px-2 rounded">
              <CgFacebook color="blue" /> Facebook
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
