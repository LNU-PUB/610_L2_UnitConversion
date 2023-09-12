
export const metricToImperialLengthUnitConversion = (value: number, inUnit: Metric1DTypes, outUnit: Imperial1DTypes) => {
  if(!value && !isNumeric(value)) {
    throw new Error('value must be a number')
  }
}

const isNumeric = (value: any) => {
  return !isNaN(parseFloat(value)) && isFinite(value);
}