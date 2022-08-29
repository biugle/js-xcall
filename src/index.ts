/*
 * @Author: HxB
 * @Date: 2022-08-29 11:19:48
 * @LastEditors: DoubleAm
 * @LastEditTime: 2022-08-29 11:48:59
 * @Description: 主程序
 * @FilePath: \js-xcall\src\index.ts
 */
/**
 * XCall 单例类
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
   * 设置某个一次性事件方法
   * @param eventKey
   * @param callback
   */
  static setOnceCallBack(eventKey: string, callback: Function): void {
    function _callback(...args: any[]) {
      // const args = Array.prototype.slice.call(arguments);
      callback?.apply(null, args);
      XCall.removeCallBack(eventKey, _callback);
    }
    XCall.addCallBack(eventKey, _callback);
  }

  /**
   * 删除某个事件与方法
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
