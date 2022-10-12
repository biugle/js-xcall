var XCall = (function () {
    function XCall() {
        this._callBackMap = {};
    }
    XCall.getInstance = function () {
        if (!this.instance) {
            this.instance = new XCall();
        }
        return this.instance;
    };
    XCall.hasCallBack = function (eventKey, callBack) {
        var _a, _b;
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            return false;
        }
        return (_b = (_a = XCall.getInstance()._callBackMap[eventKey]) === null || _a === void 0 ? void 0 : _a.includes(callBack)) !== null && _b !== void 0 ? _b : false;
    };
    XCall.existEvent = function (eventKey) {
        var _a;
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            return false;
        }
        return !!((_a = XCall.getInstance()._callBackMap[eventKey]) === null || _a === void 0 ? void 0 : _a.length);
    };
    XCall.addCallBack = function (eventKey, callback) {
        var _a;
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            XCall.getInstance()._callBackMap[eventKey] = [];
        }
        if (!XCall.hasCallBack(eventKey, callback)) {
            (_a = XCall.getInstance()._callBackMap[eventKey]) === null || _a === void 0 ? void 0 : _a.push(callback);
        }
    };
    XCall.setOnceEvent = function (eventKey, callback) {
        function _callback() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            callback === null || callback === void 0 ? void 0 : callback.apply(null, args);
            XCall.deleteEvent(eventKey);
        }
        XCall.addCallBack(eventKey, _callback);
    };
    XCall.removeCallBack = function (eventKey, callback) {
        var _a;
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            return;
        }
        XCall.getInstance()._callBackMap[eventKey] = (_a = XCall.getInstance()._callBackMap[eventKey]) === null || _a === void 0 ? void 0 : _a.filter(function (callBackFunc) { return callBackFunc != callback; });
        if (!XCall.getInstance()._callBackMap[eventKey].length) {
            XCall.deleteEvent(eventKey);
        }
    };
    XCall.deleteEvent = function (eventKey) {
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            return;
        }
        Reflect.deleteProperty(XCall.getInstance()._callBackMap, eventKey);
    };
    XCall.getCount = function (eventKey) {
        if (!eventKey) {
            return Object.keys(XCall.getInstance()._callBackMap).length;
        }
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            return 0;
        }
        return XCall.getInstance()._callBackMap[eventKey].length;
    };
    XCall.dispatch = function (eventKey) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!XCall.getInstance()._callBackMap[eventKey]) {
            throw new Error("\u672A\u627E\u5230\u56DE\u8C03\u4E8B\u4EF6 ".concat(eventKey, " \u7684\u76D1\u542C"));
        }
        XCall.getInstance()._callBackMap[eventKey].forEach(function (callBackFunc) {
            callBackFunc === null || callBackFunc === void 0 ? void 0 : callBackFunc.apply(_this, args);
        });
    };
    return XCall;
}());

export { XCall, XCall as default };
