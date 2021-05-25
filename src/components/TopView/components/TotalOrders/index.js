import React, { useState, useEffect } from 'react';
import CommonCard from '../CommonCard';

// import './index.less';

export default function (props) {
  const [orderToday, setOrderToday] = useState(20);
  const [orderLastDay, setOrderLastDay] = useState(10);

  useEffect(() => {}, []);

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
      图表
    </CommonCard>
  );
}
