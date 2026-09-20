function compressCharacters(str) {
  // final output ta agei ekhane rakhtesi
  let result = "";

  // string empty hole empty string return kortesi
  if (str === "") {
    return "";
  }

  // protita character 1 ta kore holeo ache, tai count 1 diye start kortesi
  let count = 1;

  // prottekta character check kortesi
  for (let i = 0; i < str.length - 1; i++) {
    // next character same hole count baraitesi
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      // character change hole previous character er count result e rakhtesi
      result += str[i];

      // character ekbar er beshi hole count add kortesi
      if (count > 1) {
        result += count;
      }

      // notun character er jonno count abar 1 kortesi
      count = 1;
    }
  }

  // last character result e add kortesi
  result += str[str.length - 1];

  // last character er count 1 er beshi hole count add kortesi
  if (count > 1) {
    result += count;
  }

  return result;
}
