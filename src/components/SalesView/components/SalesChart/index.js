import React, { useState, useEffect, useRef } from 'react';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      title: {
        text: '年度销售额',
        textStyle: {
          fontSize: 12,
          color: '#666',
        },
        left: 25,
        top: 20,
      },
      xAxis: {
        type: 'category',
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月',
        ],
        axisTick: {
          alignWithLabel: true,
          lineStyle: {
            color: '#999',
          },
        },
        axisLine: {
          lineStyle: {
            color: '#999',
          },
        },
        axisLabel: {
          color: '#333',
        },
      },
      yAxis: {
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          lineStyle: {
            type: 'dotted',
            color: '#eee',
          },
        },
      },
      series: [
        {
          type: 'bar',
          barWidth: '35%',
          data: [20, 60, 600, 500, 400, 550, 300, 1200, 900, 500, 600, 200],
        },
      ],
      color: ['#3398DB'],
      grid: {
        top: 70,
        left: 60,
        right: 60,
        bottom: 50,
      },
    };
  };

  useChartHook(chartRef, getOptions());

  useEffect(() => {}, []);

  return <div className="echarts-box" ref={chartRef} />;
}
