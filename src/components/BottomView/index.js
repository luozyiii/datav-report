import React, { useEffect } from 'react';
import KeySearch from './components/KeySearch';
import ClassChart from './components/ClassChart';

import './index.less';

export default function (props) {
  useEffect(() => {}, []);

  return (
    <div className="bottom-view">
      <KeySearch />
      <ClassChart />
    </div>
  );
}
