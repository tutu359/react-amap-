(this["webpackJsonp@uiw/react-amap"]=this["webpackJsonp@uiw/react-amap"]||[]).push([[43],{1223:function(n,t,e){"use strict";e.r(t),t.default="InfoWindow \u4fe1\u606f\u7a97\u4f53\n===\n\n\u7528\u4e8e\u5728\u5730\u56fe\u4e0a\u5f39\u51fa\u4e00\u4e2a\u8be6\u7ec6\u4fe1\u606f\u5c55\u793a\u7a97\u4f53\uff0c\u5730\u56fe\u4e0a\u53ea\u5141\u8bb8\u540c\u65f6\u5c55\u793a `1` \u4e2a\u4fe1\u606f\u7a97\u4f53\n\n```jsx\nimport { InfoWindow } from '@uiw/react-amap';\n```\n\n### \u57fa\u672c\u7528\u6cd5\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, InfoWindow } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  // \u6784\u5efa\u4fe1\u606f\u7a97\u4f53\u4e2d\u663e\u793a\u7684\u5185\u5bb9\n  const info = [];\n  info.push(\"<div class='input-card content-window-card'><div><img style=\\\"float:left;width:67px;height:16px;\\\" src=\\\" https://webapi.amap.com/images/autonavi.png \\\"/></div> \");\n  info.push(\"<div style=\\\"padding:7px 0px 0px 0px;\\\"><h4>\u9ad8\u5fb7\u8f6f\u4ef6</h4>\");\n  info.push(\"<p class='input-item'>\u7535\u8bdd : 010-84107000   \u90ae\u7f16 : 100102</p>\");\n  info.push(\"<p class='input-item'>\u5730\u5740 :\u5317\u4eac\u5e02\u671d\u9633\u533a\u671b\u4eac\u961c\u8363\u885710\u53f7\u9996\u5f00\u5e7f\u573a4\u5c42</p></div></div>\");\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} center={[116.397637, 39.900001]}>\n          <InfoWindow\n            visiable={show}\n            content={info.join('')}\n            // position={[116.397046, 39.915698]}\n            onClose={(evn) => {\n              console.log('evn', evn);\n            }}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### \u8bbe\u7f6e\u4fe1\u606f\u7a97\u4f53\u5185\u5bb9\n\n\x3c!--DemoStart,bgWhite,noScroll--\x3e \n```jsx\nimport React, { useState, useRef } from 'react';\nimport { Map, APILoader, InfoWindow } from '@uiw/react-amap';\n\nconst Example = () => {\n  const [show, setShow] = useState(true);\n  const [content, setContent] = useState('<div>\u9ad8\u5fb7\u8f6f\u4ef6</div>');\n  return (\n    <>\n      <button onClick={() => setShow(!show)}>\n        {show ? '\u9690\u85cf' : '\u663e\u793a'}\n      </button>\n      <input type=\"text\" value={content} onChange={(evn) => setContent(evn.target.value)}/>\n      <div style={{ width: '100%', height: '500px' }}>\n        <Map zoom={14} pitch={70} viewMode=\"3D\" center={[116.397637, 39.900001]}>\n          <InfoWindow\n            visiable={show}\n            content={content}\n            onClose={(evn) => {\n              console.log('evn', evn);\n            }}\n          />\n        </Map>\n      </div>\n    </>\n  );\n}\n\nReactDOM.render((\n  <APILoader akay=\"a7a90e05a37d3f6bf76d4a9032fc9129\">\n    <Example />\n  </APILoader>\n), _mount_);\n```\n\x3c!--End--\x3e\n\n### Props\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b | \u9ed8\u8ba4\u503c |\n|--------- |-------- |--------- |-------- |\n| position | \u4fe1\u606f\u7a97\u4f53\u663e\u793a\u57fa\u70b9\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u5730\u56fe\u7684\u4e2d\u95f4 | `LngLat` | - |\n| offset | \u4fe1\u606f\u7a97\u4f53\u663e\u793a\u4f4d\u7f6e\u504f\u79fb\u91cf\u3002\u9ed8\u8ba4\u57fa\u51c6\u70b9\u4e3a\u4fe1\u606f\u7a97\u4f53\u7684\u5e95\u90e8\u4e2d\u5fc3\uff08\u82e5\u8bbe\u7f6e\u4e86anchor\uff0c\u5219\u4ee5anchor\u503c\u4e3a\u57fa\u51c6\u70b9\uff09\u3002 | `Pixel` | - |\n| anchor | \u4fe1\u606f\u7a97\u4f53\u951a\u70b9 | `top-left`,`top-center`,`top-right`,`middle-left`,`center`,`middle-right`,`bottom-left`,`bottom-center`,`bottom-right` | `bottom-center` |\n| autoMove | \u662f\u5426\u81ea\u52a8\u8c03\u6574\u7a97\u4f53\u5230\u89c6\u91ce\u5185\uff08\u5f53\u4fe1\u606f\u7a97\u4f53\u8d85\u51fa\u89c6\u91ce\u8303\u56f4\u65f6\uff0c\u901a\u8fc7\u8be5\u5c5e\u6027\u8bbe\u7f6e\u662f\u5426\u81ea\u52a8\u5e73\u79fb\u5730\u56fe\uff0c\u4f7f\u4fe1\u606f\u7a97\u4f53\u5b8c\u5168\u663e\u793a\uff09 | `boolean` | - |\n| size | \u4fe1\u606f\u7a97\u4f53\u663e\u793a\u57fa\u70b9\u4f4d\u7f6e\uff0c\u9ed8\u8ba4\u5730\u56fe\u7684\u4e2d\u95f4 | `Size` | - |\n| closeWhenClickMap | \u63a7\u5236\u662f\u5426\u5728\u9f20\u6807\u70b9\u51fb\u5730\u56fe\u540e\u5173\u95ed\u4fe1\u606f\u7a97\u4f53\uff0c\u9ed8\u8ba4false\uff0c\u9f20\u6807\u70b9\u51fb\u5730\u56fe\u540e\u4e0d\u5173\u95ed\u4fe1\u606f\u7a97\u4f53 | `boolean` | - |\n| content | \u4fe1\u606f\u7a97\u4f53\u5c3a\u5bf8\uff08isCustom\u4e3atrue\u65f6\uff0c\u8be5\u5c5e\u6027\u65e0\u6548\uff09 | `string/HTMLElement` | - |\n| avoid | autoMove \u4e3a true \u65f6\uff0c\u81ea\u52a8\u5e73\u79fb\u5230\u89c6\u91ce\u5185\u540e\u7684\u4e0a\u53f3\u4e0b\u5de6\u7684\u907f\u8ba9\u5bbd\u5ea6\u3002\u9ed8\u8ba4\u503c\uff1a `[20, 20, 20, 20]` | `Array<number>` | - |\n| isCustom | \u662f\u5426\u81ea\u5b9a\u4e49\u7a97\u4f53\u3002\u8bbe\u4e3atrue\u65f6\uff0c\u4fe1\u606f\u7a97\u4f53\u5916\u6846\u53ca\u5185\u5bb9\u5b8c\u5168\u6309\u7167content\u6240\u8bbe\u7684\u503c\u6dfb\u52a0\uff08\u9ed8\u8ba4\u4e3afalse\uff0c\u5373\u5728\u7cfb\u7edf\u9ed8\u8ba4\u7684\u4fe1\u606f\u7a97\u4f53\u5916\u6846\u4e2d\u663e\u793acontent\u5185\u5bb9\uff09 | `boolean` | - |\n\n### \u4e8b\u4ef6\n\n| \u53c2\u6570 | \u8bf4\u660e | \u7c7b\u578b |\n| ---- | ---- | ---- |\n| onOpen | \u4fe1\u606f\u7a97\u4f53\u6253\u5f00\u4e4b\u540e\u89e6\u53d1\u4e8b\u4ef6 | `(opts: { type: string }): void;` |\n| onClose | \u4fe1\u606f\u7a97\u4f53\u5173\u95ed\u4e4b\u540e\u89e6\u53d1\u4e8b\u4ef6 | `(opts: { type: string }): void;` |"}}]);
//# sourceMappingURL=43.20fa0f59.chunk.js.map