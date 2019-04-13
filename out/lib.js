"use strict";

var cloneDeep = require('lodash.clonedeep');

var __steps = void 0;

var __parentStepId = void 0;

var __lastStepId = void 0;

function __enterCall() {
    __parentStepId = __lastStepId;
}

function __leaveCall() {
    if (__parentStepId) {
        __lastStepId = __parentStepId;
        __parentStepId = __steps[__parentStepId].parentStepId;
    }
}

function __trace(_ref) {
    var step = _ref.step,
        enterCall = _ref.enterCall,
        leaveCall = _ref.leaveCall;

    if (enterCall) {
        __enterCall();
    }

    __steps.push({
        parentStepId: __parentStepId,
        ...step
    });

    __lastStepId = __steps.length - 1;

    if (leaveCall) {
        __leaveCall();
    }
}

function lib(a) {
    __trace({
        step: {
            highlight: {
                start: 9,
                end: 16
            },
            bindings: {
                a: cloneDeep(a)
            }
        },
        enterCall: true
    });

    var result, i, iFloat, len;

    __trace({
        step: {
            highlight: {
                start: 23,
                end: 50
            },
            bindings: {
                a: cloneDeep(a),
                result: cloneDeep(result),
                i: cloneDeep(i),
                iFloat: cloneDeep(iFloat),
                len: cloneDeep(len)
            }
        }
    });

    result = [];

    for (i = 0, len = 5; i < len; i++) {
        iFloat = i / 10;
        (function () {
            var _uid = result.push(iFloat);

            __trace({
                step: {
                    highlight: {
                        start: 144,
                        end: 163
                    },
                    bindings: {
                        a: cloneDeep(a),
                        result: cloneDeep(result),
                        i: cloneDeep(i),
                        iFloat: cloneDeep(iFloat),
                        len: cloneDeep(len)
                    }
                }
            });

            return _uid;
        })();
    }

    result[0] = a;

    return function () {
        var _uid2 = result;

        __trace({
            step: {
                highlight: {
                    start: 196,
                    end: 210
                },
                bindings: {
                    a: cloneDeep(a),
                    result: cloneDeep(result),
                    i: cloneDeep(i),
                    iFloat: cloneDeep(iFloat),
                    len: cloneDeep(len)
                },
                returnValue: _uid2
            },
            leaveCall: true
        });

        return _uid2;
    }();
}
function __traceWrapper() {
    __steps = [];
    __parentStepId = undefined;
    __lastStepId = undefined;
    var returnValue = lib.apply(undefined, arguments);
    return {
        steps: __steps,
        returnValue: returnValue
    };
}

;
__traceWrapper.code = "function lib (a) {\n    var result, i, iFloat, len;\n\n    result = [];\n\n    for (i = 0, len = 5; i < len; i++) {\n        iFloat = i / 10;\n        result.push(iFloat);\n    }\n\n    result[0] = a;\n\n    return result;\n}";
module.exports = __traceWrapper;
;