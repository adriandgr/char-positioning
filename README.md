## Return indices instead

Instead of having your function `countLetters` return just the count of each letter, the requirement has changed to return all the indices (zero-based positions) in the string where each character is found. So for each letter, we're no longer returning just one number to represent its number of occurrences, but rather (potentially) multiple numbers to represent all the places in the string that it shows up.

### Step 1
First, ask yourself: What would the resulting object (key-value mapping) look like with the same example string (`"lighthouse in the house"`)?

Write it out in a new JS file and run it by a mentor so as to confirm that you're feeling good about the solution that you are going to work toward. *(shown below)*

```javascript
{
  l: [ 0 ],
  i: [ 1, 11 ],
  g: [ 2 ],
  h: [ 3, 5, 15, 18 ],
  t: [ 4, 14 ],
  o: [ 6, 19 ],
  u: [ 7, 20 ],
  s: [ 8, 21 ],
  e: [ 9, 16, 22 ],
  n: [ 12 ],
}
```

### Step 2
Either copy your code from the [Character Counting](https://github.com/adriandgr/char-counting) or start afresh. Either way, consider this a new new project/folder and don't modify your solution for the previous problem.