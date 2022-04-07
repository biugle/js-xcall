# js-xcall

一个简单的事件派发单例类

## 安装

```bash
npm install js-xcall -S
```

## 引入

```javascript
const { XCall } = require('js-xcall');
import { XCall } from 'js-xcall';
import XCall from 'js-xcall';
```

## 使用

```javascript
console.log(XCall);

XCall.addCallBack('test', function () {
  console.log('test1', arguments);
});

var test = function (data1, data2) {
  console.log('test2', data1, data2);
};

XCall.addCallBack('test', test);

XCall.dispatch('test', 123, 456);
// test1 [Arguments] { '0': 123, '1': 456 }
// test2 123 456

console.log(
  'hasCallBack-test',
  XCall.hasCallBack('test', test),
  XCall.hasCallBack('test', () => {})
); // hasCallBack-test true false

XCall.removeCallBack('test', test);

XCall.dispatch('test'); // test1 [Arguments] {}
XCall.dispatch('test-not'); // Error: 未找到回调事件 test-not 的监听
```

## API 列表

[API Docs](https://github.com/pandaoh/js-xcall/blob/main/docs/README.md)

## 其他

* [Issue](https://github.com/pandaoh/js-xcall/issues)
* [Pull Request](https://github.com/pandaoh/js-xcall/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
