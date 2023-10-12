import { Imperial1DUnits, Metric1DUnits, feetInMeters, inchInMeters, milInMeters, mileInMeters, yardInMeters } from './lib/typesConstantsAndEnums'

/**
 *
 */
export class MetricToImperial {
  /**
   * Convert method that is the main entry point for the class.
   *
   * @param {number} length - The metric length to convert
   * @param {Metric1DUnits} metricUnit - The metric unit to convert from
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @returns {number} - The converted value
   */
  public convert (length: number, metricUnit: Metric1DUnits, imperialUnit: Imperial1DUnits): number {
    switch (metricUnit) {
      case Metric1DUnits.kilometer:
        return this.#kilometerToImperial(length, imperialUnit)
      case Metric1DUnits.meter:
        return this.#meterToImperial(length, imperialUnit)
      case Metric1DUnits.decimeter:
        return this.#decimeterToImperial(length, imperialUnit)
      case Metric1DUnits.centimeter:
        return this.#centimeterToImperial(length, imperialUnit)
      default:
        throw new Error('Invalid metric unit type')
    }
  }

  // *** Private methods that handles the imperial selection. ***

  /**
   * Handles kilometers to imperial conversions.
   *
   * @param {number} length - The metric length to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @returns {number} - The converted value
   */
  #kilometerToImperial (length: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#kilometerToMile(length)
      case Imperial1DUnits.yard:
        return this.#kilometerToYard(length)
      case Imperial1DUnits.foot:
        return this.#kilometerToFoot(length)
      case Imperial1DUnits.inch:
        return this.#kilometerToInch(length)
      case Imperial1DUnits.mil:
        return this.#kilometerToMil(length)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles meters to imperial conversions.
   *
   * @param {number} length - The metric length to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #meterToImperial (length: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#meterToMile(length)
      case Imperial1DUnits.yard:
        return this.#meterToYard(length)
      case Imperial1DUnits.foot:
        return this.#meterToFoot(length)
      case Imperial1DUnits.inch:
        return this.#meterToInch(length)
      case Imperial1DUnits.mil:
        return this.#meterToMil(length)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles decimeters to imperial conversions.
   *
   * @param {number} length - The metric length to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #decimeterToImperial (length: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#decimeterToMile(length)
      case Imperial1DUnits.yard:
        return this.#decimeterToYard(length)
      case Imperial1DUnits.foot:
        return this.#decimeterToFoot(length)
      case Imperial1DUnits.inch:
        return this.#decimeterToInch(length)
      case Imperial1DUnits.mil:
        return this.#decimeterToMil(length)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  /**
   * Handles centimeters to imperial conversions.
   *
   * @param {number} length - The metric length to convert
   * @param {Imperial1DUnits} imperialUnit - The imperial unit to convert to
   * @throws {Error} - Invalid imperial unit type
   * @returns {number} - The converted value
   */
  #centimeterToImperial (length: number, imperialUnit: Imperial1DUnits): number {
    switch (imperialUnit) {
      case Imperial1DUnits.mile:
        return this.#centimeterToMile(length)
      case Imperial1DUnits.yard:
        return this.#centimeterToYard(length)
      case Imperial1DUnits.foot:
        return this.#centimeterToFoot(length)
      case Imperial1DUnits.inch:
        return this.#centimeterToInch(length)
      case Imperial1DUnits.mil:
        return this.#centimeterToMil(length)
      default:
        throw new Error('Invalid imperial unit type')
    }
  }

  // *** Private methods that performs the calculations. ***

  /*      *** Kilometer to imperial functions *** */
  /**
   * Converts kilometers to miles.
   *
   * @param {number} length - The metric value in km to convert
   * @returns {number} - The converted value in miles
   */
  #kilometerToMile (length: number): number {
    return length / mileInMeters * 1000
  }

  /**
   * Converts kilometers to miles.
   *
   * @param {number} length - The metric value in km to convert
   * @returns {number} - The converted value in yards
   */
  #kilometerToYard (length: number): number {
    return length / yardInMeters * 1000
  }

  /**
   * Converts kilometers to feet.
   *
   * @param {number} length - The metric value in km to convert
   * @returns {number} - The converted value in feet
   */
  #kilometerToFoot (length: number): number {
    return length / feetInMeters * 1000
  }

  /**
   * Converts kilometers to inches.
   *
   * @param {number} length - The metric value in km to convert
   * @returns {number} - The converted value in inches
   */
  #kilometerToInch (length: number): number {
    return length / inchInMeters * 1000
  }

  /**
   * Converts kilometers to mils.
   *
   * @param {number} length - The metric value in km to convert
   * @returns {number} - The converted value in mils
   */
  #kilometerToMil (length: number): number {
    return length / milInMeters * 1000
  }

  /*      *** Meter to imperial functions *** */
  /**
   * Converts meters to miles.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in miles
   */
  #meterToMile (length: number): number {
    return length / mileInMeters
  }

  /**
   * Converts meters to yards.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in yards
   */
  #meterToYard (length: number): number {
    return length / yardInMeters
  }

  /**
   * Converts meters to feet.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in feet
   */
  #meterToFoot (length: number): number {
    return length / feetInMeters
  }

  /**
   * Converts meters to inches.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in inches
   */
  #meterToInch (length: number): number {
    return length / inchInMeters
  }

  /**
   * Converts meters to mils.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in mils
   */
  #meterToMil (length: number): number {
    return length / milInMeters
  }

  /*      *** Decimeter to imperial functions *** */

  /**
   * Converts decimeters to miles.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in miles
   */
  #decimeterToMile (length: number): number {
    return length / (mileInMeters * 10)
  }

  /**
   * Converts decimeters to yards.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in yards
   */
  #decimeterToYard (length: number): number {
    return length / (yardInMeters * 10)
  }

  /**
   * Converts decimeters to feet.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in feet
   */
  #decimeterToFoot (length: number): number {
    return length / (feetInMeters * 10)
  }

  /**
   * Converts decimeters to inches.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in inches
   */
  #decimeterToInch (length: number): number {
    return length / (inchInMeters * 10)
  }

  /**
   * Converts decimeters to mils.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in mils
   */
  #decimeterToMil (length: number): number {
    return length / (milInMeters * 10)
  }

  /*      *** Centimeter to imperial functions *** */
  /**
   * Converts centimeters to miles.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in miles
   */
  #centimeterToMile (length: number): number {
    return length / (mileInMeters * 100)
  }

  /**
   * Converts centimeters to yards.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in yards
   */
  #centimeterToYard (length: number): number {
    return length / (yardInMeters * 100)
  }

  /**
   * Converts centimeters to feet.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in feet
   */
  #centimeterToFoot (length: number): number {
    return length / (feetInMeters * 100)
  }

  /**
   * Converts centimeters to inches.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in inches
   */
  #centimeterToInch (length: number): number {
    return length / (inchInMeters * 100)
  }

  /**
   * Converts centimeters to mils.
   *
   * @param {number} length - The metric length to convert
   * @returns {number} - The converted value in mils
   */
  #centimeterToMil (length: number): number {
    return length / (milInMeters * 100)
  }
}
