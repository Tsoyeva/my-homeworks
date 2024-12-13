function calcFraction(operator, fisrtNumerator, firstDenumenator, secondNumerator, secondDenumerator) {
    const firstFraction = {
        numerator: fisrtNumerator,
        denumerator: firstDenumenator
    };
    const secondFraction = {
        numerator: secondNumerator,
        denumerator: secondDenumerator
    }

    if (operator === '+') {
        if (firstDenumenator !== secondDenumerator) {
            const commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
             return {
                numerator: firstFraction.numerator + secondFraction.numerator,
                denumenator: commonDenumerator
            }
        }
        return {
            numerator: firstFraction.numerator + secondFraction.numerator,
            denumenator: firstFraction.denumerator
        }
    } else if (operator === '-') {
        if (firstDenumenator !== secondDenumerator) {
            const commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
             return {
                numerator: firstFraction.numerator - secondFraction.numerator,
                denumenator: commonDenumerator
            }
        }
        return {
            numerator: firstFraction.numerator - secondFraction.numerator,
            denumenator: firstFraction.denumerator
        }
    } else if (operator === '/') {
        return {
            numerator: firstFraction.numerator * secondFraction.denumerator,
            denumenator: firstFraction.denumerator * secondFraction.numerator
        }

    } else if (operator === '*') {
        return {
            numerator: firstFraction.numerator * secondFraction.numerator,
            denumenator: firstFraction.denumerator * secondFraction.denumerator
        }
    }
}

function getCommonDenumerator(firstDenumenator, secondDenumerator) {
    if (firstDenumenator > secondDenumerator) {
        let rest = firstDenumenator % secondDenumerator;
        let second = secondDenumerator;

        while(rest > 0) {
            const temporary = rest;
            rest = second % rest;
            second = temporary;
        }

        return firstDenumenator * secondDenumerator / second;
    } else {
        let rest = secondDenumerator % firstDenumenator;
        let second = firstDenumenator;
        while (rest > 0) {
            const temporary = rest;
            rest= second % rest;
            second = temporary;
        }
        return firstDenumenator * secondDenumerator / second;
    } 
} 