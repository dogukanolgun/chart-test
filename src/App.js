import logo from "./logo.svg";
import "./App.css";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

function App() {
  let data = [];

  for (let i = 0; i < 100000; i += 1) {
    data.push([
      Math.pow(Math.random(), 2) * 100,
      Math.pow(Math.random(), 2) * 100,
    ]);
  }
  const options = getOptions(data);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        Learn React
        <div style={{ width: "1600px", maxHeight: "800px" }}>
          {data && (
            <HighchartsReact highcharts={Highcharts} options={options} />
          )}
        </div>
      </header>
    </div>
  );
}

const getOptions = (myPoints) => {
  return {
    chart: {
      zoomType: "xy",
      height: "100%",
    },

    boost: {
      useGPUTranslations: true,
      usePreAllocated: true,
    },

    xAxis: {
      min: 0,
      max: 100,
      gridLineWidth: 1,
    },

    yAxis: {
      // Renders faster when we don't have to compute min and max
      min: 0,
      max: 100,
      minPadding: 0,
      maxPadding: 0,
      title: {
        text: null,
      },
    },

    title: {
      text:
        "Scatter chart with " +
        Highcharts.numberFormat(myPoints.length, 0, " ") +
        " points",
    },

    legend: {
      enabled: false,
    },

    series: [
      {
        type: "scatter",
        color: "rgb(152, 0, 67)",
        fillOpacity: 0.1,
        data: myPoints,
        marker: {
          radius: 1,
        },
        tooltip: {
          followPointer: false,
          pointFormat: "[{point.x:.1f}, {point.y:.1f}]",
        },
      },
    ],
  };
};

export default App;
