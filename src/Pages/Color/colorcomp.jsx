import React, { useState } from "react";
import { AiFillCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";

const Colorcomp = () => {
  const chap = ["<"];
  const ong = [">"];
  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const [color, setColor] = useState(false);
  const [color2, setColor2] = useState(false);
  const [color3, setColor3] = useState(false);
  return (
    <div className="grid xl:flex lg:grid lg:grid-cols-2 gap-6 -ml-2 mt-6">
      <div className="xl:w-[35%] lg:w-[30%] bg-white px-5 py-10">
        <p className="-mt-4 pb-4 text-xs font-bold"> Secondary Color</p>
        <div className="px-2">
          <div
            style={{
              backgroundColor: "#f6ffed",
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
            style={{ backgroundColor: "#95de64", height: "70px" }}
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
            style={{ backgroundColor: "#52c41a", height: "70px" }}
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
            style={{ backgroundColor: "#237804", height: "70px" }}
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
            style={{ backgroundColor: "#092b00", height: "70px" }}
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
          <div className="flex justify-end pt-4 gap-4 px-2 pb-4">
            <button>
              <AiOutlineCopy />
            </button>
            <button onClick={() => setColor2(!color2)}>
              <AiFillCode />
            </button>
          </div>
          {color2 && (
            <pre style={{ background: "#2b2b2b", color: "", padding: "10px" }}>
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
                      {ong}
                    </span>
                  </span>
                </span>
              </code>
            </pre>
          )}
        </div>
      </div>
      <div className="xl:w-[36%] lg:w-[30%] px-6 py-10 bg-white">
        <p className="-mt-4 pb-4 text-xs font-bold"> Primary Color</p>
        <div
          style={{
            backgroundColor: "#fff1f0",
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
          style={{ backgroundColor: "#ff7875", height: "70px" }}
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
          style={{ backgroundColor: "#f5222d", height: "70px" }}
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
          style={{ backgroundColor: "#a8071a", height: "70px" }}
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
          style={{ backgroundColor: "#5c0011", height: "70px" }}
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
            <pre style={{ background: "#2b2b2b", color: "", padding: "10px" }}>
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
              backgroundColor: "#fffbe6",
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
            style={{ backgroundColor: "#ffd666", height: "70px" }}
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
            style={{ backgroundColor: "#faad14", height: "70px" }}
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
            style={{ backgroundColor: "#ad6800", height: "70px" }}
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
            style={{ backgroundColor: "#613400", height: "70px" }}
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
            <pre style={{ background: "#2b2b2b", color: "", padding: "10px" }}>
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
                      {chap}h bgcolor="primary.lighter" <br /> dark data color:
                      '#e6f7ff', label: 'Blue-1'
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
                      {chap}primary.lighter" <br /> dark data color: '#e6f7ff',
                      label: 'Blue-1'
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
  );
};

export default Colorcomp;
