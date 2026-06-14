function isPalindrome(str) {
  const normalize = s =>
    s
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(/[áà]/g, 'a')
      .replace(/[éè]/g, 'e')
      .replace(/[íì]/g, 'i')
      .replace(/[óò]/g, 'o')
      .replace(/[úù]/g, 'u')
      .replace(/ñ/g, 'n');

  const clean = normalize(str);

  // reverse the string and checks if they are equal
  return clean === clean.split('').reverse().join('');
}

// TESTS
console.log(isPalindrome('Anita lava la tina'));   // true
console.log(isPalindrome('reconocer'));             // true
console.log(isPalindrome('Daría todo por ir a Daríd')); // false  (control: no es palíndromo)

// Caso con tildes
console.log(isPalindrome('Amo la paloma'));         // true  (á→a, normaliza a "amolapaloma")
