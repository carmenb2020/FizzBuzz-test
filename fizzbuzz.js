function createFizzBuzz(number) {
    
    if (Number.isInteger(number)) {

        if (number % 3 === 0 && number % 5 === 0)
            return 'FizzBuzz';
        else if (number % 3 === 0)
            return 'Fizz';
        else if (number % 5 === 0)
            return 'Buzz';
        else
            return number;

    } else {
        
        return 'No es un numero entero';
    }
}

module.exports = { createFizzBuzz };
