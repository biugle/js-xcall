declare class XCall {
    private static instance;
    private constructor();
    static getInstance(): XCall;
    private _callBackMap;
    static hasCallBack(eventKey: string, callBack: Function): boolean;
    static addCallBack(eventKey: string, callback: Function): void;
    static removeCallBack(eventKey: string, callback: Function): void;
    static dispatch(eventKey: string, ...args: any): void;
}
export { XCall };
//# sourceMappingURL=xcall.d.ts.map