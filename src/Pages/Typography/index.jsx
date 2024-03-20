import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Typography = () => {
  const chap = ["<"];
  const ong = [">"];
  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  const [color10, setColor10] = useState(false);
  const [color12, setColor12] = useState(false);
  const [color1, setColor1] = useState(false);
  const [color123, setColor123] = useState(false);
  const [color20, setColor20] = useState(false);
  const [color120, setColor120] = useState(false);
  const [color100, setColor100] = useState(false);
  const [color1000, setColor1000] = useState(false);
  const [color200, setColor200] = useState(false);
  const [color2000, setColor2000] = useState(false);
  const [color300, setColor300] = useState(false);

  return (
    <div>
      <div className="grid gap-4">
        <p className="text-sm font-medium">
          <NavLink to="/" className="text-gray-400 font-normal pr-2">
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
              <button onClick={() => setColor1(!color1)}>
                <AiOutlineCode />
              </button>
            </div>
            {color1 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor123(!color123)}>
                <AiOutlineCode />
              </button>
            </div>
            {color123 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor100(!color100)}>
                <AiOutlineCode />
              </button>
            </div>
            {color100 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor1000(!color1000)}>
                <AiOutlineCode />
              </button>
            </div>
            {color1000 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor200(!color200)}>
                <AiOutlineCode />
              </button>
            </div>
            {color200 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor2000(!color2000)}>
                <AiOutlineCode />
              </button>
            </div>
            {color2000 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor120(!color120)}>
                <AiOutlineCode />
              </button>
            </div>
            {color120 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="w-[50%]">
          <div className="bg-white grid gap-8 py-6 px-4 border mt-7">
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
              <button onClick={() => setColor20(!color20)}>
                <AiOutlineCode />
              </button>
            </div>
            {color20 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor300(!color300)}>
                <AiOutlineCode />
              </button>
            </div>
            {color300 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor12(!color12)}>
                <AiOutlineCode />
              </button>
            </div>
            {color12 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
          <div className="bg-white grid gap-2 py-10 px-4 border mt-7">
            <p className="text-xs font-semibold -mt-4"> Link</p>
            <div className="grid gap-4">
              <p className="text-sm font-light text-blue-600">www.mantis.com</p>
              <p className="text-xs font-normal text-[rgb(140, 140, 140)]">
                Size: 12px / Weight: Regular / Line Height: 20px
              </p>
            </div>
            <div className="flex justify-end text-gray-400 gap-6 mt-8">
              <AiOutlineCopy />
              <button onClick={() => setColor(!color)}>
                <AiOutlineCode />
              </button>
            </div>
            {color && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
          <div className="bg-white grid gap-2 py-6 px-4 border mt-7">
            <p className="text-xs font-semibold pb-3"> Colors</p>
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
              <button onClick={() => setColor10(!color10)}>
                <AiOutlineCode />
              </button>
            </div>
              {color10 && (
                <pre
                  style={{ background: "#2b2b2b", color: "", padding: "10px" }}
                >
                  <code className="w-10" style={{ fontSize: "12px" }}>
                    <span> 1.</span>
                    <span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}
                          No display name
                          {ong}
                        </span>
                      </span>
                      <br />
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}h bgcolor="primary.lighter" <br /> dark data
                          color: '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}ter" <br /> dark data color: '#e6f7ff', label:
                          'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}primary.lighter" <br /> dark data color:
                          '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                    </span>
                    <br />
                    <span> 1.</span>
                    <span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}
                          No display name
                          {ong}
                        </span>
                      </span>
                      <br />
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}h bgcolor="primary.lighter" <br /> dark data
                          color: '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}ter" <br /> dark data color: '#e6f7ff', label:
                          'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}primary.lighter" <br /> dark data color:
                          '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                    </span>
                    <span>
                      <br />
                      1.
                    </span>
                    <span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}
                          No display name
                          {ong}
                        </span>
                      </span>
                      <br />
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}h bgcolor="primary.lighter" <br /> dark data
                          color: '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}ter" <br /> dark data color: '#e6f7ff', label:
                          'Blue-1'
                          {ong}
                        </span>
                      </span>
                      <span style={({ paddingLeft: "2%" }, pink)}>
                        <span>
                          {chap}primary.lighter" <br /> dark data color:
                          '#e6f7ff', label: 'Blue-1'
                          {ong}
                        </span>
                      </span>
                    </span>
                  </code>
                </pre>
              )}
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
              <button onClick={() => setColor2(!color2)}>
                <AiOutlineCode />
              </button>
            </div>
            {color2 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
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
              <button onClick={() => setColor3(!color3)}>
                <AiOutlineCode />
              </button>
            </div>
            {color3 && (
              <pre
                style={{ background: "#2b2b2b", color: "", padding: "10px" }}
              >
                <code className="w-10" style={{ fontSize: "12px" }}>
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <br />
                  <span> 1.</span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                  <span>
                    <br />
                    1.
                  </span>
                  <span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}
                        No display name
                        {ong}
                      </span>
                    </span>
                    <br />
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}h bgcolor="primary.lighter" <br /> dark data
                        color: '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}ter" <br /> dark data color: '#e6f7ff', label:
                        'Blue-1'
                        {ong}
                      </span>
                    </span>
                    <span style={({ paddingLeft: "2%" }, pink)}>
                      <span>
                        {chap}primary.lighter" <br /> dark data color:
                        '#e6f7ff', label: 'Blue-1'
                        {ong}
                      </span>
                    </span>
                  </span>
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typography;
