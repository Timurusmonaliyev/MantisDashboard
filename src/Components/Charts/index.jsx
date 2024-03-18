import React from "react";
import "./linecharts";
import "./style.css";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Listmain from "./listmain";
import LineCharts2 from "./linecharts2";
import Firstchart from "./firstchart";
import BarChartteal from "./barchartteal";
import Tabledashboard from "./tabledashboard";
import Yellowchart from "./yellowchart";
import "./style.css";
// import { BarChart } from "@mui/x-charts/BarChart";
// import { LineChart } from "@mui/x-charts";
// import LineCharts from "./linecharts";

function Chart() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto",
        justifyContent: "center",
      }}
      className="cols2 grid md:grid lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-x mt-[3%] gap-6"
    >
      <div>
        <p> Unique Visitor</p>
      </div>
      <div style={{display:'flex', gap:'10px'}}>
        <div>
          <button> Month</button>
          <button> Month</button>
        </div>
        <div>
          <p> Income Overview</p>
        </div>
      </div>
      <Card style={{ width: "100%", marginLeft: "10px" }}>
        <Firstchart />
      </Card>
      <Card style={{ width: "100%", marginLeft: "10px" }}>
        <BarChartteal />
      </Card>
      <div>
        <Typography sx={{ fontWeight: "bold" }}> Recent Orders</Typography>
      </div>
      <div>
        <Typography sx={{ fontWeight: "bold" }}> Analytics Report</Typography>
      </div>
      <Card style={{ width: "100%", marginLeft: "10px" }}>
        <Tabledashboard />
      </Card>
      <Card style={{ width: "100%", marginLeft: "10px" }}>
        <Yellowchart />
      </Card>
      <Card style={{ width: "100%", marginLeft: "10px" }}>
        <LineCharts2 />
      </Card>
      <Box>
        <Listmain />
      </Box>
    </div>
  );
}

export default Chart;
