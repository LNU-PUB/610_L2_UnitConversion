import { ImperialToMetric } from './ImperialToMetric'
import { MetricToImperial } from './MetricToImperial' // Import the MetricToImperial class

/**
 *
 */
export default class UnitConverter {
  #metricToImperial: MetricToImperial
  #imperialToMetric: ImperialToMetric

  /**
   * Constructor for UnitConverter class.
   */
  constructor () {
    this.#metricToImperial = new MetricToImperial()
    this.#imperialToMetric = new ImperialToMetric()
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
}
