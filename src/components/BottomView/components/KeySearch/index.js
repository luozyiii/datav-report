import React, { useState, useEffect, useRef } from 'react';
import { Card, Table } from 'antd';
import { useChartHook } from '@/hooks';

export default function (props) {
  const [userCount, setUserCount] = useState(100);
  const [searchCount, setSearchCount] = useState(1000);
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);

  const getOptions = (data) => {
    return {
      xAxis: {
        type: 'category',
        boundaryGap: false,
      },
      yAxis: {
        show: false,
      },
      tooltip: {},
      series: [
        {
          type: 'line',
          data,
          areaStyle: {
            color: 'rgba(95,187,255,.5)',
          },
          lineStyle: {
            color: 'rgb(95,187,255)',
          },
          itemStyle: {
            opacity: 0,
          },
          smooth: true,
        },
      ],
      grid: {
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    };
  };

  const _renderTitle = () => {
    return <div className="title-wrapper">关键词搜索</div>;
  };

  const data = [100, 300, 200, 250, 200, 150, 100, 50, 100, 150];
  useChartHook(chartRef, getOptions(data));
  const data2 = [20, 60, 10, 250, 200, 150, 100, 33, 100, 120];
  useChartHook(chartRef2, getOptions(data2));

  const dataSource = [
    { key: '1', keyword: '水果', total: 5362, num: 500 },
    { key: '2', keyword: '苹果', total: 752, num: 320 },
    { key: '3', keyword: '香蕉', total: 600, num: 30 },
    { key: '4', keyword: '提子', total: 526, num: 432 },
    { key: '5', keyword: '葡萄', total: 423, num: 100 },
  ];

  const columns = [
    {
      title: '排名',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '关键词',
      dataIndex: 'keyword',
      key: 'keyword',
    },
    {
      title: '总搜索量',
      dataIndex: 'total',
      key: 'total',
    },
    {
      title: '搜索用户数',
      dataIndex: 'num',
      key: 'num',
    },
  ];

  useEffect(() => {}, []);

  return (
    <div className="view">
      <Card title={_renderTitle()}>
        <div className="chart-wrapper">
          <div className="chart-inner">
            <div className="chart">
              <div className="chart-title">搜索用户数</div>
              <div className="chart-data">{userCount}</div>
              <div className="chart-box" ref={chartRef}></div>
            </div>
            <div className="chart">
              <div className="chart-title">搜索量</div>
              <div className="chart-data">{searchCount}</div>
              <div className="chart-box" ref={chartRef2}></div>
            </div>
          </div>
          <div className="table-wrapper">
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </Card>
    </div>
  );
}
