export default class StringCalculator {

    add(numberString: String): number {
        let length = numberString.length
        if(length>2) {
            throw Error('More than two numbers')
        }
        return 0
    }
}