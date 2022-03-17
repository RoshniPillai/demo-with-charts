import * as React from "react";
import { Chart } from "react-google-charts";

const rows = [
  [new Date("2015-01-01 10:22:26"), 40, 50],
  [new Date("2015-01-01 10:25:26"), 20, 80],
  [new Date("2015-01-01 11:35:26"), 20, 80],
  [new Date("2015-01-01 11:45:26"), 40, 50],
  [new Date("2015-01-01 12:00:26"), 60, 30],
  [new Date("2015-01-01 12:07:26"), 20, 80]
];

const dateTicks = [
  new Date("2015-01-01 10:07:26"),
  new Date("2015-01-01 11:07:26"),
  new Date("2015-01-01 12:07:26")
];
const options = {
  hAxis: {
    format: "dd-MM-yyyy HH:MM",
    ticks: dateTicks
  }
};
const columns = [
  { type: "string", id: "phases" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
];

const rows1 = [
  ["brach level 1", new Date(2016, 2, 20), new Date(2021, 5, 31)],
  // ["stage 2", new Date(2015, 1, 4), new Date(2015, 7, 2)],
  // ["stage 3", new Date(2015, 1, 4), new Date(2015, 5, 2)],
  // ["stage 4", new Date(2015, 2, 4), new Date(2015, 5, 12)],
];

export const data = [columns, ...rows1];

function Details() {
  return (
    <div className="App">
      <p>last pipeline executed</p>
      <Chart chartType="Timeline"
       data={data} 
       width="100%" height="400px" />
      <Chart
        chartType={"LineChart"}
        columns={[
          { type: "date", label: "Day" },
          { type: "number", label: "Value 1" },
          { type: "number", label: "Value 2" }
        ]}
        rows={rows}
        options={options}
      />
    </div>
  );
}
export default Details;

