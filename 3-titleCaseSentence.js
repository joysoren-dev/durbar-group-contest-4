function titleCaseSentence(str) {
  // pura string lowercase kortesi
  str = str.toLowerCase();

  // suru ar sesher extra space bad ditese
  str = str.trim();

  // string empty hole empty string return kortesi
  if (str === "") {
    return "";
  }

  // whitespace dekhe words alada kortesi
  let words = str.split(/\s+/);

  // protita word er first letter capital kortesi
  words = words.map(word => {
    return word[0].toUpperCase() + word.slice(1);
  });

  // sob word abar ekta string e join kortesi
  return words.join(" ");
}

console.log(titleCaseSentence("hello world"));
// Hello World

console.log(titleCaseSentence("hELLo wORLd"));
// Hello World

console.log(titleCaseSentence("   hello     world   "));
// Hello World

console.log(titleCaseSentence(""));
// ""

console.log(titleCaseSentence("     "));
// ""