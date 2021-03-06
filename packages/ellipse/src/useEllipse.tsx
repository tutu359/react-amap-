import { useState, useEffect } from 'react';
import { useVisiable, useEventProperties, useSettingProperties } from '@uiw/react-amap-utils';
import { EllipseProps } from './';

export interface UseEllipse extends EllipseProps {}
export const useEllipse = (props = {} as UseEllipse) => {
  const { map, visiable, ...other } = props;
  const [ellipse, setEllipse] = useState<AMap.Ellipse>();
  useEffect(() => {
    if (!AMap || !map) return;
    if (!ellipse) {
      let instance: AMap.Ellipse = new AMap.Ellipse({ ...other });
      map.add(instance);
      setEllipse(instance);
      return () => {
        if (instance) {
          map && map.removeLayer(instance);
          setEllipse(undefined);
        }
      };
    }
  }, [map]);

  useVisiable(ellipse!, visiable);
  useSettingProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, ['Center', 'Radius', 'Options', 'ExtData']);
  useEventProperties<AMap.Ellipse, UseEllipse>(ellipse!, props, [
    'onHide',
    'onShow',
    'onClick',
    'onDblClick',
    'onRightClick',
    'onMouseOut',
    'onMouseOver',
    'onMouseUp',
    'onMouseDown',
    'onTouchEnd',
    'onTouchMove',
    'onTouchStart',
  ]);
  return {
    ellipse,
    setEllipse,
  };
};
