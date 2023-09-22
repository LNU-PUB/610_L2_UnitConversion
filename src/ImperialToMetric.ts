import { Imperial1DTypes, Metric1DTypes, feetInMeters, inchInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums'

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
      case Imperial1DTypes.mile:
        return this.#mileToMetric(imperialValue, metricUnit)
      case Imperial1DTypes.yard:
        return this.#yardToMetric(imperialValue, metricUnit)
      case Imperial1DTypes.foot:
        return this.#footToMetric(imperialValue, metricUnit)
      case Imperial1DTypes.inch:
        return this.#inchToMetric(imperialValue, metricUnit)
      case Imperial1DTypes.mil:
        return this.#milToMetric(imperialValue, metricUnit)
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that handles the metric selection. ***

  /**
   * Private method that handles the mile to metric selection.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #mileToMetric (imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (metricUnit) {
      case Metric1DTypes.kilometer:
        return this.#mileToMeter(imperialValue) / 1000
      case Metric1DTypes.meter:
        return this.#mileToMeter(imperialValue)
      case Metric1DTypes.decimeter:
        return this.#mileToMeter(imperialValue) * 10
      case Metric1DTypes.centimeter:
        return this.#mileToMeter(imperialValue) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the yard to metric selection.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #yardToMetric (imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (metricUnit) {
      case Metric1DTypes.kilometer:
        return this.#yardToMeter(imperialValue) / 1000
      case Metric1DTypes.meter:
        return this.#yardToMeter(imperialValue)
      case Metric1DTypes.decimeter:
        return this.#yardToMeter(imperialValue) * 10
      case Metric1DTypes.centimeter:
        return this.#yardToMeter(imperialValue) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the foot to metric selection.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #footToMetric (imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (metricUnit) {
      case Metric1DTypes.kilometer:
        return this.#footToMeter(imperialValue) / 1000
      case Metric1DTypes.meter:
        return this.#footToMeter(imperialValue)
      case Metric1DTypes.decimeter:
        return this.#footToMeter(imperialValue) * 10
      case Metric1DTypes.centimeter:
        return this.#footToMeter(imperialValue) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the inch to metric selection.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #inchToMetric (imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (metricUnit) {
      case Metric1DTypes.kilometer:
        return this.#inchToMeter(imperialValue) / 1000
      case Metric1DTypes.meter:
        return this.#inchToMeter(imperialValue)
      case Metric1DTypes.decimeter:
        return this.#inchToMeter(imperialValue) * 10
      case Metric1DTypes.centimeter:
        return this.#inchToMeter(imperialValue) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the mil to metric selection.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @param {Metric1DTypes} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #milToMetric (imperialValue: number, metricUnit: Metric1DTypes): number {
    switch (metricUnit) {
      case Metric1DTypes.kilometer:
        return this.#inchToMeter(imperialValue / 1000) / 1000
      case Metric1DTypes.meter:
        return this.#inchToMeter(imperialValue / 1000)
      case Metric1DTypes.decimeter:
        return this.#inchToMeter(imperialValue / 1000) * 10
      case Metric1DTypes.centimeter:
        return this.#inchToMeter(imperialValue / 1000) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that performs the calculations. ***

  /**
   * Converts miles to meters.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @returns {number} - the converted value
   */
  #mileToMeter (imperialValue: number): number {
    return imperialValue * mileInMeters
  }

  /**
   * Converts yards to meters.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @returns {number} - the converted value
   */
  #yardToMeter (imperialValue: number): number {
    return imperialValue * yardInMeters
  }

  /**
   * Converts feet to meters.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @returns {number} - the converted value
   */
  #footToMeter (imperialValue: number): number {
    return imperialValue * feetInMeters
  }

  /**
   * Converts inches to meters.
   *
   * @param {number} imperialValue - the imperial value to convert
   * @returns {number} - the converted value
   */
  #inchToMeter (imperialValue: number): number {
    return imperialValue * inchInMeters
  }
}
