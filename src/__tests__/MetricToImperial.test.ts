import { MetricToImperial } from '../MetricToImperial'
import { Metric1DUnits, Imperial1DUnits } from '../lib/typesConstantsAndEnums'

describe('MetricToImperial Class, convert() method', () => {
  const converter = new MetricToImperial()

  describe('*** converting from kilometer', () => {
    it('5 kilometers to miles', () => {
      const length = 5
      const expected = 3.10686
      const actual = converter.convert(length, Metric1DUnits.kilometer, Imperial1DUnits.mile)
      expect(actual).toBeCloseTo(expected)
    })

    it('1 kilometers to yards', () => {
      const length = 1
      const expected = 1093.610
      const actual = converter.convert(length, Metric1DUnits.kilometer, Imperial1DUnits.yard)
      expect(actual).toBeCloseTo(expected)
    })

    it('0.1 kilometers to feet', () => {
      const length = 0.1
      const expected = 328.084
      const actual = converter.convert(length, Metric1DUnits.kilometer, Imperial1DUnits.foot)
      expect(actual).toBeCloseTo(expected)
    })

    it('0.1 kilometers to inches', () => {
      const length = 0.1
      const expected = 3937.01
      const actual = converter.convert(length, Metric1DUnits.kilometer, Imperial1DUnits.inch)
      expect(actual).toBeCloseTo(expected)
    })

    it('0.05 kilometers to mil', () => {
      const length = 0.05
      const expected = 1968504
      const actual = converter.convert(length, Metric1DUnits.kilometer, Imperial1DUnits.mil)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from meter', () => {
    it('1609.34 meters to miles', () => {
      const length = 1609.34
      const expected = 1
      const actual = converter.convert(length, Metric1DUnits.meter, Imperial1DUnits.mile)
      expect(actual).toBeCloseTo(expected)
    })

    it('12 meters to yards', () => {
      const length = 12
      const expected = 13.1234
      const actual = converter.convert(length, Metric1DUnits.meter, Imperial1DUnits.yard)
      expect(actual).toBeCloseTo(expected)
    })

    it('6 meters to feet', () => {
      const length = 6
      const expected = 19.685
      const actual = converter.convert(length, Metric1DUnits.meter, Imperial1DUnits.foot)
      expect(actual).toBeCloseTo(expected)
    })

    it('2 meters to inches', () => {
      const length = 2
      const expected = 78.7402
      const actual = converter.convert(length, Metric1DUnits.meter, Imperial1DUnits.inch)
      expect(actual).toBeCloseTo(expected)
    })

    it('0.5 meters to mil', () => {
      const length = 0.5
      const expected = 19685
      const actual = converter.convert(length, Metric1DUnits.meter, Imperial1DUnits.mil)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from decimeter', () => {
    it('16093.4 decimeters to miles', () => {
      const length = 16093.4
      const expected = 1
      const actual = converter.convert(length, Metric1DUnits.decimeter, Imperial1DUnits.mile)
      expect(actual).toBeCloseTo(expected)
    })

    it('26 decimeters to yards', () => {
      const length = 26
      const expected = 2.84339
      const actual = converter.convert(length, Metric1DUnits.decimeter, Imperial1DUnits.yard)
      expect(actual).toBeCloseTo(expected)
    })

    it('13 decimeters to feet', () => {
      const length = 13
      const expected = 4.26509
      const actual = converter.convert(length, Metric1DUnits.decimeter, Imperial1DUnits.foot)
      expect(actual).toBeCloseTo(expected)
    })

    it('8 decimeters to inches', () => {
      const length = 8
      const expected = 31.4961
      const actual = converter.convert(length, Metric1DUnits.decimeter, Imperial1DUnits.inch)
      expect(actual).toBeCloseTo(expected)
    })

    it('0.5 decimeters to mil', () => {
      const length = 0.5
      const expected = 1968.504
      const actual = converter.convert(length, Metric1DUnits.decimeter, Imperial1DUnits.mil)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })

  describe('*** converting from centimeter', () => {
    it('160934 centimeters to miles', () => {
      const length = 160934
      const expected = 1
      const actual = converter.convert(length, Metric1DUnits.centimeter, Imperial1DUnits.mile)
      expect(actual).toBeCloseTo(expected)
    })

    it('202 centimeters to yards', () => {
      const length = 202
      const expected = 2.2091 // length / (yardInMeters * 10)
      const actual = converter.convert(length, Metric1DUnits.centimeter, Imperial1DUnits.yard)
      expect(actual).toBeCloseTo(expected)
    })

    it('167 centimeters to feet', () => {
      const length = 167
      const expected = 5.479 // length / (feetInMeters * 10)
      const actual = converter.convert(length, Metric1DUnits.centimeter, Imperial1DUnits.foot)
      expect(actual).toBeCloseTo(expected)
    })

    it('32 centimeters to inches', () => {
      const length = 32
      const expected = 12.5984 // length / (inchInMeters * 10)
      const actual = converter.convert(length, Metric1DUnits.centimeter, Imperial1DUnits.inch)
      expect(actual).toBeCloseTo(expected)
    })

    it('3 centimeters to mil', () => {
      const length = 3
      const expected = 1181.102 // length / (milInMeters * 10)
      const actual = converter.convert(length, Metric1DUnits.centimeter, Imperial1DUnits.mil)
      expect(actual).toBeCloseTo(expected, 0)
    })
  })
})
