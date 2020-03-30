import React, { Component } from 'react'
import Chart from "chart.js";



export default class LineGraph extends Component {
    constructor(props) {
         super(props);  
         this.state = {
                    labels:props.labels,
                    datas:props.datas,
         };
  }
    chartRef = React.createRef();


    
    componentDidMount() {
              
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: this.state.label,
                datasets: [
                    this.state.datas
                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div >
                <canvas
                    id="myChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}