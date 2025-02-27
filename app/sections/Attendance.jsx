import React from "react";
import MonthSelector from "../components/MonthSelector";
import TableTwo from "../components/table/TableOne";
import PieChart from "../components/charts/PieChart2";

const Attendance = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full p-10 h-[13%]  border-b">
        <p className="text-2xl font-medium">Attendance</p>
      </div>

      <div
        className="md:w-[120vw] h-full   xl:w-full
     "
      >
        <MonthSelector />
        <div className="flex w-full pr-5 justify-between py-5 items-center">
          <div className="w-1/3 ">
            <PieChart />
          </div>{" "}
          <div className="flex flex-wrap w-2/3 justify-between gap-3  items-center">
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%] ">
              <p className="text-lg">184:00:00</p>
              <p className="text-sm text-gray-400">Total schedule hour</p>
            </div>
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
              <p className="text-lg">00:00:00</p>
              <p className="text-sm text-gray-400">Leave hour(paid)</p>
            </div>
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
              <p className="text-lg">100%</p>
              <p className="text-sm text-gray-400">Total work availability</p>
            </div>
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
              <p className="text-lg">184:00:00</p>
              <p className="text-sm text-gray-400">Total work hour</p>
            </div>
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
              <p className="text-lg">184:00:00</p>
              <p className="text-sm text-gray-400">Balance(Extra)</p>
            </div>
            <div className="flex justify-center rounded-sm bg-gray-100 flex-col items-center py-6 px-10 w-[30%]">
              <p className="text-lg">Late</p>
              <p className="text-sm text-gray-400">Average Behaviour</p>
            </div>
          </div>
        </div>
        <TableTwo
          cols={10}
          headers={[
            "Date",
            "Punched in",
            "In Geolocation",
            "Punched Out",
            "Out Geolocation",
            "Behavior",
            "Type",
            "Break time",
            "Total hours",
            "Entry",
            ,
          ]}
        />
      </div>
    </div>
  );
};

export default Attendance;
