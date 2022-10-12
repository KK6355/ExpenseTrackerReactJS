import react from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";
const Chart = (props) => {
  const valueArray = props.dataPoint.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...valueArray);
  return (
    <div className="chart">
      {props.dataPoint.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
