import React, { useState, useEffect, useRef } from 'react';
import { Card, Menu, Radio, DatePicker } from 'antd';
import { useChartHook } from '@/hooks';

import './index.less';

const { RangePicker } = DatePicker;

export default function (props) {
  const [activeIndex, setActiveIndex] = useState(['1']);
  const [rankData, setRankData] = useState([
    {
      no: 1,
      name: '大米',
      money: '562100',
    },
    {
      no: 2,
      name: '瘦肉',
      money: '56290',
    },
    {
      no: 3,
      name: '韭菜',
      money: '56210',
    },
    {
      no: 4,
      name: '番茄',
      money: '56220',
    },
    {
      no: 5,
      name: '土豆',
      money: '56210',
    },
    {
      no: 6,
      name: '通心菜',
      money: '5625',
    },
    {
      no: 7,
      name: '菜心',
      money: '5625',
    },
  ]);
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

  const _renderTitle = () => {
    return (
      <div className="menu-wrapper">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={activeIndex}
          className="sales-view-menu"
        >
          <Menu.Item key="1">销售额</Menu.Item>
          <Menu.Item key="2">销售额</Menu.Item>
        </Menu>
        <div className="menu-right">
          <Radio.Group defaultValue="a" size="small" buttonStyle="solid">
            <Radio.Button value="a">今日</Radio.Button>
            <Radio.Button value="b">本周</Radio.Button>
            <Radio.Button value="c">本月</Radio.Button>
            <Radio.Button value="d">今年</Radio.Button>
          </Radio.Group>
          <RangePicker className="sales-view-date-picker" />
        </div>
      </div>
    );
  };

  return (
    <Card
      className="sales-view"
      title={_renderTitle()}
      style={{ padding: '0 0 20px 0' }}
    >
      <div className="sales-view-chart-wrapper">
        <div className="echarts-box" ref={chartRef} />
        <div className="sales-view-list">
          <div className="sales-view-title">排行榜</div>
          <div className="list-item-wrapper">
            {rankData.map((item) => (
              <div className="list-item" key={item.no}>
                <div
                  className={[`list-item-no ${item.no <= 3 ? 'top-no' : ''}`]}
                >
                  {item.no}
                </div>
                <div className="list-item-name">{item.name}</div>
                <div className="list-item-money">{item.money}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
