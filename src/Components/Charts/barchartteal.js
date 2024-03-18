import ReactApexChart from "react-apexcharts";
import React, { Component } from "react";
export default class BarChartteal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Net Profit",
          data: [30, 40, 50, 56, 61, 58, 66],
          width:'2000px',          color: "#74E0DA",
        },
      ],
      options: {
        chart: {
          type: "bar",
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
          width: 2,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "Feb",
            "Mar",
            "Apr",
            "May",
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
        <div>
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            width={500}
            height={400}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    );
  }
}
