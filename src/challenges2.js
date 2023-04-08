function mostFrequencyNumber(numbers) {
  let contMFrequency = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    let contTemp = 0;
    for (let j = 0; j < numbers.length; j += 1) {
      if (numbers[i] === numbers[j]) {
        contTemp += 1;
      }
    }
    if (contTemp > contMFrequency) {
      contMFrequency = contTemp;
    }
  }
  return contMFrequency;
}

// Desafio 11
function generatePhoneNumber(telNumber) {
  if (telNumber.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  if (mostFrequencyNumber(telNumber) >= 3) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  if (telNumber.some((num) => num < 0 || num > 9)) {
    return ('não é possível gerar um número de telefone com esses valores');
  }
  const formatNumber = telNumber.join('');
  return (`(${formatNumber.slice(0, 2)}) ${formatNumber.slice(2, 7)}-${formatNumber.slice(7, 11)}`);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumLine = lineA + lineB;
  let subLine = Math.abs(lineA - lineB);
  if (lineC < sumLine && lineC > subLine) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drinks) {
  let waterDriks = 0;
  for (let i = 0; i < drinks.length; i += 1) {
    if (+drinks[i]) {
      waterDriks += +drinks[i];
    }
  }
  if (waterDriks > 1) {
    return (`${waterDriks} copos de água`);
  }
  return (`${waterDriks} copo de água`);
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
