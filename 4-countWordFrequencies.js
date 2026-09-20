function countWordFrequencies(sentence) {
  // pura sentence lowercase kortesi
  sentence = sentence.toLowerCase();

  // letter ar number char chara baki sob diye words alada kortesi
  let words = sentence.split(/[^a-z0-9]+/);

  // empty value gula bad ditese
  words = words.filter((word) => word !== "");

  // word count rakhar jonno empty object kortesi
  let result = {};

  // protita word check kortesi
  for (let word of words) {
    // word age theke thakle count baraitesi
    if (result[word]) {
      result[word]++;
    } else {
      // word first time ashle count 1 diye start kortesi
      result[word] = 1;
    }
  }

  return result;
}

console.log(countWordFrequencies("Hello world, hello!"));
// { hello: 2, world: 1 }

console.log(
  countWordFrequencies("The quick brown fox jumps over the lazy dog."),
);
// { the: 2, quick: 1, brown: 1, fox: 1, jumps: 1, over: 1, lazy: 1, dog: 1 }

console.log(countWordFrequencies("Hello HELLO hello"));
// { hello: 3 }
