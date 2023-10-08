<div align="center">
  <h1>Unit Converter</h1>
</div>

###### Author: Chris Johannesson - cj223bc - <info@chrisjohannesson.com>

## Name: d4m-unit-converter
## Unit Converter
This npm package allows for easy conversion between metric and imperial units, as well as between different temperature scales, through an intuitive interface.

### Supported Units

**Metric1DUnits:** kilometer (km), meter (m), decimeter (dm), centimeter (cm)
**Imperial1DUnits:** mile, yard, foot, inch, mil
**TemperatureUnits:** Celsius, Fahrenheit, Kelvin

## Note:
Project in course 1DV610 at Linnaeus University, Kalmar, Sweden. Fall semester 2023

## License 
[ISC](LICENSE) license

**Version:** >= ES6
**Type:** ES module

## Usage:

Start with installing the package into your project
```bash
npm install --save d4m-unit-converter
# or
yarn add d4m-unit-converter
```

A typical usage would be
```bash
# for conversions between metric and imperial measures
import {UnitConverter, Metric1DUnits, Imperial1DUnits} from 'd4m-unit-converter'
const unitconverter = new UnitConverter()
# for metric to imperial conversions
const converter = unitconverter.MetricToImperial
const result = converter.convert(length, metricUnit, imperialUnit)
# for imperial to metric conversions
const converter = unitconverter.ImperialToMetric
const result = converter.convert(length, imperialUnit, metricUnit)

# for temperature conversions
import {UnitConverter, TemperatureUnits}
const unitconverter = new UnitCOnverter()
const converter = unitconverter.TemperatureConverter
const result = converter.convert(fromValue, fromUnit, toUnit)
```
Create an instance of the UnitConverter and from there you can chose which type of converter you want to use as illustrated above.

[Test app](https://github.com/LNU-PUB/610_l2_test_app)


<div align="center">
<h2>Class Diagram</h2>
  <img alt="Class Diagram" src="https://github.com/LNU-PUB/610_L2_UnitConversion/blob/master/images/Class-Diagram.jpeg">
</div>