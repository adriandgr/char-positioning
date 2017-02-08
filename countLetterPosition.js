/* Solution to Character Counting
 *
 */

var phrase = "lighthouse in the house";

function storeLetterPosition(string) {
  var total = {};
  // run for loop to initialize object with 'number' types
  for (var letter in string) {
    total[string[letter]] = ((total[string[letter]] || []) || []);
    total[string[letter]].push(Number(letter));
  }
  // remove spaces
  delete total[" "];
  return total;
}

console.log(storeLetterPosition(phrase));
