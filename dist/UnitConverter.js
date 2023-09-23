var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UnitConverter_metricToImperial, _UnitConverter_imperialToMetric, _UnitConverter_temperatureConverter;
import { ImperialToMetric } from './ImperialToMetric';
import { MetricToImperial } from './MetricToImperial'; // Import the MetricToImperial class
import { TemperatureConverter } from './TemperatureConverter';
/**
 * UnitConverter class that is the main entry point for the library.
 * It contains the MetricToImperial, ImperialToMetric and TemperatureConverter classes.
 * All accessible through their respective getters.
 */
class UnitConverter {
    /**
     * Constructor for UnitConverter class.
     */
    constructor() {
        _UnitConverter_metricToImperial.set(this, void 0);
        _UnitConverter_imperialToMetric.set(this, void 0);
        _UnitConverter_temperatureConverter.set(this, void 0);
        __classPrivateFieldSet(this, _UnitConverter_metricToImperial, new MetricToImperial(), "f");
        __classPrivateFieldSet(this, _UnitConverter_imperialToMetric, new ImperialToMetric(), "f");
        __classPrivateFieldSet(this, _UnitConverter_temperatureConverter, new TemperatureConverter(), "f");
    }
    /**
     * Returns a MetricToImperial object.
     *
     * @returns {MetricToImperial} - MetricToImperial object
     */
    get MetricToImperial() {
        return __classPrivateFieldGet(this, _UnitConverter_metricToImperial, "f");
    }
    /**
     * Returns an ImperialToMetric object.
     *
     * @returns {ImperialToMetric} - ImperialToMetric object
     */
    get ImperialToMetric() {
        return __classPrivateFieldGet(this, _UnitConverter_imperialToMetric, "f");
    }
    /**
     * Returns a TemperatureConverter object.
     *
     * @returns {TemperatureConverter} - TemperatureConverter object
     */
    get TemperatureConverter() {
        return __classPrivateFieldGet(this, _UnitConverter_temperatureConverter, "f");
    }
}
_UnitConverter_metricToImperial = new WeakMap(), _UnitConverter_imperialToMetric = new WeakMap(), _UnitConverter_temperatureConverter = new WeakMap();
export default UnitConverter;
