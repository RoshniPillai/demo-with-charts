import * as React from "react";
import { Chart } from "react-google-charts";
export const data = [
  ["Task", "Hours per Day"],
  ["Success", 70],
  ["Failure", 30]
];

export const options = {
  title: ""
};
export const datas = [
  [
    "label",
    "valu",
    { role: "style" },
    {
      sourceColumn: 0,
      role: "annotation",
      type: "string",
      calc: "stringify"
    }
  ],

  ["Active Branches", 10, "silver", null],
  ["Commits", 21, "color: #e5e4e2", null]
];

export const option = {
  title: "",
  width: 400,
  height: 200,
  bar: { groupWidth: "65%" },
  legend: { position: "none" }
};
// const rows = [
//   [new Date("2015-01-01 10:22:26"), 40, 50],
//   [new Date("2015-01-01 10:25:26"), 20, 80],
//   [new Date("2015-01-01 11:35:26"), 20, 80],
//   [new Date("2015-01-01 11:45:26"), 40, 50],
//   [new Date("2015-01-01 12:00:26"), 60, 30],
//   [new Date("2015-01-01 12:07:26"), 20, 80]
// ];

// const dateTicks = [
//   new Date("2015-01-01 10:07:26"),
//   new Date("2015-01-01 11:07:26"),
//   new Date("2015-01-01 12:07:26")
// ];
// const options = {
//   hAxis: {
//     format: "dd-MM-yyyy HH:MM",
//     ticks: dateTicks
//   }
// };
const columns = [
  { type: "string", id: "phases" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

const rows1 = [
  ["brach level 1", new Date(2016, 2, 20), new Date(2021, 5, 31)],
 ];
export const data1 = [
  ["stage", "percent"],
  ["stage 1 ", 11],
  ["stage 2", 5],
  ["stage 3", 5],
  ["stage 4", 2],
  ["stage 5", 7], // CSS-style declaration
];

export const options1 = {
  title: "",
  pieHole: 0.4,
  is3D: true,
};
//export const data = [columns, ...rows1];

function Details() {
  return (
    <div className="App">
         <p>Projects - Success and Failure rate</p>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      /> 
      <p>Projects- Branching Strategy</p>
       <Chart
        chartType="BarChart"
        width="100%"
        height="100px"
        data={datas}
        options={option}
      />  
      <p>last pipeline executed</p>
      <Chart chartType="Timeline"
       data={data} 
       width="100%" height="400px" />
       <p>project with least stages</p>
       <Chart
      chartType="PieChart"
      width="100%"
      height="300px"
      data={data1}
      options={options1}
    />
      {/* <Chart
        chartType={"LineChart"}
        columns={[
          { type: "date", label: "Day" },
          { type: "number", label: "Value 1" },
          { type: "number", label: "Value 2" }
        ]}
        rows={rows}
        options={options}
      /> */}
    </div>
  );
}
export default Details;

