"use strict";

function calcFraction(operator, fisrtNumerator, firstDenumenator, secondNumerator, secondDenumerator) {
  var firstFraction = {
    numerator: fisrtNumerator,
    denumerator: firstDenumenator
  };
  var secondFraction = {
    numerator: secondNumerator,
    denumerator: secondDenumerator
  };

  if (operator === '+') {
    if (firstDenumenator !== secondDenumerator) {
      var commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);
      return {
        numerator: firstFraction.numerator + secondFraction.numerator,
        denumenator: commonDenumerator
      };
    }

    return {
      numerator: firstFraction.numerator + secondFraction.numerator,
      denumenator: firstFraction.denumerator
    };
  } else if (operator === '-') {
    if (firstDenumenator !== secondDenumerator) {
      var _commonDenumerator = getCommonDenumerator(firstDenumenator, secondDenumerator);

      return {
        numerator: firstFraction.numerator - secondFraction.numerator,
        denumenator: _commonDenumerator
      };
    }

    return {
      numerator: firstFraction.numerator - secondFraction.numerator,
      denumenator: firstFraction.denumerator
    };
  } else if (operator === '/') {
    return {
      numerator: firstFraction.numerator * secondFraction.denumerator,
      denumenator: firstFraction.denumerator * secondFraction.numerator
    };
  } else if (operator === '*') {
    return {
      numerator: firstFraction.numerator * secondFraction.numerator,
      denumenator: firstFraction.denumerator * secondFraction.denumerator
    };
  }
}

function getCommonDenumerator(firstDenumenator, secondDenumerator) {
  if (firstDenumenator > secondDenumerator) {
    var rest = firstDenumenator % secondDenumerator;
    var second = secondDenumerator;

    while (rest > 0) {
      var temporary = rest;
      rest = second % rest;
      second = temporary;
    }

    return firstDenumenator * secondDenumerator / second;
  } else {
    var _rest = secondDenumerator % firstDenumenator;

    var _second = firstDenumenator;

    while (_rest > 0) {
      var _temporary = _rest;
      _rest = _second % _rest;
      _second = _temporary;
    }

    return firstDenumenator * secondDenumerator / _second;
  }
}