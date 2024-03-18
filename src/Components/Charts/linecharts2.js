import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";
export default class LineCharts2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [40, 22, 28, 22, 30, 56],
          color: "#FAAD14",
        },
        {
          name: "Revenue",
          data: [28, 20, 22, 38, 28, 30],
          color: "#1677FF",
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 6,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "Aug",
            "Sep",
            "Oct",
          ],
        },
        fill: {
          opacity: 1,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return "$ " + val + " thousands";
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div>
        <div className="px-6 py-2">
        <p>
          Net Profit
        </p>
        <p>
          $1560
        </p>
        </div>
        <div>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height={450}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
