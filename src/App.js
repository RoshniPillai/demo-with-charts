import "./styles.css";
import { Chart } from "react-google-charts";
import Details from './details'
export const data = [
  ["Task", "Hours per Day"],
  ["Success", 70],
  ["Failure", 30]
];

export const options = {
  title: "Projects"
};
export const data1 = [
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

export const options1 = {
  title: "Projects- Branching Strategy",
  width: 400,
  height: 200,
  bar: { groupWidth: "65%" },
  legend: { position: "none" }
};
export const data2 = [
  [
    "Date",
    "Guardians of the Galaxy",
    "The Avengers",
  ],
  [5, 11, 20],
   [6, 8.8, 13.6],
  // [1, 37.8, 80, 41],
  // [2, 30.9, 69.5, 32.4],
  // [3, 25.4, 57, 25.7],
  // [4, 11.7, 18.8, 10.5],
  

];

export const options2 = {
  chart: {
    title: "",
    subtitle: "",
  },
};
export default function App() {
  return (
    <div className="App">
      {/* <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      /> */}
      {/* <Chart
        chartType="BarChart"
        width="100%"
        height="100px"
        data={data1}
        options={options1}
      /> */}
     
      <Details />
    </div>
  );
}
