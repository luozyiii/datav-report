import React, { useState, useEffect } from 'react';
import { Row, Col, Card } from 'antd';
import TotalSales from './components/TotalSales';
import TotalOrders from './components/TotalOrders';
import TodayUsers from './components/TodayUsers';
import TotalUsers from './components/TotalUsers';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="top-view">
      <Row gutter={[20, 20]}>
        <Col span={6}>
          <Card>
            <TotalSales />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <TotalOrders />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <TodayUsers />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <TotalUsers />
          </Card>
        </Col>
      </Row>
    </div>
  );
}
