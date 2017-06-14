// esri地图
import EsriMap from './src/map_module/map/esrimap';
// 图例
import Legend from './src/map_module/maptool/legend';
// 所有的工具
import {
  FullExtent,
  FullScreen,
  ISearchBoard,
  ISearch,
  LocationBoard,
  Location,
  Measurement,
  MeasurementBoard,
  RenderClear,
  SearchBoard,
  Search,
  ZoomIn,
  ZoomOut
} from './src/map_module/maptool/toolbar';
// 地图类型（矢量、影像）
import MapType from './src/map_module/maptool/mapType';
// 鹰眼
import OverViewMap from './src/map_module/maptool/overviewMap';

export {
  EsriMap,
  Legend,
  MapType,
  OverViewMap,
  FullExtent,
  FullScreen,
  ISearchBoard,
  ISearch,
  LocationBoard,
  Location,
  Measurement,
  MeasurementBoard,
  RenderClear,
  SearchBoard,
  Search,
  ZoomIn,
  ZoomOut,
  install
};
var components = [
  EsriMap,
  Legend,
  MapType,
  OverViewMap,
  FullExtent,
  FullScreen,
  ISearchBoard,
  ISearch,
  LocationBoard,
  Location,
  Measurement,
  MeasurementBoard,
  RenderClear,
  SearchBoard,
  Search,
  ZoomIn,
  ZoomOut
];
const install = function(Vue) {
  components.map(component => {
    Vue.component(component.name, component);
  });
};
