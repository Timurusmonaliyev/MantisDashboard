import { Card, CardContent } from "@mui/material";
import React from "react";
import LineCharts from "./linecharts";

const Firstchart = () => {
  return (
    <div>
      <Card>
          <div>
            <LineCharts />
          </div>
      </Card>
    </div>
  );
};

export default Firstchart;
