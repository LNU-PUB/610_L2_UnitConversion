import { type Imperial1DTypes, type Metric1DTypes } from './lib/typesConstantsAndEnums'

/**
 *
 */
export class ImperialToMetric {
  /**
   * Convert method that is the main entry point for the class.
   *
   * @param {Imperial1DTypes} imperialUnit - the imperial unit type to convert from
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  public convert (imperialUnit: Imperial1DTypes, imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (imperialUnit) {
      case imperialUnit.mile:
        return this.#mileToMetric(imperialValue, metricUnit)
      case imperialUnit.yard:
        return this.#yardToMetric(imperialValue, metricUnit)
      case imperialUnit.foot:
        return this.#footToMetric(imperialValue, metricUnit)
      case imperialUnit.inch:
        return this.#inchToMetric(imperialValue, metricUnit)
      case imperialUnit.mil:
        return this.#milToMetric(imperialValue, metricUnit)
      default:
        throw new Error('Invalid metric unit type')
    }
  }
}
