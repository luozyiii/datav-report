import React, { useState, useRef } from 'react';
import CommonCard from '../CommonCard';
import { useChartHook } from '@/hooks';

export default function (props) {
  const [orderToday, setOrderToday] = useState(20);
  const [orderLastDay, setOrderLastDay] = useState(10);
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      xAxis: {
        type: 'category',
        show: false,
        boundaryGap: false,
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: 'line',
          data: [2, 18, 10, 20, 30, 8, 16],
          areaStyle: {
            color: 'purple',
          },
          lineStyle: {
            width: 0,
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      },
    };
  };

  useChartHook(chartRef, getOptions());

  const _renderFooter = () => {
    return (
      <>
        <span>昨日订单量 </span>
        <span className="emphasis">{orderLastDay}</span>
      </>
    );
  };

  return (
    <CommonCard title="累计订单量" value={orderToday} footer={_renderFooter()}>
      <div style={{ width: '100%', height: '100%' }} ref={chartRef} />
    </CommonCard>
  );
}
