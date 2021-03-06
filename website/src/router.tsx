import React, { lazy } from 'react';

export type Routes = {
  path: string;
  exact?: boolean;
  component: React.ReactNode;
}[];

export const routes: Routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('./pages/home')),
  },
  {
    path: '/api-loader',
    component: lazy(() => import('./pages/api-loader')),
  },
  {
    path: '/map',
    component: lazy(() => import('./pages/map')),
  },
  {
    path: '/scale-control',
    component: lazy(() => import('./pages/scale-control')),
  },
  {
    path: '/tool-bar-control',
    component: lazy(() => import('./pages/tool-bar-control')),
  },
  {
    path: '/control-bar-control',
    component: lazy(() => import('./pages/control-bar-control')),
  },
  {
    path: '/map-type-control',
    component: lazy(() => import('./pages/map-type-control')),
  },
  {
    path: '/hawk-eye-control',
    component: lazy(() => import('./pages/hawk-eye-control')),
  },
  {
    path: '/polyline',
    component: lazy(() => import('./pages/polyline')),
  },
  {
    path: '/marker',
    component: lazy(() => import('./pages/marker')),
  },
  {
    path: '/mass-marks',
    component: lazy(() => import('./pages/mass-marks')),
  },
  {
    path: '/text',
    component: lazy(() => import('./pages/text')),
  },
  {
    path: '/circle',
    component: lazy(() => import('./pages/circle')),
  },
  {
    path: '/ellipse',
    component: lazy(() => import('./pages/ellipse')),
  },
  {
    path: '/rectangle',
    component: lazy(() => import('./pages/rectangle')),
  },
  {
    path: '/beizer-curve',
    component: lazy(() => import('./pages/beizer-curve')),
  },
  {
    path: '/polygon',
    component: lazy(() => import('./pages/polygon')),
  },
  {
    path: '/info-window',
    component: lazy(() => import('./pages/info-window')),
  },
  {
    path: '/circle-marker',
    component: lazy(() => import('./pages/circle-marker')),
  },
  {
    path: '/weather',
    component: lazy(() => import('./pages/weather')),
  },
  {
    path: '/geolocation',
    component: lazy(() => import('./pages/geolocation')),
  },
  {
    path: '/auto-complete',
    component: lazy(() => import('./pages/auto-complete')),
  },
  {
    path: '/context-menu',
    component: lazy(() => import('./pages/context-menu')),
  },
  {
    path: '/types',
    component: lazy(() => import('./pages/types')),
  },
];

export const menus = [
  {
    label: '????????????',
    path: '/',
  },
  {
    label: '???????????? ????????',
    target: '__blank',
    path: 'https://uiw.gitee.io/react-amap',
  },
  {
    divider: true,
    label: '??????',
  },
  {
    label: 'APILoader ??????',
    path: '/api-loader',
  },
  {
    label: 'Map ??????',
    path: '/map',
  },
  {
    divider: true,
    label: '??????',
  },
  {
    label: 'ScaleControl ???????????????',
    path: '/scale-control',
  },
  {
    label: 'ToolBarControl ???????????????',
    path: '/tool-bar-control',
  },
  {
    label: 'MapTypeControl ????????????',
    path: '/map-type-control',
  },
  {
    label: 'ControlBarControl ????????????',
    path: '/control-bar-control',
  },
  {
    label: 'HawkEyeControl ????????????',
    path: '/hawk-eye-control',
  },
  {
    divider: true,
    label: '?????????',
  },
  {
    label: 'Marker ?????????',
    path: '/marker',
  },
  {
    label: 'MassMarks ???????????????',
    path: '/mass-marks',
  },
  {
    label: 'Text ????????????',
    path: '/text',
  },
  {
    divider: true,
    label: '????????????',
  },
  {
    label: 'Polygon ?????????',
    path: '/polygon',
  },
  {
    label: 'Polyline ??????',
    path: '/polyline',
  },
  {
    label: 'BesizerCurve ???????????????',
    path: '/beizer-curve',
  },
  {
    label: 'Circle ??????',
    path: '/circle',
  },
  {
    label: 'CircleMarker ????????????',
    path: '/circle-marker',
  },
  {
    label: 'Ellipse ????????????',
    path: '/ellipse',
  },
  {
    label: 'Rectangle ??????',
    path: '/rectangle',
  },
  {
    divider: true,
    label: '????????????',
  },
  {
    label: 'InfoWindow ????????????',
    path: '/info-window',
  },
  {
    divider: true,
    label: '????????????',
  },
  {
    label: 'ContextMenu ????????????',
    path: '/context-menu',
  },
  {
    divider: true,
    label: '??????',
  },
  {
    label: 'Weather ??????????????????',
    path: '/weather',
  },
  {
    label: 'Geolocation ??????',
    path: '/geolocation',
  },
  {
    divider: true,
    label: '??????',
  },
  {
    label: 'AutoComplete ????????????',
    path: '/auto-complete',
  },
  {
    divider: true,
    label: '??????',
  },
  {
    label: '???????????? API ?????? types ??????',
    path: '/types',
  },
  {
    label: '????????????????????????',
    target: '__blank',
    path: 'https://lbs.amap.com/console/show/picker',
  },
  {
    label: '??????????????????',
    target: '__blank',
    path: 'https://lbs.amap.com/demo-center/jsapi-v2',
  },
  {
    label: '???????????? JSAPI 2.0',
    target: '__blank',
    path: 'https://a.amap.com/jsapi/static/doc/index.html',
  },
  {
    label: 'AMapUI ?????????',
    target: '__blank',
    path: 'https://lbs.amap.com/api/amap-ui/intro',
  },
  {
    label: '?????? Github ??????',
    target: '__blank',
    path: 'https://github.com/uiwjs/react-amap',
  },
  {
    label: '?????? Gitee ??????',
    target: '__blank',
    path: 'https://gitee.com/uiw/react-amap',
  },
  {
    divider: true,
    label: '????????????',
  },
  {
    label: '???????????? React ??????',
    target: '__blank',
    path: 'https://uiwjs.github.io/react-baidu-map/',
  },
  {
    label: 'React Web ?????????',
    target: '__blank',
    path: 'https://uiwjs.github.io/',
  },
  {
    label: 'React Native ?????????',
    target: '__blank',
    path: 'https://uimjs.github.io/',
  },
];
