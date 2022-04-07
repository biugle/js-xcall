[js-xcall - v1.1.1](../README.md) / XCall

# Class: XCall

XCall 单例类

## Table of contents

### Constructors

- [constructor](XCall.md#constructor)

### Properties

- [\_callBackMap](XCall.md#_callbackmap)
- [instance](XCall.md#instance)

### Methods

- [addCallBack](XCall.md#addcallback)
- [dispatch](XCall.md#dispatch)
- [getInstance](XCall.md#getinstance)
- [hasCallBack](XCall.md#hascallback)
- [removeCallBack](XCall.md#removecallback)

## Constructors

### constructor

• `Private` **new XCall**()

## Properties

### \_callBackMap

• `Private` **\_callBackMap**: `Object` = `{}`

事件容器

**`memberof`** XCall

#### Index signature

▪ [key: `string`]: `Function`[]

___

### instance

▪ `Static` `Private` **instance**: [`XCall`](XCall.md)

## Methods

### addCallBack

▸ `Static` **addCallBack**(`eventKey`, `callback`): `void`

添加某个事件与方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventKey` | `string` |
| `callback` | `Function` |

#### Returns

`void`

___

### dispatch

▸ `Static` **dispatch**(`eventKey`, ...`args`): `void`

触发某个事件

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventKey` | `string` |
| `...args` | `any` |

#### Returns

`void`

___

### getInstance

▸ `Static` **getInstance**(): [`XCall`](XCall.md)

获取 XCall 单例

#### Returns

[`XCall`](XCall.md)

___

### hasCallBack

▸ `Static` **hasCallBack**(`eventKey`, `callBack`): `boolean`

判断是否存在某个事件与方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventKey` | `string` |
| `callBack` | `Function` |

#### Returns

`boolean`

___

### removeCallBack

▸ `Static` **removeCallBack**(`eventKey`, `callback`): `void`

删除某个事件与方法

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventKey` | `string` |
| `callback` | `Function` |

#### Returns

`void`
