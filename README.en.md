# js-xcall

A Simple Events Dispatcher Singleton Class.

## Install

```bash
npm install js-xcall -S
```

## Import

```javascript
const { XCall } = require('js-xcall');
import { XCall } from 'js-xcall';
```

## Use

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
XCall.dispatch('test-not'); // Error: not found test-not
```

## API Docs

[API Docs](https://github.com/pandaoh/js-xcall/blob/main/docs/README.md)

## Others

* [Issue](https://github.com/pandaoh/js-xcall/issues)
* [Pull Request](https://github.com/pandaoh/js-xcall/pulls)
* [hxbpandaoh@163.com](mailto:hxbpandaoh@163.com)
