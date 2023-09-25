import { TemperatureConverter } from '../TemperatureConverter'
import { TemperatureTypes } from '../lib/typesConstantsAndEnums'

describe('TemperatureConverter Class, convert() method', () => {
  const converter = new TemperatureConverter()

  describe('*** converting from celsius', () => {
    it('28 celsius to fahrenheit', () => {
      const celsiusValue = 28
      const expected = 82.4
      const actual = converter.convert(celsiusValue, TemperatureTypes.celsius, TemperatureTypes.fahrenheit)
      expect(actual).toBeCloseTo(expected)
    })

    it('15 celsius to kelvin', () => {
      const celsiusValue = 15
      const expected = 288.15
      const actual = converter.convert(celsiusValue, TemperatureTypes.celsius, TemperatureTypes.kelvin)
      expect(actual).toBeCloseTo(expected)
    })
  })

  describe('*** converting from fahrenheit', () => {
    it('41 fahrenheit to celsius', () => {
      const fahrenheitValue = 41
      const expected = 5
      const actual = converter.convert(fahrenheitValue, TemperatureTypes.fahrenheit, TemperatureTypes.celsius)
      expect(actual).toBeCloseTo(expected)
    })

    it('41 fahrenheit to kelvin', () => {
      const fahrenheitValue = 41
      const expected = 278.15
      const actual = converter.convert(fahrenheitValue, TemperatureTypes.fahrenheit, TemperatureTypes.kelvin)
      expect(actual).toBeCloseTo(expected)
    })
  })

  describe('*** converting from kelvin', () => {
    it('312 kelvin to celsius', () => {
      const kelvinValue = 312
      const expected = 38.85
      const actual = converter.convert(kelvinValue, TemperatureTypes.kelvin, TemperatureTypes.celsius)
      expect(actual).toBeCloseTo(expected)
    })

    it('225 kelvin to fahrenheit', () => {
      const kelvinValue = 225
      const expected = -54.67
      const actual = converter.convert(kelvinValue, TemperatureTypes.kelvin, TemperatureTypes.fahrenheit)
      expect(actual).toBeCloseTo(expected, 1)
    })
  })
})
