export default class StringCalculator {

    addNumberString(numberString: String): number {
        let stringNumbers = numberString.split(',')
        if(stringNumbers.length>2) {
            throw Error('More than two numbers')
        }
        let sum: number = 0
        stringNumbers.forEach(item => {
            let number: number = parseInt(item);
            if(Number.isNaN(number)) {
                throw Error("Only allowed numbers")
            }
            sum += number
        });
        return sum
    }
}