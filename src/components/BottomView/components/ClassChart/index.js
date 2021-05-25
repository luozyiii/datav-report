import React, { useEffect, useRef } from 'react';
import { Card, Radio } from 'antd';
import { useChartHook } from '@/hooks';

export default function (props) {
  const chartRef3 = useRef(null);

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

  return (
    <div className="view">
      <Card title={_renderTitle2()}>
        <div className="chart-wrapper" ref={chartRef3}></div>
      </Card>
    </div>
  );
}
