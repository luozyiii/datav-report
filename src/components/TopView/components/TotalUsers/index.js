import React, { useState, useRef } from 'react';
import CommonCard from '../CommonCard';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [userToday, setUserToday] = useState(500);
  const [userGrowthLastDay, setUserGrowthLastDay] = useState('20%');
  const [userGrowthLastMonth, setUserGrowthLastMonth] = useState('30%');
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: 'value',
        show: false,
      },
      yAxis: {
        type: 'category',
        show: false,
      },
      series: [
        {
          name: '上月平台用户数',
          type: 'bar',
          stack: '总量',
          data: [60],
          barWidth: 10,
          itemStyle: {
            color: '#45c946',
          },
        },
        {
          name: '今日平台用户数',
          type: 'bar',
          stack: '总量',
          data: [100],
          itemStyle: {
            color: '#eee',
          },
        },
        {
          type: 'custom',
          stack: '总量',
          data: [60],
          renderItem: (params, api) => {
            const value = api.value(0);
            const endPoint = api.coord([value, 0]);
            return {
              type: 'group',
              position: endPoint,
              children: [
                {
                  type: 'path',
                  shape: {
                    d: 'M1024 255.996 511.971 767.909 0 255.996 1024 255.996z',
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                    layout: 'cover',
                  },
                  style: {
                    fill: '#45c946',
                  },
                },
                {
                  type: 'path',
                  shape: {
                    d: 'M0 767.909l512.029-511.913L1024 767.909 0 767.909z',
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                    layout: 'cover',
                  },
                  style: {
                    fill: '#45c946',
                  },
                },
              ],
            };
          },
        },
      ],
    };
  };

  useChartHook(chartRef, getOptions());

  const _renderFooter = () => {
    return (
      <>
        <div className="total-users-footer">
          <span>日同比</span>
          <span className="emphasis">{userGrowthLastDay}</span>
          <div className="increase" />
          <span className="month">月同比</span>
          <span className="emphasis">{userGrowthLastMonth}</span>
          <div className="decrease" />
        </div>
      </>
    );
  };

  return (
    <CommonCard title="累计用户数" value={userToday} footer={_renderFooter()}>
      <div style={{ width: '100%', height: '100%' }} ref={chartRef} />
    </CommonCard>
  );
}
