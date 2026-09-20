function truncateString(str, maxLength) {
  // string already maxLength er moddhe thakle unchanged obosthay return kortesi
  if (str.length <= maxLength) {
    return str;
  }

  // maxLength 3 ba tar kom hole sudhu ... return kortesi
  if (maxLength <= 3) {
    return "...";
  }

  // sesh e  ellipsis (...) add korar jonno 3 character jayga rekhe baki character nicchi
  let charactersToKeep = maxLength - 3;

  // original string theke proyojoniyo character gula nicchi
  let result = str.slice(0, charactersToKeep);

  // sesh e ... add kortesi
  return result + "...";
}

console.log(truncateString("Hello world, this is a long string", 10));
// "Hello w..."

console.log(truncateString("Short text", 15));
// "Short text"

console.log(truncateString("Hello world", 8));
// "Hello..."

console.log(truncateString("Hello world", 3));
// "..."

console.log(truncateString("Hello world", 2));
// "..."

console.log(truncateString("", 5));
// ""
