import React, { useState, useEffect, useRef } from 'react';
import { useChartHook } from '@/hooks';

// import 'echarts/extension/bmap/bmap';

export default function (props) {
  const [state, setState] = useState();
  const chartRef = useRef(null);

  const getOptions = () => {
    return {
      title: {
        text: '慕课外卖销售数据大盘',
        subtext: '销售趋势统计',
        sublink: 'https://www.imooc.com',
        left: 'center',
      },
      bmap: {
        key: 'VjOuySLG4EZKrdw1l443Y5sUX815AwXe',
        center: [104.114129, 37.550339],
        zoom: 5,
        roam: false,
        // mapStyle: {
        //   styleJson: [
        //     {
        //       featureType: 'water',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#d1d1d1',
        //       },
        //     },
        //     {
        //       featureType: 'land',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#f3f3f3',
        //       },
        //     },
        //     {
        //       featureType: 'railway',
        //       elementType: 'all',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'highway',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#fdfdfd',
        //       },
        //     },
        //     {
        //       featureType: 'highway',
        //       elementType: 'labels',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'arterial',
        //       elementType: 'geometry',
        //       stylers: {
        //         color: '#fefefe',
        //       },
        //     },
        //     {
        //       featureType: 'arterial',
        //       elementType: 'geometry.fill',
        //       stylers: {
        //         color: '#fefefe',
        //       },
        //     },
        //     {
        //       featureType: 'poi',
        //       elementType: 'all',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'green',
        //       elementType: 'all',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'subway',
        //       elementType: 'all',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'manmade',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#d1d1d1',
        //       },
        //     },
        //     {
        //       featureType: 'local',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#d1d1d1',
        //       },
        //     },
        //     {
        //       featureType: 'arterial',
        //       elementType: 'labels',
        //       stylers: {
        //         visibility: 'off',
        //       },
        //     },
        //     {
        //       featureType: 'boundary',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#fefefe',
        //       },
        //     },
        //     {
        //       featureType: 'building',
        //       elementType: 'all',
        //       stylers: {
        //         color: '#d1d1d1',
        //       },
        //     },
        //     {
        //       featureType: 'label',
        //       elementType: 'labels.text.fill',
        //       stylers: {
        //         color: '#999999',
        //       },
        //     },
        //   ],
        // },
        // chartSeries: [],
      },
    };
  };

  useChartHook(chartRef, getOptions());

  useEffect(() => {}, []);

  return <div ref={chartRef} style={{ height: '100%' }}></div>;
}
