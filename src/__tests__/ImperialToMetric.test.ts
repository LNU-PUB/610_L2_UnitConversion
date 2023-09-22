import { ImperialToMetric } from '../ImperialToMetric'
import { Metric1DTypes, Imperial1DTypes, mileInMeters, feetInMeters, yardInMeters, inchInMeters, milInMeters } from '../lib/typesConstantsAndEnums'

describe('ImperialToMetric Class, convert() method', () => {
  const converter: ImperialToMetric = new ImperialToMetric()

  describe('*** converting from miles', () => {
    it('5 miles to kilometers', () => {
      const mileValue = 5
      const expected = 8.04672
      const actual = converter.convert(Imperial1DTypes.mile, mileValue, Metric1DTypes.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('1 mile to meters', () => {
      const mileValue = 1
      const expected = 1609.34
      const actual = converter.convert(Imperial1DTypes.mile, mileValue, Metric1DTypes.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('1/4 mile to decimeters', () => {
      const mileValue = 0.25
      const expected = 4023.36
      const actual = converter.convert(Imperial1DTypes.mile, mileValue, Metric1DTypes.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1/4 mile to centimeters', () => {
      const mileValue = 0.25
      const expected = 40233.6
      const actual = converter.convert(Imperial1DTypes.mile, mileValue, Metric1DTypes.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from yards', () => {
    it('100 yards to kilometers', () => {
      const yardValue = 100
      const expected = 0.09144
      const actual = converter.convert(Imperial1DTypes.yard, yardValue, Metric1DTypes.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 yard to meters', () => {
      const yardValue = 100
      const expected = 91.44
      const actual = converter.convert(Imperial1DTypes.yard, yardValue, Metric1DTypes.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('1 yard to decimeters', () => {
      const yardValue = 1
      const expected = 9.144
      const actual = converter.convert(Imperial1DTypes.yard, yardValue, Metric1DTypes.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 yard to centimeters', () => {
      const yardValue = 1
      const expected = 91.44
      const actual = converter.convert(Imperial1DTypes.yard, yardValue, Metric1DTypes.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from foot', () => {
    it('3500 inches to kilometers', () => {
      const footValue = 3500
      const expected = 0.0889
      const actual = converter.convert(Imperial1DTypes.foot, footValue, Metric1DTypes.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 inches to meters', () => {
      const footValue = 100
      const expected = 2.54
      const actual = converter.convert(Imperial1DTypes.foot, footValue, Metric1DTypes.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('5 foot to decimeters', () => {
      const footValue = 5
      const expected = 1.27
      const actual = converter.convert(Imperial1DTypes.foot, footValue, Metric1DTypes.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 foot to centimeters', () => {
      const footValue = 1
      const expected = 2.54
      const actual = converter.convert(Imperial1DTypes.foot, footValue, Metric1DTypes.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })


  describe('*** converting from inch', () => {
    it('3500 feet to kilometers', () => {
      const inchValue = 3500
      const expected = 1.0668
      const actual = converter.convert(Imperial1DTypes.inch, inchValue, Metric1DTypes.kilometer)
      expect(actual).toBeCloseTo(expected)
    })

    it('100 feet to meters', () => {
      const inchValue = 100
      const expected = 30.48
      const actual = converter.convert(Imperial1DTypes.inch, inchValue, Metric1DTypes.meter)
      expect(actual).toBeCloseTo(expected)
    })

    it('5 inch to decimeters', () => {
      const inchValue = 5
      const expected = 15.24
      const actual = converter.convert(Imperial1DTypes.inch, inchValue, Metric1DTypes.decimeter)
      expect(actual).toBeCloseTo(expected, 1)
    })

    it('1 inch to centimeters', () => {
      const inchValue = 1
      const expected = 30.48
      const actual = converter.convert(Imperial1DTypes.inch, inchValue, Metric1DTypes.centimeter)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })
})
