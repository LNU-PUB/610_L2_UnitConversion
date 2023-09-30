import { ImperialToMetric } from '../ImperialToMetric'
import { Metric1DUnits, Imperial1DUnits } from '../lib/typesConstantsAndEnums'

describe('ImperialToMetric Class, convert() method', () => {
  const converter: ImperialToMetric = new ImperialToMetric()

  describe('*** converting from miles', () => {
    it('5 miles to kilometers', () => {
      const mileValue = 5
      const expected = 8.04672
      const actual = converter.convert(Imperial1DUnits.mile, mileValue, Metric1DUnits.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('1 mile to meters', () => {
      const mileValue = 1
      const expected = 1609.34
      const actual = converter.convert(Imperial1DUnits.mile, mileValue, Metric1DUnits.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('1/4 mile to decimeters', () => {
      const mileValue = 0.25
      const expected = 4023.36
      const actual = converter.convert(Imperial1DUnits.mile, mileValue, Metric1DUnits.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1/4 mile to centimeters', () => {
      const mileValue = 0.25
      const expected = 40233.6
      const actual = converter.convert(Imperial1DUnits.mile, mileValue, Metric1DUnits.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from yards', () => {
    it('100 yards to kilometers', () => {
      const yardValue = 100
      const expected = 0.09144
      const actual = converter.convert(Imperial1DUnits.yard, yardValue, Metric1DUnits.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 yard to meters', () => {
      const yardValue = 100
      const expected = 91.44
      const actual = converter.convert(Imperial1DUnits.yard, yardValue, Metric1DUnits.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('1 yard to decimeters', () => {
      const yardValue = 1
      const expected = 9.144
      const actual = converter.convert(Imperial1DUnits.yard, yardValue, Metric1DUnits.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 yard to centimeters', () => {
      const yardValue = 1
      const expected = 91.44
      const actual = converter.convert(Imperial1DUnits.yard, yardValue, Metric1DUnits.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from foot', () => {
    it('3500 feet to kilometers', () => {
      const footValue = 3500
      const expected = 1.0668
      const actual = converter.convert(Imperial1DUnits.foot, footValue, Metric1DUnits.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 feet to meters', () => {
      const footValue = 100
      const expected = 30.48
      const actual = converter.convert(Imperial1DUnits.foot, footValue, Metric1DUnits.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('5 foot to decimeters', () => {
      const footValue = 5
      const expected = 15.24
      const actual = converter.convert(Imperial1DUnits.foot, footValue, Metric1DUnits.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 foot to centimeters', () => {
      const footValue = 1
      const expected = 30.48
      const actual = converter.convert(Imperial1DUnits.foot, footValue, Metric1DUnits.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from inch', () => {
    it('3500 inches to kilometers', () => {
      const inchValue = 3500
      const expected = 0.0889
      const actual = converter.convert(Imperial1DUnits.inch, inchValue, Metric1DUnits.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 inches to meters', () => {
      const inchValue = 100
      const expected = 2.54
      const actual = converter.convert(Imperial1DUnits.inch, inchValue, Metric1DUnits.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('5 inches to decimeters', () => {
      const inchValue = 5
      const expected = 1.27
      const actual = converter.convert(Imperial1DUnits.inch, inchValue, Metric1DUnits.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 inch to centimeters', () => {
      const inchValue = 1
      const expected = 2.54
      const actual = converter.convert(Imperial1DUnits.inch, inchValue, Metric1DUnits.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from mil', () => {
    it('35,000 mil to kilometers', () => {
      const milValue = 35000
      const expected = 0.000889
      const actual = converter.convert(Imperial1DUnits.mil, milValue, Metric1DUnits.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 miles to meters', () => {
      const milValue = 1000
      const expected = 0.0254
      const actual = converter.convert(Imperial1DUnits.mil, milValue, Metric1DUnits.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('5 miles to decimeters', () => {
      const milValue = 500
      const expected = 0.127
      const actual = converter.convert(Imperial1DUnits.mil, milValue, Metric1DUnits.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 mil to centimeters', () => {
      const milValue = 100
      const expected = 0.254
      const actual = converter.convert(Imperial1DUnits.mil, milValue, Metric1DUnits.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })
})
