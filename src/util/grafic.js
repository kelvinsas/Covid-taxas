import React, {useEffect } from 'react'
import Chart from "chart.js";



export default function LineGraph(props) {
   
const chartRef = React.createRef();

    useEffect(() => {
        handleChart();
    }, []);

    function handleChart(){
        const myChartRef = chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: props.labels,
                datasets:props.datas,
            },
            options: {
                //Customize chart options
            }
        });
    }

    
    return (
        <div >
            <canvas
                id="myChart"
                ref={chartRef}
            />
        </div>
        )
}