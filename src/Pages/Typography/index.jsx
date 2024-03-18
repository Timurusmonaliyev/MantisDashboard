import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import React from "react";
import { NavLink } from "react-router-dom";

const Typography = () => {
  return (
    <div>
      <div className="grid gap-4">
        <p className="text-sm font-medium">
          <NavLink to="/" className="text-gray-400 font-normal">
            Home
          </NavLink>
          / Typography
        </p>
        <p className="text-sm font-semibold pb-6"> Typography</p>
      </div>
      <div className="flex justify-between gap-6">
        <div className="w-[50%] grid gap-4">
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Basic</p>
            <div>
              <p className="text-[34px] font-semibold"> Inter</p>
              <p className="text-sm font-semibold"> Font Family</p>
              <p className="text-sm font-normal text-gray-400">
                Regular / Medium / Bold
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 px-4 py-8  border mt-7">
            <p className="text-xs font-semibold"> Heading</p>
            <div className="grid gap-2">
              <p className="font-semibold text-[36px]"> H1 Heading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size: 38px / Weight: Bold / Line Height: 46px
              </span>
            </div>
            <div className="grid gap-2">
              <p className="font-semibold text-[28px]"> H2 Heading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size: 30px / Weight: Bold / Line Height: 38px
              </span>
            </div>
            <div className="grid gap-2">
              <p className="font-semibold text-[22px]"> H3 Heading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size: 24px / Weight: Bold / Line Height: 32px
              </span>
            </div>
            <div className="grid gap-2">
              <p className="font-semibold text-[20px]"> H4 Heading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size: 20px / Weight: Bold / Line Height: 28px
              </span>
            </div>
            <div className="grid gap-2">
              <p className="font-semibold text-[16px]"> H5 Heading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size 16px / Weight: Bold / Line Height: 24px
              </span>
            </div>
            <div className="grid gap-2">
              <p className="font-normal text-[14px]">H6 Heading / Subheading</p>
              <span className="text-xs text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Bold / Line Height: 22px
              </span>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border">
            <p className="text-xs font-semibold"> Body 1</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border">
            <p className="text-xs font-semibold"> Body 2</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border">
            <p className="text-xs font-semibold"> Subtitle 1</p>
            <div className="grid gap-4">
              <p className="text-xs font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border">
            <p className="text-xs font-semibold"> Subtitle 2</p>
            <div className="grid gap-4">
              <p className="text-[11px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border">
            <p className="text-xs font-semibold"> Caption</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <div className="bg-white grid4gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Alignment</p>
            <div className="grid gap-4">
              <p className="text-[10px] font-normal text-right">
                Lorem ipsum dolor sit amet, consectetur aliqua adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <p className="text-[10.6px] font-normal text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[10.6px] font-normal text-right">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Gutter Bottom</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-[10.6px] font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Overline</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISICING ELIT, SED DO
                EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-2 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Link</p>
            <div className="grid gap-4">
              <p className="text-sm font-light text-blue-600">www.mantis.com</p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-2 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Colors</p>
            <div className="grid gap-4">
              <p className="text-sm font-light text-black">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-gray-600">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-blue-600">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-gray-400">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-black">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-orange-400">
                This is textPrimary text color.
              </p>
              <p className="text-sm font-light text-red-400">
                This is textPrimary text color.
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Paragraph</p>
            <div className="grid gap-4">
              <p className="text-xs font-normal">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold"> Font Style</p>
            <div className="grid gap-4">
              <i className="text-[12px] font-light">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
              <i className="text-[12px] font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </i>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 14px / Weight: Italic Regular & Italic Bold / Line Height:
                22px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6">
              <AiOutlineCopy />
              <AiOutlineCode />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
