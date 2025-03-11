import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          name:" Date",
          categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN','JUL']
        }
      },
      series: [
        {
          name: "Cycling",
          data: [30, 40, 45, 50, 49, 60, 70]
        }
      ]
    };
  }

  render() {
    return (
      <div className="BarChart">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default BarChart;