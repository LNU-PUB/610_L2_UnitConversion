var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _TemperatureConverter_instances, _TemperatureConverter_celsiusTo, _TemperatureConverter_fahrenheitTo, _TemperatureConverter_kelvinTo, _TemperatureConverter_celsiusToFahrenheit, _TemperatureConverter_celsiusToKelvin, _TemperatureConverter_fahrenheitToCelsius, _TemperatureConverter_fahrenheitToKelvin, _TemperatureConverter_kelvinToCelsius, _TemperatureConverter_kelvinToFahrenheit;
import { TemperatureTypes } from './lib/typesConstantsAndEnums';
/**
 * TemperatureConverter class that handles the conversion of temperature values.
 */
export class TemperatureConverter {
    constructor() {
        _TemperatureConverter_instances.add(this);
    }
    /**
     * Convert method that is the main entry point for the class.
     *
     * @param {number} temp - the temperature value to convert
     * @param {TemperatureTypes} from - the temperature type to convert from
     * @param {TemperatureTypes} to - the temperature type to convert to
     * @returns {number} - the converted value
     */
    converter(temp, from, to) {
        switch (from) {
            case TemperatureTypes.celsius:
                return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_celsiusTo).call(this, to, temp);
            case TemperatureTypes.fahrenheit:
                return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_fahrenheitTo).call(this, to, temp);
            case TemperatureTypes.kelvin:
                return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_kelvinTo).call(this, to, temp);
            default:
                throw new Error('Invalid temperature type');
        }
    }
}
_TemperatureConverter_instances = new WeakSet(), _TemperatureConverter_celsiusTo = function _TemperatureConverter_celsiusTo(to, temp) {
    switch (to) {
        case TemperatureTypes.fahrenheit:
            return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_celsiusToFahrenheit).call(this, temp);
        case TemperatureTypes.kelvin:
            return temp + 273.15;
        default:
            throw new Error('Invalid temperature type');
    }
}, _TemperatureConverter_fahrenheitTo = function _TemperatureConverter_fahrenheitTo(to, temp) {
    switch (to) {
        case TemperatureTypes.celsius:
            return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_fahrenheitToCelsius).call(this, temp);
        case TemperatureTypes.kelvin:
            return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_fahrenheitToKelvin).call(this, temp);
        default:
            throw new Error('Invalid temperature type');
    }
}, _TemperatureConverter_kelvinTo = function _TemperatureConverter_kelvinTo(to, temp) {
    switch (to) {
        case TemperatureTypes.celsius:
            return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_kelvinToCelsius).call(this, temp);
        case TemperatureTypes.fahrenheit:
            return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_kelvinToFahrenheit).call(this, temp);
        default:
            throw new Error('Invalid temperature type');
    }
}, _TemperatureConverter_celsiusToFahrenheit = function _TemperatureConverter_celsiusToFahrenheit(temp) {
    return (temp * 9 / 5) + 32;
}, _TemperatureConverter_celsiusToKelvin = function _TemperatureConverter_celsiusToKelvin(temp) {
    return temp + 273.15;
}, _TemperatureConverter_fahrenheitToCelsius = function _TemperatureConverter_fahrenheitToCelsius(temp) {
    return (temp - 32) * 5 / 9;
}, _TemperatureConverter_fahrenheitToKelvin = function _TemperatureConverter_fahrenheitToKelvin(temp) {
    return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_celsiusToKelvin).call(this, __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_fahrenheitToCelsius).call(this, temp));
}, _TemperatureConverter_kelvinToCelsius = function _TemperatureConverter_kelvinToCelsius(temp) {
    return temp - 273.15;
}, _TemperatureConverter_kelvinToFahrenheit = function _TemperatureConverter_kelvinToFahrenheit(temp) {
    return __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_celsiusToFahrenheit).call(this, __classPrivateFieldGet(this, _TemperatureConverter_instances, "m", _TemperatureConverter_kelvinToCelsius).call(this, temp));
};
