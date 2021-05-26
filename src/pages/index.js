import { TopView, SalesView, BottomView, MapView } from '@/components';

import './index.less';

export default function IndexPage() {
  return (
    <div className="home">
      <TopView></TopView>
      <SalesView></SalesView>
      <BottomView></BottomView>
      <MapView></MapView>
    </div>
  );
}
