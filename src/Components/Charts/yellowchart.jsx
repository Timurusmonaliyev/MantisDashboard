import React from "react";
import { LineChart } from "@mui/x-charts";
import { Card } from "@mui/material";

const Yellowchart = () => {
  return (
    <div className="card">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          padding: "12px 0px",
        }}
      >
        <div>
          <p> Company Finance Growth</p>
        </div>
        <div>
          <p style={{ fontWeight: "600", fontSize: "16px" }}> +45.14%</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          padding: "12px 0px",
        }}
      >
        <div>
          <p> Company Finance Growth</p>
        </div>
        <div>
          <p style={{ fontWeight: "600", fontSize: "16px" }}> +45.14%</p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "14px",
          padding: "12px 0px",
        }}
      >
        <div>
          <p> Company Finance Growth</p>
        </div>
        <div>
          <p style={{ fontWeight: "600", fontSize: "16px" }}> +45.14%</p>
        </div>
      </div>
      <LineChart
        // xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 3, 8.6, 2, 1.5, 5,],
            color: "#FBB937",
          },
        ]}
        height={500}
        width={440}
      />
    </div>
  );
};

export default Yellowchart;
