import { TemperatureTypes } from './lib/typesConstantsAndEnums'

/**
 *
 */
export class TemperatureConverter {
  /**
   * Convert method that is the main entry point for the class.
   *
   * @param {number} temp - the temperature value to convert
   * @param {TemperatureTypes} from - the temperature type to convert from
   * @param {TemperatureTypes} to - the temperature type to convert to
   * @returns {number} - the converted value
   */
  public converter (temp: number, from: TemperatureTypes, to: TemperatureTypes): number {
    switch (from) {
      case TemperatureTypes.celsius:
        return this.#celsiusTo(to, temp)
      case TemperatureTypes.fahrenheit:
        return this.#fahrenheitTo(to, temp)
      case TemperatureTypes.kelvin:
        return this.#kelvinTo(to, temp)
      default:
        throw new Error('Invalid temperature type')
    }
  }

  // *** Private methods that handles the to selection. ***
  /**
   * Private method that handles the Celsius to selection.
   *
   * @param {TemperatureTypes} to - the temperature type to convert to
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #celsiusTo (to: TemperatureTypes, temp: number): number {
    switch (to) {
      case TemperatureTypes.fahrenheit:
        return this.#celsiusToFahrenheit(temp)
      case TemperatureTypes.kelvin:
        return temp + 273.15
      default:
        throw new Error('Invalid temperature type')
    }
  }

  /**
   * Private method that handles the Fahrenheit to selection.
   *
   * @param {TemperatureTypes} to - the temperature type to convert to
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #fahrenheitTo (to: TemperatureTypes, temp: number): number {
    switch (to) {
      case TemperatureTypes.celsius:
        return this.#fahrenheitToCelsius(temp)
      case TemperatureTypes.kelvin:
        return this.#fahrenheitToKelvin(temp)
      default:
        throw new Error('Invalid temperature type')
    }
  }

  /**
   * Private method that handles the Kelvin to selection.
   *
   * @param {TemperatureTypes} to - the temperature type to convert to
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #kelvinTo (to: TemperatureTypes, temp: number): number {
    switch (to) {
      case TemperatureTypes.celsius:
        return this.#kelvinToCelsius(temp)
      case TemperatureTypes.fahrenheit:
        return this.#kelvinToFahrenheit(temp)
      default:
        throw new Error('Invalid temperature type')
    }
  }

  // *** Private methods that performs the calculations. ***

  /**
   * Private method that handles the Celsius to Fahrenheit conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #celsiusToFahrenheit (temp: number): number {
    return (temp * 9 / 5) + 32
  }

  /**
   * Private method that handles the Celsius to Kelvin conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #celsiusToKelvin (temp: number): number {
    return temp + 273.15
  }

  /**
   * Private method that handles the Fahrenheit to Celsius conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #fahrenheitToCelsius (temp: number): number {
    return (temp - 32) * 5 / 9
  }

  /**
   * Private method that handles the Fahrenheit to Kelvin conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #fahrenheitToKelvin (temp: number): number {
    return this.#celsiusToKelvin(this.#fahrenheitToCelsius(temp))
  }

  /**
   * Private method that handles the Kelvin to Celsius conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #kelvinToCelsius (temp: number): number {
    return temp - 273.15
  }

  /**
   * Private method that handles the Kelvin to Fahrenheit conversion.
   *
   * @param {number} temp - the temperature value to convert
   * @returns {number} - the converted value
   */
  #kelvinToFahrenheit (temp: number): number {
    return this.#celsiusToFahrenheit(this.#kelvinToCelsius(temp))
  }
}
