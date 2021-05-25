import React, { useState, useRef } from 'react';
import CommonCard from '../CommonCard';
import { useChartHook } from '@/hooks';

export default function (props) {
  const [orderUser, setOrderUser] = useState(60);
  const [returnRate, setReturnRate] = useState('20%');
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      color: ['#3398DB'],
      tooltip: {},
      series: [
        {
          name: '用户实时交易量',
          type: 'bar',
          data: [
            410, 82, 200, 334, 390, 330, 220, 150, 82, 200, 134, 290, 330, 150,
          ],
          barWidth: '60%',
        },
      ],
      xAxis: {
        type: 'category',
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
        ],
        show: false,
      },
      yAxis: {
        show: false,
      },
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    };
  };

  useChartHook(chartRef, getOptions());

  const _renderFooter = () => {
    return (
      <>
        <span>退货率 </span>
        <span className="emphasis">{returnRate}</span>
      </>
    );
  };

  return (
    <CommonCard
      title="今日交易用户数"
      value={orderUser}
      footer={_renderFooter()}
    >
      <div style={{ width: '100%', height: '100%' }} ref={chartRef} />
    </CommonCard>
  );
}
