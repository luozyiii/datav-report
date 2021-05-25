import React, { useState, useEffect } from 'react';
import { Card, Menu, Radio, DatePicker } from 'antd';

import SalesTable from './components/SalesTable';
import SalesChart from './components/SalesChart';

import './index.less';

const { RangePicker } = DatePicker;

export default function (props) {
  const [activeIndex, setActiveIndex] = useState(['1']);

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
        <SalesChart />
        <SalesTable />
      </div>
    </Card>
  );
}
