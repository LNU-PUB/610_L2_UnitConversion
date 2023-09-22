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
})
