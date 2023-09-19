import { MetricToImperial } from './MetricToImperial' // Import the MetricToImperial class

/**
 *
 */
export default class UnitConverter {
  #metricToImperial: MetricToImperial

  /**
   * Constructor for UnitConverter class.
   */
  constructor () {
    this.#metricToImperial = new MetricToImperial()
  }

  /**
   * Returns a MetricToImperial object.
   *
   * @returns {MetricToImperial} - MetricToImperial object
   */
  public get MetricToImperial (): MetricToImperial {
    return this.#metricToImperial
  }
}
