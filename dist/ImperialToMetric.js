var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ImperialToMetric_instances, _ImperialToMetric_mileToMetric, _ImperialToMetric_yardToMetric, _ImperialToMetric_footToMetric, _ImperialToMetric_inchToMetric, _ImperialToMetric_milToMetric, _ImperialToMetric_mileToMeter, _ImperialToMetric_yardToMeter, _ImperialToMetric_footToMeter, _ImperialToMetric_inchToMeter;
import { Imperial1DTypes, Metric1DTypes, feetInMeters, inchInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums';
/**
 *
 */
export class ImperialToMetric {
    constructor() {
        _ImperialToMetric_instances.add(this);
    }
    /**
     * Convert method that is the main entry point for the class.
     *
     * @param {Imperial1DTypes} imperialUnit - the imperial unit type to convert from
     * @param {number} imperialValue - the imperial value to convert
     * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
     * @returns {number} - the converted value
     */
    convert(imperialUnit, imperialValue, metricUnit) {
        switch (imperialUnit) {
            case Imperial1DTypes.mile:
                return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_mileToMetric).call(this, imperialValue, metricUnit);
            case Imperial1DTypes.yard:
                return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_yardToMetric).call(this, imperialValue, metricUnit);
            case Imperial1DTypes.foot:
                return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_footToMetric).call(this, imperialValue, metricUnit);
            case Imperial1DTypes.inch:
                return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMetric).call(this, imperialValue, metricUnit);
            case Imperial1DTypes.mil:
                return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_milToMetric).call(this, imperialValue, metricUnit);
            default:
                throw new Error('Invalid metric unit type');
        }
    }
}
_ImperialToMetric_instances = new WeakSet(), _ImperialToMetric_mileToMetric = function _ImperialToMetric_mileToMetric(imperialValue, metricUnit) {
    switch (metricUnit) {
        case Metric1DTypes.kilometer:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_mileToMeter).call(this, imperialValue) / 1000;
        case Metric1DTypes.meter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_mileToMeter).call(this, imperialValue);
        case Metric1DTypes.decimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_mileToMeter).call(this, imperialValue) * 10;
        case Metric1DTypes.centimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_mileToMeter).call(this, imperialValue) * 100;
        default:
            throw new Error('Invalid metric unit type');
    }
}, _ImperialToMetric_yardToMetric = function _ImperialToMetric_yardToMetric(imperialValue, metricUnit) {
    switch (metricUnit) {
        case Metric1DTypes.kilometer:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_yardToMeter).call(this, imperialValue) / 1000;
        case Metric1DTypes.meter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_yardToMeter).call(this, imperialValue);
        case Metric1DTypes.decimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_yardToMeter).call(this, imperialValue) * 10;
        case Metric1DTypes.centimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_yardToMeter).call(this, imperialValue) * 100;
        default:
            throw new Error('Invalid metric unit type');
    }
}, _ImperialToMetric_footToMetric = function _ImperialToMetric_footToMetric(imperialValue, metricUnit) {
    switch (metricUnit) {
        case Metric1DTypes.kilometer:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_footToMeter).call(this, imperialValue) / 1000;
        case Metric1DTypes.meter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_footToMeter).call(this, imperialValue);
        case Metric1DTypes.decimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_footToMeter).call(this, imperialValue) * 10;
        case Metric1DTypes.centimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_footToMeter).call(this, imperialValue) * 100;
        default:
            throw new Error('Invalid metric unit type');
    }
}, _ImperialToMetric_inchToMetric = function _ImperialToMetric_inchToMetric(imperialValue, metricUnit) {
    switch (metricUnit) {
        case Metric1DTypes.kilometer:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue) / 1000;
        case Metric1DTypes.meter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue);
        case Metric1DTypes.decimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue) * 10;
        case Metric1DTypes.centimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue) * 100;
        default:
            throw new Error('Invalid metric unit type');
    }
}, _ImperialToMetric_milToMetric = function _ImperialToMetric_milToMetric(imperialValue, metricUnit) {
    switch (metricUnit) {
        case Metric1DTypes.kilometer:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue / 1000) / 1000;
        case Metric1DTypes.meter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue / 1000);
        case Metric1DTypes.decimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue / 1000) * 10;
        case Metric1DTypes.centimeter:
            return __classPrivateFieldGet(this, _ImperialToMetric_instances, "m", _ImperialToMetric_inchToMeter).call(this, imperialValue / 1000) * 100;
        default:
            throw new Error('Invalid metric unit type');
    }
}, _ImperialToMetric_mileToMeter = function _ImperialToMetric_mileToMeter(imperialValue) {
    return imperialValue * mileInMeters;
}, _ImperialToMetric_yardToMeter = function _ImperialToMetric_yardToMeter(imperialValue) {
    return imperialValue * yardInMeters;
}, _ImperialToMetric_footToMeter = function _ImperialToMetric_footToMeter(imperialValue) {
    return imperialValue * feetInMeters;
}, _ImperialToMetric_inchToMeter = function _ImperialToMetric_inchToMeter(imperialValue) {
    return imperialValue * inchInMeters;
};
