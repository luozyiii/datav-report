import React, { useState, useEffect } from 'react';
import './index.less';

export default function (props) {
  const [state, setState] = useState();

  useEffect(() => {}, []);

  return (
    <div className="common-card">
      <div className="title">{props.title}</div>
      <div className="value">{props.value}</div>
      <div className="chart">{props.children}</div>
      <div className="line" />
      <div className="total">{props.footer}</div>
    </div>
  );
}
