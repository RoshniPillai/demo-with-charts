import "./styles.css";
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Success", 70],
  ["Failure", 30]
];

export const options = {
  title: "Projects"
};
export default function App() {
  return (
    <div className="App">
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </div>
  );
}
