// esri地图
import EsriMap from './map_module/map/esrimap';
// 图例
import Legend from './map_module/maptool/legend';
// 地图工具
import MapTool from './map_module/maptool/maptool';
// 所有的工具
import MapToolItems from './map_module/maptool/toolbar';
//　地图类型（矢量、影像）
import MapType from './map_module/maptool/mapType';
// 鹰眼
import OverViewMap from './map_module/maptool/overviewMap';

export default {
  EsriMap,
  Legend,
  MapTool,
  ...MapToolItems,
  MapType,
  OverViewMap
};
