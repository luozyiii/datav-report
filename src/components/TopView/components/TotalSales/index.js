import React, { useState, useEffect } from 'react';
import CommonCard from '../CommonCard';

import './index.less';

export default function (props) {
  const [salesToday, setSalesToday] = useState(62025);
  const [salesGrowthLastDay, setSalesGrowthLastDay] = useState('20%');
  const [salesGrowthLastMonth, setSalesGrowthLastMonth] = useState('20%');
  const [salesLastDay, setSalesLastDay] = useState(200);

  useEffect(() => {}, []);

  const _renderFooter = () => {
    return (
      <>
        <span>昨日销售额 </span>
        <span className="emphasis">{salesLastDay}</span>
      </>
    );
  };

  return (
    <CommonCard title="累计销售额" value={salesToday} footer={_renderFooter()}>
      <div className="compare-wrapper">
        <div className="compare">
          <span>日同比</span>
          <span className="emphasis">{salesGrowthLastDay}</span>
          <div className="increase" />
        </div>
        <div className="compare">
          <span>月同比</span>
          <span className="emphasis">{salesGrowthLastMonth}</span>
          <div className="decrease" />
        </div>
      </div>
    </CommonCard>
  );
}
