import React, { useState, useEffect } from 'react';

export default function (props) {
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

  useEffect(() => {}, []);

  return (
    <div className="sales-view-list">
      <div className="sales-view-title">排行榜</div>
      <div className="list-item-wrapper">
        {rankData.map((item) => (
          <div className="list-item" key={item.no}>
            <div className={[`list-item-no ${item.no <= 3 ? 'top-no' : ''}`]}>
              {item.no}
            </div>
            <div className="list-item-name">{item.name}</div>
            <div className="list-item-money">{item.money}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
