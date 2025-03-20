goog.provide('owg.ClosureUtils');

//------------------------------------------------------------------------------
/**
 * @namespace ClosureUtils are a collection of polyfill functions for the Google Closure Library
 * @author Lambert Honrade, lbhonrade.6@gmail.com
 */
let ClosureUtils = {};

/**
 * Returns true if the specified value is not undefined.
 * WARNING: Do not use this to test if an object has a property. Use the in
 * operator instead.
 *
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is defined.
 */
ClosureUtils.isDef = function(val) {
    // void 0 always evaluates to undefined and hence we do not need to depend on
    // the definition of the global variable named 'undefined'.
    return val !== void 0;
};

/**
 * Returns true if the specified value is null.
 * @param {?} val Variable to test.
 * @return {boolean} Whether variable is null.
 */
ClosureUtils.isNull = function(val) {
    return val === null;
  };

ClosureUtils.MouseButton = {
    LEFT: 0,
    MIDDLE: 1,
    RIGHT: 2,
};
