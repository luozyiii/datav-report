import React, { useState, useEffect, useRef } from 'react';
import { Card, Radio, Table } from 'antd';
import { useChartHook } from '@/hooks';

import './index.less';

export default function (props) {
  const [userCount, setUserCount] = useState(100);
  const [searchCount, setSearchCount] = useState(1000);
  const chartRef = useRef(null);
  const chartRef2 = useRef(null);
  const chartRef3 = useRef(null);

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

  const getOptions3 = (data) => {
    return {
      title: [
        {
          text: `品类分布`,
          textStyle: {
            fontSize: 14,
            color: '#666',
          },
          left: 20,
          top: 20,
        },
        {
          text: '累计订单量',
          subtext: '10000',
          x: '34.5%',
          y: '42.5%',
          textStyle: {
            fontSize: 14,
            color: '#999',
          },
          subtextStyle: {
            fontSize: 28,
            color: '#333',
          },
          textAlign: 'center',
        },
      ],
      series: [
        {
          name: '品类分布',
          type: 'pie',
          data,
          label: {
            normal: {
              show: true,
              position: 'outter',
              formatter: function (params) {
                return params.data.legendname;
              },
            },
          },
          center: ['35%', '50%'],
          radius: ['45%', '60%'],
          labelLine: {
            normal: {
              length: 5,
              length2: 3,
              smooth: true,
            },
          },
          clockwise: false,
          itemStyle: {
            borderWidth: 4,
            borderColor: '#fff',
          },
        },
      ],
      legend: {
        type: 'scroll',
        orient: 'vertical',
        height: 250,
        left: '75%',
        top: 'middle',
        textStyle: {
          color: '#8c8c8c',
        },
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          const str =
            params.seriesName +
            '<br />' +
            params.marker +
            params.data.legendname +
            '<br />' +
            '数量：' +
            params.data.value +
            '<br />' +
            '占比：' +
            params.data.percent +
            '%';
          return str;
        },
      },
    };
  };

  const data = [100, 300, 200, 250, 200, 150, 100, 50, 100, 150];
  useChartHook(chartRef, getOptions(data));
  const data2 = [20, 60, 10, 250, 200, 150, 100, 33, 100, 120];
  useChartHook(chartRef2, getOptions(data2));

  const chartData = [
    {
      legendname: '水果',
      value: 30,
      percent: 30,
      name: `水果 | 30`,
    },
    {
      legendname: '香蕉',
      value: 30,
      percent: 30,
      name: `香蕉 | 30`,
    },
    {
      legendname: '苹果',
      value: 10,
      percent: 10,
      name: `苹果 | 10`,
    },
    {
      legendname: '葡萄',
      value: 60,
      percent: 60,
      name: `葡萄 | 60`,
    },
  ];
  useChartHook(chartRef3, getOptions3(chartData));

  useEffect(() => {}, []);

  const _renderTitle = () => {
    return <div className="title-wrapper">关键词搜索</div>;
  };

  const _renderTitle2 = () => {
    return (
      <div className="title-wrapper">
        <div className="title">分类销售排行</div>
        <div className="radio-wrapper">
          <Radio.Group defaultValue="a" size="small" buttonStyle="solid">
            <Radio.Button value="a">品类</Radio.Button>
            <Radio.Button value="b">商品</Radio.Button>
          </Radio.Group>
        </div>
      </div>
    );
  };

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

  return (
    <div className="bottom-view">
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
      <div className="view">
        <Card title={_renderTitle2()}>
          <div className="chart-wrapper" ref={chartRef3}></div>
        </Card>
      </div>
    </div>
  );
}
