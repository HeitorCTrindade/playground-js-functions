// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === false || value2 === false) {
    return false;
  }
  return true;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let arraySplit = sentence.split(' ');
  return arraySplit;
}

// Desafio 4
function concatName(arrayStr) {
  return `${arrayStr[arrayStr.length - 1]} + ", " + ${arrayStr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

function findLargestNum(numbers) {
  let maior = numbers[1];
  for (let i = 0; i < numbers.length; i += 1) {
    if (maior < numbers[i]) {
      maior = numbers[i];
    }
  }
  return maior;
}

// Desafio 6
function highestCount(numbers) {
  let highestNumber = findLargestNum(numbers);
  let contNFrequency = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === highestNumber) {
      contNFrequency += 1;
    }
  }
  return contNFrequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dCat1 = Math.abs(mouse - cat1);
  let dCat2 = Math.abs(mouse - cat2);
  if (dCat1 === dCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (dCat1 < dCat2) {
    return 'cat1';
  }
  return 'cat2';
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(numbers) {
  let arrayFizzBuzz = [];
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 3 === 0 && numbers[i] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (numbers[i] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (numbers[i] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(sentence) {
  sentence = sentence.replace(/a/g, '1');
  sentence = sentence.replace(/e/g, '2');
  sentence = sentence.replace(/i/g, '3');
  sentence = sentence.replace(/o/g, '4');
  sentence = sentence.replace(/u/g, '5');
  return sentence;
}

function decode(sentence) {
  sentence = sentence.replace(/1/g, 'a');
  sentence = sentence.replace(/2/g, 'e');
  sentence = sentence.replace(/3/g, 'i');
  sentence = sentence.replace(/4/g, 'o');
  sentence = sentence.replace(/5/g, 'u');
  return sentence;
}

// Desafio 10
function techList(array, string) {
  let listObjects = [];
  array = array.sort();
  if (array.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < array.length; i += 1) {
    let object = {
      tech: '',
      name: string,
    };
    object.tech = array[i];
    listObjects.push(object);
  }
  return (listObjects);
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
