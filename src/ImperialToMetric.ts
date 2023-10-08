import { Imperial1DUnits, Metric1DUnits, feetInMeters, inchInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums'

/**
 *
 */
export class ImperialToMetric {
  /**
   * Convert method that is the main entry point for the class.
   *
   * @param {number} length - the imperial length to convert
   * @param {Imperial1DUnits} imperialUnit - the imperial unit type to convert from
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  public convert (length: number, imperialUnit: Imperial1DUnits, metricUnit: Metric1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#mileToMetric(length, metricUnit)
      case Imperial1DUnits.yard:
        return this.#yardToMetric(length, metricUnit)
      case Imperial1DUnits.foot:
        return this.#footToMetric(length, metricUnit)
      case Imperial1DUnits.inch:
        return this.#inchToMetric(length, metricUnit)
      case Imperial1DUnits.mil:
        return this.#milToMetric(length, metricUnit)
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that handles the metric selection. ***

  /**
   * Private method that handles the mile to metric selection.
   *
   * @param {number} length - the imperial length to convert
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #mileToMetric (length: number, metricUnit: Metric1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#mileToMeter(length) / 1000
      case Metric1DUnits.meter:
        return this.#mileToMeter(length)
      case Metric1DUnits.decimeter:
        return this.#mileToMeter(length) * 10
      case Metric1DUnits.centimeter:
        return this.#mileToMeter(length) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the yard to metric selection.
   *
   * @param {number} length - the imperial length to convert
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #yardToMetric (length: number, metricUnit: Metric1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#yardToMeter(length) / 1000
      case Metric1DUnits.meter:
        return this.#yardToMeter(length)
      case Metric1DUnits.decimeter:
        return this.#yardToMeter(length) * 10
      case Metric1DUnits.centimeter:
        return this.#yardToMeter(length) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the foot to metric selection.
   *
   * @param {number} length - the imperial length to convert
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #footToMetric (length: number, metricUnit: Metric1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#footToMeter(length) / 1000
      case Metric1DUnits.meter:
        return this.#footToMeter(length)
      case Metric1DUnits.decimeter:
        return this.#footToMeter(length) * 10
      case Metric1DUnits.centimeter:
        return this.#footToMeter(length) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the inch to metric selection.
   *
   * @param {number} length - the imperial length to convert
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #inchToMetric (length: number, metricUnit: Metric1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#inchToMeter(length) / 1000
      case Metric1DUnits.meter:
        return this.#inchToMeter(length)
      case Metric1DUnits.decimeter:
        return this.#inchToMeter(length) * 10
      case Metric1DUnits.centimeter:
        return this.#inchToMeter(length) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  /**
   * Private method that handles the mil to metric selection.
   *
   * @param {number} length - the imperial length to convert
   * @param {Metric1DUnits} metricUnit - the metric unit type to convert to
   * @returns {number} - the converted value
   */
  #milToMetric (length: number, metricUnit: Metric1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#inchToMeter(length / 1000) / 1000
      case Metric1DUnits.meter:
        return this.#inchToMeter(length / 1000)
      case Metric1DUnits.decimeter:
        return this.#inchToMeter(length / 1000) * 10
      case Metric1DUnits.centimeter:
        return this.#inchToMeter(length / 1000) * 100
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that performs the calculations. ***

  /**
   * Converts miles to meters.
   *
   * @param {number} length - the imperial length to convert
   * @returns {number} - the converted value
   */
  #mileToMeter (length: number): number {
    return length * mileInMeters
  }

  /**
   * Converts yards to meters.
   *
   * @param {number} length - the imperial length to convert
   * @returns {number} - the converted value
   */
  #yardToMeter (length: number): number {
    return length * yardInMeters
  }

  /**
   * Converts feet to meters.
   *
   * @param {number} length - the imperial length to convert
   * @returns {number} - the converted value
   */
  #footToMeter (length: number): number {
    return length * feetInMeters
  }

  /**
   * Converts inches to meters.
   *
   * @param {number} length - the imperial length to convert
   * @returns {number} - the converted value
   */
  #inchToMeter (length: number): number {
    return length * inchInMeters
  }
}
