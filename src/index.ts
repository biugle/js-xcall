/*
 * @Author: HxB
 * @Date: 2022-08-29 11:19:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-10-12 10:29:28
 * @Description: 主程序 EventBus
 * @FilePath: \js-xcall\src\index.ts
 */
/**
 * XCall 单例类
 * 直接引入使用即可
 */
class XCall {
  private static instance: XCall;
  private constructor() {} // 单例禁止外部初始化

  /**
   * 获取 XCall 单例
   * @returns
   */
  static getInstance(): XCall {
    if (!this.instance) {
      this.instance = new XCall();
    }
    return this.instance;
  }

  /**
   * 事件容器
   * @private
   * @type {{ [key: string]: Function[] }}
   * @memberof XCall
   */
  private _callBackMap: { [key: string]: Function[] } = {};

  /**
   * 判断是否存在某个事件与方法
   * @param eventKey
   * @param callBack
   * @returns
   */
  static hasCallBack(eventKey: string, callBack: Function): boolean {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      return false;
    }
    return XCall.getInstance()._callBackMap[eventKey]?.includes(callBack) ?? false;
  }

  /**
   * 校验是否存在某个事件
   * @param eventKey
   * @returns
   */
  static existEvent(eventKey: string): boolean {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      return false;
    }
    return !!XCall.getInstance()._callBackMap[eventKey]?.length;
  }

  /**
   * 添加某个事件与方法
   * @param eventKey
   * @param callback
   */
  static addCallBack(eventKey: string, callback: Function): void {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      XCall.getInstance()._callBackMap[eventKey] = [];
    }
    if (!XCall.hasCallBack(eventKey, callback)) {
      XCall.getInstance()._callBackMap[eventKey]?.push(callback);
    }
  }

  /**
   * 设置某个一次性事件
   * @param eventKey
   * @param callback
   */
  static setOnceEvent(eventKey: string, callback: Function): void {
    function _callback(...args: any[]) {
      // const args = Array.prototype.slice.call(arguments);
      callback?.apply(null, args);
      XCall.deleteEvent(eventKey);
    }
    XCall.addCallBack(eventKey, _callback);
  }

  /**
   * 删除某个事件的某个方法
   * @param eventKey
   * @param callback
   * @returns
   */
  static removeCallBack(eventKey: string, callback: Function): void {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      return;
    }
    XCall.getInstance()._callBackMap[eventKey] = XCall.getInstance()._callBackMap[eventKey]?.filter(
      (callBackFunc) => callBackFunc != callback
    );
    if (!XCall.getInstance()._callBackMap[eventKey].length) {
      XCall.deleteEvent(eventKey);
    }
  }

  /**
   * 去除某个监听事件
   * @param eventKey
   * @returns
   */
  static deleteEvent(eventKey: string): void {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      return;
    }
    Reflect.deleteProperty(XCall.getInstance()._callBackMap, eventKey);
    // delete XCall.getInstance()._callBackMap[eventKey];
  }

  /**
   * 获取监听事件或某个方法的数目
   * @param eventKey
   * @returns
   */
  static getCount(eventKey?: string): number {
    if (!eventKey) {
      return Object.keys(XCall.getInstance()._callBackMap).length;
    }
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      return 0;
    }
    return XCall.getInstance()._callBackMap[eventKey].length;
  }

  /**
   * 触发某个事件
   * @param eventKey
   * @param args
   */
  static dispatch(eventKey: string, ...args: any[]) {
    if (!XCall.getInstance()._callBackMap[eventKey]) {
      throw new Error(`未找到回调事件 ${eventKey} 的监听`);
    }
    XCall.getInstance()._callBackMap[eventKey].forEach((callBackFunc) => {
      callBackFunc?.apply(this, args);
    });
  }
}

export { XCall };
export default XCall;
