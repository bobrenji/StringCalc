import StringCalculator from "./StringCalculator";

describe('StringCalculator', function () {
    it.todo('when more than 2 numbers are used then throw exception')
    it.todo('when two numbers are used then no exception is thrown')
    it.todo('when non numbers are used then throw exception')

    it('when more than 2 numbers are used then throw exception', function () {
        let stringCalc = new StringCalculator();
        expect(() => stringCalc.add('1,2,3')).toThrowError();
    });
});