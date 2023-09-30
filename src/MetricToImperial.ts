import { Imperial1DUnits, Metric1DUnits, feetInMeters, inchInMeters, milInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums'

/**
 *
 */
export class MetricToImperial {
  /**
   * Convert method that is the main entry point for the class.
   *
   * @param {Metric1DUnits} metricUnit - The metric unit to convert from
   * @param {number} metricValue - The metric value to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @returns {number} - The converted value
   */
  public convert (metricUnit: Metric1DUnits, metricValue: number, imperialUnit: Imperial1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#kilometerToImperial(metricValue, imperialUnit)
      case Metric1DUnits.meter:
        return this.#meterToImperial(metricValue, imperialUnit)
      case Metric1DUnits.decimeter:
        return this.#decimeterToImperial(metricValue, imperialUnit)
      case Metric1DUnits.centimeter:
        return this.#centimeterToImperial(metricValue, imperialUnit)
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that handles the imperial selection. ***

  /**
   * Handles kilometers to imperial conversions.
   *
   * @param {number} metricValue - The metric value to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @returns {number} - The converted value
   */
  #kilometerToImperial (metricValue: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#kilometerToMile(metricValue)
      case Imperial1DUnits.yard:
        return this.#kilometerToYard(metricValue)
      case Imperial1DUnits.foot:
        return this.#kilometerToFoot(metricValue)
      case Imperial1DUnits.inch:
        return this.#kilometerToInch(metricValue)
      case Imperial1DUnits.mil:
        return this.#kilometerToMil(metricValue)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles meters to imperial conversions.
   *
   * @param {number} metricValue - The metric value to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #meterToImperial (metricValue: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#meterToMile(metricValue)
      case Imperial1DUnits.yard:
        return this.#meterToYard(metricValue)
      case Imperial1DUnits.foot:
        return this.#meterToFoot(metricValue)
      case Imperial1DUnits.inch:
        return this.#meterToInch(metricValue)
      case Imperial1DUnits.mil:
        return this.#meterToMil(metricValue)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles decimeters to imperial conversions.
   *
   * @param {number} metricValue - The metric value to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #decimeterToImperial (metricValue: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#decimeterToMile(metricValue)
      case Imperial1DUnits.yard:
        return this.#decimeterToYard(metricValue)
      case Imperial1DUnits.foot:
        return this.#decimeterToFoot(metricValue)
      case Imperial1DUnits.inch:
        return this.#decimeterToInch(metricValue)
      case Imperial1DUnits.mil:
        return this.#decimeterToMil(metricValue)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles centimeters to imperial conversions.
   *
   * @param {number} metricValue - The metric value to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #centimeterToImperial (metricValue: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#centimeterToMile(metricValue)
      case Imperial1DUnits.yard:
        return this.#centimeterToYard(metricValue)
      case Imperial1DUnits.foot:
        return this.#centimeterToFoot(metricValue)
      case Imperial1DUnits.inch:
        return this.#centimeterToInch(metricValue)
      case Imperial1DUnits.mil:
        return this.#centimeterToMil(metricValue)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  // *** Private methods that performs the calculations. ***

  /*      *** Kilometer to imperial functions *** */
  /**
   * Converts kilometers to miles.
   *
   * @param {number} metricValue - The metric value in km to convert
   * @returns {number} - The converted value in miles
   */
  #kilometerToMile (metricValue: number): number {
    return metricValue / mileInMeters * 1000
  }

  /**
   * Converts kilometers to miles.
   *
   * @param {number} metricValue - The metric value in km to convert
   * @returns {number} - The converted value in yards
   */
  #kilometerToYard (metricValue: number): number {
    return metricValue / yardInMeters * 1000
  }

  /**
   * Converts kilometers to feet.
   *
   * @param {number} metricValue - The metric value in km to convert
   * @returns {number} - The converted value in feet
   */
  #kilometerToFoot (metricValue: number): number {
    return metricValue / feetInMeters * 1000
  }

  /**
   * Converts kilometers to inches.
   *
   * @param {number} metricValue - The metric value in km to convert
   * @returns {number} - The converted value in inches
   */
  #kilometerToInch (metricValue: number): number {
    return metricValue / inchInMeters * 1000
  }

  /**
   * Converts kilometers to mils.
   *
   * @param {number} metricValue - The metric value in km to convert
   * @returns {number} - The converted value in mils
   */
  #kilometerToMil (metricValue: number): number {
    return metricValue / milInMeters * 1000
  }

  /*      *** Meter to imperial functions *** */
  /**
   * Converts meters to miles.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in miles
   */
  #meterToMile (metricValue: number): number {
    return metricValue / mileInMeters
  }

  /**
   * Converts meters to yards.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in yards
   */
  #meterToYard (metricValue: number): number {
    return metricValue / yardInMeters
  }

  /**
   * Converts meters to feet.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in feet
   */
  #meterToFoot (metricValue: number): number {
    return metricValue / feetInMeters
  }

  /**
   * Converts meters to inches.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in inches
   */
  #meterToInch (metricValue: number): number {
    return metricValue / inchInMeters
  }

  /**
   * Converts meters to mils.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in mils
   */
  #meterToMil (metricValue: number): number {
    return metricValue / milInMeters
  }

  /*      *** Decimeter to imperial functions *** */

  /**
   * Converts decimeters to miles.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in miles
   */
  #decimeterToMile (metricValue: number): number {
    return metricValue / (mileInMeters * 10)
  }

  /**
   * Converts decimeters to yards.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in yards
   */
  #decimeterToYard (metricValue: number): number {
    return metricValue / (yardInMeters * 10)
  }

  /**
   * Converts decimeters to feet.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in feet
   */
  #decimeterToFoot (metricValue: number): number {
    return metricValue / (feetInMeters * 10)
  }

  /**
   * Converts decimeters to inches.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in inches
   */
  #decimeterToInch (metricValue: number): number {
    return metricValue / (inchInMeters * 10)
  }

  /**
   * Converts decimeters to mils.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in mils
   */
  #decimeterToMil (metricValue: number): number {
    return metricValue / (milInMeters * 10)
  }

  /*      *** Centimeter to imperial functions *** */
  /**
   * Converts centimeters to miles.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in miles
   */
  #centimeterToMile (metricValue: number): number {
    return metricValue / (mileInMeters * 100)
  }

  /**
   * Converts centimeters to yards.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in yards
   */
  #centimeterToYard (metricValue: number): number {
    return metricValue / (yardInMeters * 100)
  }

  /**
   * Converts centimeters to feet.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in feet
   */
  #centimeterToFoot (metricValue: number): number {
    return metricValue / (feetInMeters * 100)
  }

  /**
   * Converts centimeters to inches.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in inches
   */
  #centimeterToInch (metricValue: number): number {
    return metricValue / (inchInMeters * 100)
  }

  /**
   * Converts centimeters to mils.
   *
   * @param {number} metricValue - The metric value to convert
   * @returns {number} - The converted value in mils
   */
  #centimeterToMil (metricValue: number): number {
    return metricValue / (milInMeters * 100)
  }
}
