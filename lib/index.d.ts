declare class XCall {
    private static instance;
    private constructor();
    static getInstance(): XCall;
    private _callBackMap;
    static hasCallBack(eventKey: string, callBack: Function): boolean;
    static existEvent(eventKey: string): boolean;
    static addCallBack(eventKey: string, callback: Function): void;
    static setOnceCallBack(eventKey: string, callback: Function): void;
    static removeCallBack(eventKey: string, callback: Function): void;
    static dispatch(eventKey: string, ...args: any[]): void;
}
export { XCall };
export default XCall;
//# sourceMappingURL=index.d.ts.map