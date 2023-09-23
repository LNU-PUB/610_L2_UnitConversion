import { MetricToImperial } from '../MetricToImperial';
import { Metric1DTypes, Imperial1DTypes } from '../lib/typesConstantsAndEnums';
describe('MetricToImperial Class, convert() method', () => {
    const converter = new MetricToImperial();
    describe('*** converting from kilometer', () => {
        it('5 kilometers to miles', () => {
            const kilometerValue = 5;
            const expected = 3.10686;
            const actual = converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.mile);
            expect(actual).toBeCloseTo(expected);
        });
        it('1 kilometers to yards', () => {
            const kilometerValue = 1;
            const expected = 1093.610;
            const actual = converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.yard);
            expect(actual).toBeCloseTo(expected);
        });
        it('0.1 kilometers to feet', () => {
            const kilometerValue = 0.1;
            const expected = 328.084;
            const actual = converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.foot);
            expect(actual).toBeCloseTo(expected);
        });
        it('0.1 kilometers to inches', () => {
            const kilometerValue = 0.1;
            const expected = 3937.01;
            const actual = converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.inch);
            expect(actual).toBeCloseTo(expected);
        });
        it('0.05 kilometers to mil', () => {
            const kilometerValue = 0.05;
            const expected = 1968504;
            const actual = converter.convert(Metric1DTypes.kilometer, kilometerValue, Imperial1DTypes.mil);
            expect(actual).toBeCloseTo(expected, 0);
        });
    });
    describe('*** converting from meter', () => {
        it('1609.34 meters to miles', () => {
            const meterValue = 1609.34;
            const expected = 1;
            const actual = converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.mile);
            expect(actual).toBeCloseTo(expected);
        });
        it('12 meters to yards', () => {
            const meterValue = 12;
            const expected = 13.1234;
            const actual = converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.yard);
            expect(actual).toBeCloseTo(expected);
        });
        it('6 meters to feet', () => {
            const meterValue = 6;
            const expected = 19.685;
            const actual = converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.foot);
            expect(actual).toBeCloseTo(expected);
        });
        it('2 meters to inches', () => {
            const meterValue = 2;
            const expected = 78.7402;
            const actual = converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.inch);
            expect(actual).toBeCloseTo(expected);
        });
        it('0.5 meters to mil', () => {
            const meterValue = 0.5;
            const expected = 19685;
            const actual = converter.convert(Metric1DTypes.meter, meterValue, Imperial1DTypes.mil);
            expect(actual).toBeCloseTo(expected, 0);
        });
    });
    describe('*** converting from decimeter', () => {
        it('16093.4 decimeters to miles', () => {
            const decimeterValue = 16093.4;
            const expected = 1;
            const actual = converter.convert(Metric1DTypes.decimeter, decimeterValue, Imperial1DTypes.mile);
            expect(actual).toBeCloseTo(expected);
        });
        it('26 decimeters to yards', () => {
            const decimeterValue = 26;
            const expected = 2.84339;
            const actual = converter.convert(Metric1DTypes.decimeter, decimeterValue, Imperial1DTypes.yard);
            expect(actual).toBeCloseTo(expected);
        });
        it('13 decimeters to feet', () => {
            const decimeterValue = 13;
            const expected = 4.26509;
            const actual = converter.convert(Metric1DTypes.decimeter, decimeterValue, Imperial1DTypes.foot);
            expect(actual).toBeCloseTo(expected);
        });
        it('8 decimeters to inches', () => {
            const decimeterValue = 8;
            const expected = 31.4961;
            const actual = converter.convert(Metric1DTypes.decimeter, decimeterValue, Imperial1DTypes.inch);
            expect(actual).toBeCloseTo(expected);
        });
        it('0.5 decimeters to mil', () => {
            const decimeterValue = 0.5;
            const expected = 1968.504;
            const actual = converter.convert(Metric1DTypes.decimeter, decimeterValue, Imperial1DTypes.mil);
            expect(actual).toBeCloseTo(expected, 0);
        });
    });
    describe('*** converting from centimeter', () => {
        it('160934 centimeters to miles', () => {
            const centimeterValue = 160934;
            const expected = 1;
            const actual = converter.convert(Metric1DTypes.centimeter, centimeterValue, Imperial1DTypes.mile);
            expect(actual).toBeCloseTo(expected);
        });
        it('202 centimeters to yards', () => {
            const centimeterValue = 202;
            const expected = 2.2091; // centimeterValue / (yardInMeters * 10)
            const actual = converter.convert(Metric1DTypes.centimeter, centimeterValue, Imperial1DTypes.yard);
            expect(actual).toBeCloseTo(expected);
        });
        it('167 centimeters to feet', () => {
            const centimeterValue = 167;
            const expected = 5.479; // centimeterValue / (feetInMeters * 10)
            const actual = converter.convert(Metric1DTypes.centimeter, centimeterValue, Imperial1DTypes.foot);
            expect(actual).toBeCloseTo(expected);
        });
        it('32 centimeters to inches', () => {
            const centimeterValue = 32;
            const expected = 12.5984; // centimeterValue / (inchInMeters * 10)
            const actual = converter.convert(Metric1DTypes.centimeter, centimeterValue, Imperial1DTypes.inch);
            expect(actual).toBeCloseTo(expected);
        });
        it('3 centimeters to mil', () => {
            const centimeterValue = 3;
            const expected = 1181.102; // centimeterValue / (milInMeters * 10)
            const actual = converter.convert(Metric1DTypes.centimeter, centimeterValue, Imperial1DTypes.mil);
            expect(actual).toBeCloseTo(expected, 0);
        });
    });
});
