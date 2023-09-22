import { ImperialToMetric } from './ImperialToMetric'
import { MetricToImperial } from './MetricToImperial' // Import the MetricToImperial class
import { TemperatureConverter } from './TemperatureConverter'

/**
 * UnitConverter class that is the main entry point for the library.
 * It contains the MetricToImperial, ImperialToMetric and TemperatureConverter classes.
 * All accessible through their respective getters.
 */
export default class UnitConverter {
  #metricToImperial: MetricToImperial
  #imperialToMetric: ImperialToMetric
  #temperatureConverter: TemperatureConverter

  /**
   * Constructor for UnitConverter class.
   */
  constructor () {
    this.#metricToImperial = new MetricToImperial()
    this.#imperialToMetric = new ImperialToMetric()
    this.#temperatureConverter = new TemperatureConverter()
  }

  /**
   * Returns a MetricToImperial object.
   *
   * @returns {MetricToImperial} - MetricToImperial object
   */
  public get MetricToImperial (): MetricToImperial {
    return this.#metricToImperial
  }

  /**
   * Returns an ImperialToMetric object.
   *
   * @returns {ImperialToMetric} - ImperialToMetric object
   */
  public get ImperialToMetric (): ImperialToMetric {
    return this.#imperialToMetric
  }

  /**
   * Returns a TemperatureConverter object.
   *
   * @returns {TemperatureConverter} - TemperatureConverter object
   */
  public get TemperatureConverter (): TemperatureConverter {
    return this.#temperatureConverter
  }
}
