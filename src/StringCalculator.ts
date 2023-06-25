export default class StringCalculator {

    add(numberString: String): number {
        let stringNumbers = numberString.split(',')
        if(stringNumbers.length>2) {
            throw Error('More than two numbers')
        }
        return 0
    }
}