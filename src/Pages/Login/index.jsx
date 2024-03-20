import { CgFacebook } from "react-icons/cg";
import { AiOutlineTwitter } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import React from "react";
import { Button, Card, TextField } from "@mui/material";

const Login = () => {
  return (
    <div className="flex justify-center">
      <Card className="w-[38%] shadow-lg justify-center flex py-10">
        <div className="grid gap-7 justify-center w-[100%]">
          <div className="flex gap-32 items-center w-full">
            <p className="text-[22px] font-semibold"> Login</p>
            <p className="text-[12px] text-blue-600"> Don't have an account?</p>
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Email Address
            </label>
            <TextField
              className="border outline-blue-300 hover:border-blue-300"
              required
              id="outlined-required"
              defaultValue="info@codedthemes.com"
            />
          </div>
          <div className="w-full grid gap-2">
            <label htmlFor="" className="text-xs">
              Password
            </label>
            <TextField
              className="border outline-blue-300 hover:border-blue-300 pl-2 py-2"
              required
              id="outlined-required"
              type="password"
              defaultValue="info@codedthemes.com"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <input type="checkbox" placeholder="" />
              <span className="text-sm"> Keep me sign in</span>
            </div>
            <p className="text-sm hover:underline"> Forgot Password</p>
          </div>
          <Button variant="contained" sx={{ background: "#1677FF" }}>
            Login
          </Button>
          <p className="text-center text-xs"> Login with </p>
          <div className="flex gap-4">
            <Button
              variant="outlined"
              sx={{ color: "black", fontSize: "10px", padding:'10px 20px', display:'flex', gap:'10px'}}
            >
              <FcGoogle size={20}/> <span>  Google</span>
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", fontSize: "10px", padding:'10px 20px', display:'flex', gap:'10px'}}
            >
              <AiOutlineTwitter color="#03A6F0" size={20}/> <span>  Twitter</span>
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "black", fontSize: "10px", padding:'10px 20px', display:'flex', gap:'10px'}}
            >
              <CgFacebook color="#4267B2" size={20}/> <span>  Facebook</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Login;
