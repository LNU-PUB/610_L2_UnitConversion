var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MetricToImperial_instances, _MetricToImperial_kilometerToImperial, _MetricToImperial_meterToImperial, _MetricToImperial_decimeterToImperial, _MetricToImperial_centimeterToImperial, _MetricToImperial_kilometerToMile, _MetricToImperial_kilometerToYard, _MetricToImperial_kilometerToFoot, _MetricToImperial_kilometerToInch, _MetricToImperial_kilometerToMil, _MetricToImperial_meterToMile, _MetricToImperial_meterToYard, _MetricToImperial_meterToFoot, _MetricToImperial_meterToInch, _MetricToImperial_meterToMil, _MetricToImperial_decimeterToMile, _MetricToImperial_decimeterToYard, _MetricToImperial_decimeterToFoot, _MetricToImperial_decimeterToInch, _MetricToImperial_decimeterToMil, _MetricToImperial_centimeterToMile, _MetricToImperial_centimeterToYard, _MetricToImperial_centimeterToFoot, _MetricToImperial_centimeterToInch, _MetricToImperial_centimeterToMil;
import { Imperial1DTypes, Metric1DTypes, feetInMeters, inchInMeters, milInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums';
/**
 *
 */
export class MetricToImperial {
    constructor() {
        _MetricToImperial_instances.add(this);
    }
    /**
     * Convert method that is the main entry point for the class.
     *
     * @param {Metric1DTypes} metricUnit - The metric unit to convert from
     * @param {number} metricValue - The metric value to convert
     * @param {Imperial1DTypes} imperialUnit - The imperial unit to convert to
     * @returns {number} - The converted value
     */
    convert(metricUnit, metricValue, imperialUnit) {
        switch (metricUnit) {
            case Metric1DTypes.kilometer:
                return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToImperial).call(this, metricValue, imperialUnit);
            case Metric1DTypes.meter:
                return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToImperial).call(this, metricValue, imperialUnit);
            case Metric1DTypes.decimeter:
                return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToImperial).call(this, metricValue, imperialUnit);
            case Metric1DTypes.centimeter:
                return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToImperial).call(this, metricValue, imperialUnit);
            default:
                throw new Error('Invalid metric unit type');
        }
    }
}
_MetricToImperial_instances = new WeakSet(), _MetricToImperial_kilometerToImperial = function _MetricToImperial_kilometerToImperial(metricValue, imperialUnit) {
    switch (imperialUnit) {
        case Imperial1DTypes.mile:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToMile).call(this, metricValue);
        case Imperial1DTypes.yard:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToYard).call(this, metricValue);
        case Imperial1DTypes.foot:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToFoot).call(this, metricValue);
        case Imperial1DTypes.inch:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToInch).call(this, metricValue);
        case Imperial1DTypes.mil:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_kilometerToMil).call(this, metricValue);
        default:
            throw new Error('Invalid imperial unit type');
    }
}, _MetricToImperial_meterToImperial = function _MetricToImperial_meterToImperial(metricValue, imperialUnit) {
    switch (imperialUnit) {
        case Imperial1DTypes.mile:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToMile).call(this, metricValue);
        case Imperial1DTypes.yard:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToYard).call(this, metricValue);
        case Imperial1DTypes.foot:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToFoot).call(this, metricValue);
        case Imperial1DTypes.inch:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToInch).call(this, metricValue);
        case Imperial1DTypes.mil:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_meterToMil).call(this, metricValue);
        default:
            throw new Error('Invalid imperial unit type');
    }
}, _MetricToImperial_decimeterToImperial = function _MetricToImperial_decimeterToImperial(metricValue, imperialUnit) {
    switch (imperialUnit) {
        case Imperial1DTypes.mile:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToMile).call(this, metricValue);
        case Imperial1DTypes.yard:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToYard).call(this, metricValue);
        case Imperial1DTypes.foot:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToFoot).call(this, metricValue);
        case Imperial1DTypes.inch:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToInch).call(this, metricValue);
        case Imperial1DTypes.mil:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_decimeterToMil).call(this, metricValue);
        default:
            throw new Error('Invalid imperial unit type');
    }
}, _MetricToImperial_centimeterToImperial = function _MetricToImperial_centimeterToImperial(metricValue, imperialUnit) {
    switch (imperialUnit) {
        case Imperial1DTypes.mile:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToMile).call(this, metricValue);
        case Imperial1DTypes.yard:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToYard).call(this, metricValue);
        case Imperial1DTypes.foot:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToFoot).call(this, metricValue);
        case Imperial1DTypes.inch:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToInch).call(this, metricValue);
        case Imperial1DTypes.mil:
            return __classPrivateFieldGet(this, _MetricToImperial_instances, "m", _MetricToImperial_centimeterToMil).call(this, metricValue);
        default:
            throw new Error('Invalid imperial unit type');
    }
}, _MetricToImperial_kilometerToMile = function _MetricToImperial_kilometerToMile(metricValue) {
    return metricValue / mileInMeters * 1000;
}, _MetricToImperial_kilometerToYard = function _MetricToImperial_kilometerToYard(metricValue) {
    return metricValue / yardInMeters * 1000;
}, _MetricToImperial_kilometerToFoot = function _MetricToImperial_kilometerToFoot(metricValue) {
    return metricValue / feetInMeters * 1000;
}, _MetricToImperial_kilometerToInch = function _MetricToImperial_kilometerToInch(metricValue) {
    return metricValue / inchInMeters * 1000;
}, _MetricToImperial_kilometerToMil = function _MetricToImperial_kilometerToMil(metricValue) {
    return metricValue / milInMeters * 1000;
}, _MetricToImperial_meterToMile = function _MetricToImperial_meterToMile(metricValue) {
    return metricValue / mileInMeters;
}, _MetricToImperial_meterToYard = function _MetricToImperial_meterToYard(metricValue) {
    return metricValue / yardInMeters;
}, _MetricToImperial_meterToFoot = function _MetricToImperial_meterToFoot(metricValue) {
    return metricValue / feetInMeters;
}, _MetricToImperial_meterToInch = function _MetricToImperial_meterToInch(metricValue) {
    return metricValue / inchInMeters;
}, _MetricToImperial_meterToMil = function _MetricToImperial_meterToMil(metricValue) {
    return metricValue / milInMeters;
}, _MetricToImperial_decimeterToMile = function _MetricToImperial_decimeterToMile(metricValue) {
    return metricValue / (mileInMeters * 10);
}, _MetricToImperial_decimeterToYard = function _MetricToImperial_decimeterToYard(metricValue) {
    return metricValue / (yardInMeters * 10);
}, _MetricToImperial_decimeterToFoot = function _MetricToImperial_decimeterToFoot(metricValue) {
    return metricValue / (feetInMeters * 10);
}, _MetricToImperial_decimeterToInch = function _MetricToImperial_decimeterToInch(metricValue) {
    return metricValue / (inchInMeters * 10);
}, _MetricToImperial_decimeterToMil = function _MetricToImperial_decimeterToMil(metricValue) {
    return metricValue / (milInMeters * 10);
}, _MetricToImperial_centimeterToMile = function _MetricToImperial_centimeterToMile(metricValue) {
    return metricValue / (mileInMeters * 100);
}, _MetricToImperial_centimeterToYard = function _MetricToImperial_centimeterToYard(metricValue) {
    return metricValue / (yardInMeters * 100);
}, _MetricToImperial_centimeterToFoot = function _MetricToImperial_centimeterToFoot(metricValue) {
    return metricValue / (feetInMeters * 100);
}, _MetricToImperial_centimeterToInch = function _MetricToImperial_centimeterToInch(metricValue) {
    return metricValue / (inchInMeters * 100);
}, _MetricToImperial_centimeterToMil = function _MetricToImperial_centimeterToMil(metricValue) {
    return metricValue / (milInMeters * 100);
};
