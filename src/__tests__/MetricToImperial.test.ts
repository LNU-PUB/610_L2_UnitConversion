import { MetricToImperial } from '../MetricToImperial'
import { Metric1DTypes, Imperial1DTypes, mileInMeters, feetInMeters, yardInMeters, inchInMeters, milInMeters } from '../lib/typesConstantsAndEnums'

describe('MetricToImperial Class', () => {
  const converter = new MetricToImperial()

  describe('convert() method converting from kilometer', () => {
    it('5 kilometers to miles', () => {
      const kilometerValue = 5
      const expectedImperialValue = kilometerValue / (mileInMeters / 1000)
      expect(converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.mile)).toBeCloseTo(expectedImperialValue)
    })

    it('1 kilometers to yards', () => {
      const kilometerValue = 1
      const expectedImperialValue = kilometerValue / (mileInMeters / 1000) * 1760
      expect(converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.yard)).toBeCloseTo(expectedImperialValue)
    })

    it('1 kilometers to feet', () => {
      const kilometerValue = 1
      const expectedImperialValue = kilometerValue / (mileInMeters / 1000) * 5280
      expect(converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.foot)).toBeCloseTo(expectedImperialValue)
    })

    it('1 kilometers to inches', () => {
      const kilometerValue = 1
      const expectedImperialValue = kilometerValue / (mileInMeters / 1000) * 63360
      expect(converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.inch)).toBeCloseTo(expectedImperialValue)
    })

    it('0.5 kilometers to mil', () => {
      const kilometerValue = 0.5
      const expectedImperialValue = kilometerValue / (mileInMeters / 1000) * 63360000
      expect(converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.mil)).toBeCloseTo(expectedImperialValue)
    })
  })

  describe('convert() method converting from meter', () => {
    it('1609,34 meters to miles', () => {
      const meterValue = 1609.34
      const expectedImperialValue = meterValue / mileInMeters
      expect(converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.mile)).toBeCloseTo(expectedImperialValue)
    })

    it('10 meters to yards', () => {
      const meterValue = 10
      const expectedImperialValue = meterValue / yardInMeters
      expect(converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.yard)).toBeCloseTo(expectedImperialValue)
    })

    it('10 meters to feet', () => {
      const meterValue = 10
      const expectedImperialValue = meterValue / feetInMeters
      expect(converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.foot)).toBeCloseTo(expectedImperialValue)
    })

    it('1 meters to inches', () => {
      const meterValue = 1
      const expectedImperialValue = meterValue / inchInMeters
      expect(converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.inch)).toBeCloseTo(expectedImperialValue)
    })

    it('0.5 meters to mil', () => {
      const meterValue = 0.5
      const expectedImperialValue = meterValue / milInMeters
      expect(converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.mil)).toBeCloseTo(expectedImperialValue)
    })
  })
})
