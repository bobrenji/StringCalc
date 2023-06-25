import StringCalculator from "./StringCalculator";

describe('StringCalculator', function () {
    it.todo('when non numbers are used then throw exception')

    let stringCalc = new StringCalculator();

    it('when more than 2 numbers are used then throw exception', function () {
        expect(() => stringCalc.add('1,2,3')).toThrowError();
    });

    it('when two numbers are used then no exception is thrown', function () {
        expect(() => stringCalc.add('1,2')).not.toThrowError()
    });
});