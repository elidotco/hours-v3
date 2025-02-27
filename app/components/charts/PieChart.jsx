import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

const options = {
  chart: {
    fontFamily: "Poppins, sans-serif",
    type: "donut",
    height: 400,
  },
  colors: ["rgb(234, 131, 58)", "rgb(223, 71, 54)", "rgb(92, 222, 100)"],
  labels: ["Early", "Late", "Regular"],
  legend: {
    show: false,
    position: "bottom",
  },
  plotOptions: {
    pie: {
      donut: {
        size: "45%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 300,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const PieChart = () => {
  const [state, setState] = useState({
    series: [65, 34, 12],
  });

  const handleReset = () => {
    setState({
      series: [65, 34, 12],
    });
  };

  return (
    <div className="w-full   h-full rounded-md border-stroke bg-white  pb-5 pt-7.5 shadow-default dark:border-strokedark dark:bg-boxdark ">
      <div className="mb-3 justify-between w-full  gap-4 sm:flex">
        <div className="flex pb-5 px-7 items-center flex-wrap border-b w-full gap-2">
          <h5 className="text-xl  text-black dark:text-white">
            Total Attendance
          </h5>
          <p>Today - 144</p>
        </div>
      </div>

      <div className="mb-2 ">
        <div id="chartThree" className="  flex justify-center">
          <ReactApexChart
            options={options}
            series={state.series}
            type="donut"
            style={{
              zIndex: 0,
            }}
          />
        </div>
      </div>

      <div className=" flex flex-col flex-wrap w-full   gap-y-3">
        <div className="sm:w-1/2 w-full pl-5">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#ea833a]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Early </span>
              <span> 65 </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full  pl-5">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#df4736]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span> Late </span>
              <span> 34 </span>
            </p>
          </div>
        </div>
        <div className="sm:w-1/2 w-full pl-5">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-3 w-full max-w-3 rounded-full bg-[#5cde64]"></span>
            <p className="flex w-full justify-between text-sm  font-medium text-black  dark:text-white">
              <span> Regular </span>
              <span>45</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
