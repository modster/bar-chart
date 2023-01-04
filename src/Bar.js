import React, { useRef, useEffect } from "react";
import { Runtime, Inspector } from "@observablehq/runtime";
import notebook from "@modster/bar-chart";

function BarChart() {
    const ref = useRef();

    useEffect(() => {
        const runtime = new Runtime();
        runtime.module(notebook, Inspector.into(ref.current));
        return () => runtime.dispose();
    }, []);

    return (
        <>
            <div ref={ ref } />
            <p>Credit: <a href="https://observablehq.com/@modster/bar-chart@535">Bar Chart by MichaelGreeff</a></p>
        </>
    );
}

export default BarChart;

{/* yarn add @observablehq/runtime@5
yarn add "https://api.observablehq.com/@modster/bar-chart@535.tgz?v=3"*/}