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

<script src="xcall.min.js"></script>
const { XCall } = $call;
XCall.addCallBack('test', function () {
  console.log('test-browser', arguments);
});
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
  XCall.hasCallBack('test', () => {}),
  XCall.existEvent('test')
); // hasCallBack-test true false true

XCall.getCount(); // 1 (event count)

XCall.removeCallBack('test', test);
XCall.existEvent('test'); // true
XCall.getCount('test'); // 1 (callback count)
XCall.dispatch('test'); // test1 [Arguments] {}
XCall.deleteEvent('test');
XCall.getCount('test'); // 0 (callback count)
XCall.existEvent('test'); // false

XCall.setOnceEvent('test-once', test);
XCall.existEvent('test-once'); // true
XCall.getCount('test-once'); // 1 (callback count)
XCall.getCount(); // 1 (event count)
XCall.dispatch('test-once');
XCall.existEvent('test-once'); // false

XCall.getCount(); // 0  (event count)

XCall.dispatch('test-not'); // Error: 未找到回调事件 test-not 的监听

XCall.addCallBack('hello', test); // 只有一个事件
XCall.existEvent('hello'); // true
XCall.dispatch('hello', 0, 1); // test2 0 1
XCall.removeCallBack('hello', test); // remove 时直接会删除监听，释放内存。
XCall.existEvent('hello'); // false
```

## API 列表

[API Docs](https://github.com/biugle/js-xcall/blob/main/docs/README.md)

## 其他

* [Issue](https://github.com/biugle/js-xcall/issues)
* [Pull Request](https://github.com/biugle/js-xcall/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
