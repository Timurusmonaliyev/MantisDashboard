import React, { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { AiOutlineCopy } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Shadow = () => {
  const chap = ["<"];
  const ong = [">"];
  const pink = {
    color: "rgb(255, 160, 122)",
  };
  const [color, setColor] = useState(false);
  return (
    <div>
      <div className="grid gap-6">
        <p className="text-sm font-medium">
          <NavLink to="/" className="text-gray-400 font-normal">
            Home
          </NavLink>
          / Shadow
        </p>
        <p className="text-sm font-semibold"> Shadow</p>
      </div>
      <div className="py-8 px-8 mt-4 bg-white rounded-lg">
        <div className="border-b-gray-100 border-b-[1px] pb-10">
          <p className="text-sm font-semibold"> Basic Shadow</p>
          <div className="grid grid-cols-2 md:grid md:grid-cols-4 lg:grid lg:grid-cols-5 xl:grid xl:grid-cols-6 gap-6">
            <div className="grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww">
              <p className="text-xs">boxShadow</p>
              <p> 0</p>
            </div>
            <div className="grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww2">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 1</p>
            </div>
            <div className="grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww3">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 2</p>
            </div>
            <div className="grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww4">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 3</p>
            </div>
            <div className="grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww5">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 4</p>
            </div>
            <div className="grid shadow-lg justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 5</p>
            </div>
            <div className="grid shadow-lg justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 6</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 7</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 8</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 9</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 10</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 11</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 12</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww14">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 13</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww15">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 14</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww16">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 15</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww17">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 16</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww18">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 17</p>
            </div>
            <div className="shadow-xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww19">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 18</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww20">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 19</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww21">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 20</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww22">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 21</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww23">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 22</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww24">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 23</p>
            </div>
            <div className="shadow-2xl grid justify-center items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww25">
              <p className="text-xs">boxShadow</p>
              <p className="text-sm py-2"> 24</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end text-gray-400 gap-6 py-4">
          <AiOutlineCopy />
          <button onClick={() => setColor(!color)}>
            <AiOutlineCode />
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
      <div className="bg-white mt-8 py-8 px-8">
        <div className="border-b-gray-100 border-b-[1px] pb-10">
          <p className="text-sm font-semibold pb-6"> Custom Shadow</p>
          <div className="shadow-xl grid justify-start w-[160px] items-center p-4 hover:shadow-none duration-500 pt-8 rounded-xl text-center shadoooww pl-10">
            <p className="text-xs text-center shadoooww py-2 pl-8"> z1</p>
          </div>
        </div>
        <div className="flex justify-end text-gray-400 gap-6 pt-4">
          <AiOutlineCopy />
          <button onClick={() => setColor(!color)}>
            <AiOutlineCode />
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
                    {chap}box-shadow" <br /> box-shadow: '10px 10px 10px 10px
                    gray', label: 'Blue-1'
                    {ong}
                  </span>
                </span>
                <span style={({ paddingLeft: "2%" }, pink)}>
                  <span>
                    {chap}box-shadow" <br /> box-shadow: '10px 10px 10px 10px
                    gray', label: 'Blue-1'
                    {ong}
                  </span>
                </span>
                <span style={({ paddingLeft: "2%" }, pink)}>
                  <span>
                    {chap}box-shadow" <br /> box-shadow: '10px 10px 10px 10px
                    gray', label: 'Blue-1'
                    {ong}
                  </span>
                </span>
              </span>
              <br />
            </code>
          </pre>
        )}
      </div>
    </div>
  );
};

export default Shadow;
