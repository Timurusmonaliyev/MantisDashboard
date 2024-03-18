import { AiFillCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import React, { useState } from "react";
import Colorcomp from "./colorcomp";
// import { color } from "framer-motion";

const Color = () => {
  const chap = ["<"];
  const ong = [">"];
  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);

  return (
    <div>
      <div className="xl:flex gap-6 grid">
        <div className="xl:w-[36%] px-6 py-10 bg-white">
          <p className="-mt-4 pb-4 text-xs font-bold"> Primary Color</p>
          <div
            style={{
              backgroundColor: "#e6f7ff",
              height: "70px",
              alignItems: "center",
            }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#bae7ff", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#91d5ff", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#69c0ff", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#40a9ff", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#1890ff", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#096dd9", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#0050b3", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#003a8c", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundColor: "#002766", height: "70px" }}
            className="p-4"
          >
            <div className="flex justify-around items-center">
              <div>
                <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
              </div>
              <div>
                <p> primary.lighter</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor(!color)}>
                <AiFillCode />
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
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[35%] lg:w-[30%] bg-white px-6 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#fafafa",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#f5f5f5", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#f0f0f0", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#d9d9d9", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#bfbfbf", height: "70px" }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#8c8c8c",
                height: "70px",
                color: "white",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#595959",
                height: "70px",
                color: "white",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#262626",
                height: "70px",
                color: "white",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#141414",
                height: "70px",
                color: "white",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{
                backgroundColor: "#000000",
                height: "70px",
                color: "white",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor2(!color2)}>
                <AiFillCode />
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
                </code>
              </pre>
            )}
          </div>
        </div>
        <div className="xl:w-[35%] lg:w-[30%] h-[50vh] bg-white px-6 py-10">
          <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
          <div className="px-2">
            <div
              style={{
                backgroundColor: "#fafafa",
                height: "70px",
                alignItems: "center",
              }}
              className="p-4"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#434343", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#000000", height: "70px" }}
              className="p-4 text-white"
            >
              <div className="flex justify-around items-center">
                <div>
                  <p style={{ fontSize: "12px" }}> Blue-1</p> <p> #e6f7ff</p>
                </div>
                <div>
                  <p> primary.lighter</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
              <button>
                <AiOutlineCopy />
              </button>
              <button onClick={() => setColor3(!color3)}>
                <AiFillCode />
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
                </code>
              </pre>
            )}
          </div>
        </div>
      </div>
      <Colorcomp />
    </div>
  );
};

export default Color;
