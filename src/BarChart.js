import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@modster/bar-chart";

function BarChart() {
  const chartRef = useRef();
  const alphabetRef = useRef();
  const barChartRef = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, name => {
      if (name === "chart") return new Inspector(chartRef.current);
      if (name === "alphabet") return new Inspector(alphabetRef.current);
      if (name === "BarChart") return new Inspector(barChartRef.current);
    });
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ chartRef } />
      <div ref={ alphabetRef } />
      <div ref={ barChartRef } />
      <p>Credit: <a href="https://observablehq.com/@modster/bar-chart@535">Bar Chart by MichaelGreeff</a></p>
    </>
  );
}

export default BarChart;