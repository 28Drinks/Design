import React, { useState, useEffect, useRef } from 'react';
import { createChart, ColorType, LineType } from 'lightweight-charts';

const MyChart = ({ data, colors }) => {

    const {
        backgroundcolor = 'white',
        lineColor = '#2962FF',
        textColor = 'black',
        areaTopColor = '#2962FF',
        areaBottomColor = 'rgba(41, 98, 255, 0.28)',
    } = colors;

    const chartContainerRef = useRef();

    useEffect( 
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth});
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: {type: ColorType.Solid, color: backgroundcolor},
                    textColor,
                },
                width: chartContainerRef.current.clientWidth,
                height: 300,
            });
            chart.timeScale().fitContent();


            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor});
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return() => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundcolor, lineColor, textColor, areaTopColor, areaBottomColor]
    );

    return <div className="chart" ref={chartContainerRef}/>
    };



    const MyChartComponent = ({ chartData }) => {
        const chartColors = {
            backgroundcolor: '#131313',
            lineColor: '#40b66b',
            textColor: '#5E5E5E',
            areaTopColor: '#40b66b',
            areaBottomColor: 'rgba(15, 44, 26, 0.28)',
          };
        return <MyChart data={chartData} colors={chartColors} />
    };


export default MyChartComponent;