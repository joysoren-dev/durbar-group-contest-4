function isAnagram(s1, s2) {
  // duita string age lowercase kortesi
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  // space ar punctuation bad diye sudhu alphabet rakhtesi
  s1 = s1.replace(/[^a-z]/g, "");
  s2 = s2.replace(/[^a-z]/g, "");

  // split, sort, join use kore ekta sorted string banaitesi
  s1 = s1.split("").sort().join("");
  s2 = s2.split("").sort().join("");

  // duita same hole true, na hole false return korbe ekhane
  return s1 === s2;
}
