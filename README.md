# datav-report
数据可视化-数据报表：基于umi + antd + echart, 使用hooks编写。

## 准备
[Umi快速上手](https://umijs.org/zh-CN/docs/getting-started)
[echarts](https://echarts.apache.org/zh/index.html)

## 开始
```javascript
// 使用官方工具构建umi项目
mkdir datav-report
cd datav-report
yarn create @umijs/umi-app

// 安装依赖
yarn

// echart 引入
yarn add echarts

// 启动
yarn start
```

## 编写 useChartHook 组件
- 目录
```javascript
/src/hooks/useChartHook
```

- 按需引入图表组件
```javascript
/** 按需引入 */
// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
import * as echarts from 'echarts/core';
// 按需引入图表，图表后缀都为 Chart
import { BarChart, LineChart, CustomChart, PieChart } from 'echarts/charts';
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
} from 'echarts/components';
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import { CanvasRenderer } from 'echarts/renderers';

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  CanvasRenderer,
  BarChart,
  LineChart,
  CustomChart,
  LegendComponent,
  PieChart,
]);
```

## 业务图表
> 日常图表示例