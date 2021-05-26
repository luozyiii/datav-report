import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import BMapScatter from './components/BMapScatter';
import LiquidFill from './components/LiquidFill';
import WordCloud from './components/WordCloud';

import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="map-view">
      <div className="left">
        <BMapScatter />
      </div>
      <div className="right">
        <Card title={<div className="title">用户月同比增长</div>}>
          <div className="chart-wrapper">
            <LiquidFill />
          </div>
        </Card>
        <Card title={<div className="title">热门搜索</div>}>
          <div className="chart-wrapper">
            <WordCloud />
          </div>
        </Card>
      </div>
    </div>
  );
}
