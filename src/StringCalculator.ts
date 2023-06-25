export default class StringCalculator {

    add(numberString: String): number {
        let stringNumbers = numberString.split(',')
        if(stringNumbers.length>2) {
            throw Error('More than two numbers')
        }
        let sum: number = 0
        for (const key in stringNumbers) {
            let number: number = parseInt(stringNumbers[key]);
            if(Number.isNaN(number)) {
                throw Error("Only allowed numbers")
            }
            sum += number
        }
        return sum
    }
}