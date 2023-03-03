function capitalize(string) {
  const string2 = string.charAt(0).toUpperCase() + string.slice(1);
  return string2;
}

function reverseString(string) {
  const string2 = string.split("").reverse().join("");
  return string2;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

const alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

function shiftedNum(string) {
  const regExp = /\p{P}/gu;
  const splitString = string.toLowerCase().split("");
  const numString = [];
  splitString.forEach((letter) => {
    if (letter === " " || regExp.test(letter)) {
      numString.push(letter);
      return;
    }

    if (letter === "z") {
      numString.push(1);
    }
    let shifted = [];
    shifted = alphabet[letter] + 1;
    numString.push(shifted);
  });
  return numString;
}

function shiftedWord(num) {
  const regExp = /\p{P}/gu;
  const stringArr = [];
  num.forEach((number) => {
    if (number === " " || regExp.test(number)) {
      stringArr.push(number);
      return;
    }
    if (number !== " ") {
      stringArr.push(Object.keys(alphabet)[number - 1]);
    }
  });
  const result = stringArr.join("");
  return result;
}

function ceasarCypher(string) {
  const num = shiftedNum(string);
  const newString = shiftedWord(num);
  return newString;
}

function analyzeArray(arr) {
  const arrSum = arr.reduce((acc, current) => acc + current);
  const arrAvg = arrSum / arr.length;
  const arrMax = Math.max(...arr);
  const arrMin = Math.min(...arr);

  const obj = {
    average: arrAvg,
    min: arrMin,
    max: arrMax,
    length: arr.length,
  };
  return obj;
}

export { capitalize, reverseString, calculator, ceasarCypher, analyzeArray };
