import memoizeContainer from "../memoizedContainer";

const largestPalindromeProduct = () => {
  const palindromes = [];
  let nth = 999,
    internalNth = 101;

  for (let internal = 100; internal < internalNth; internal++) {
    for (let index = 100; index <= nth; index++) {
      const productOfTwo = index * internal;
      const stringifiedNumber = productOfTwo.toString();
      const splitNumber = stringifiedNumber.split('');
      const reverseNumber = parseInt(splitNumber.reverse().join(''));
      if (stringifiedNumber.length > 2 && productOfTwo === reverseNumber) {
        !palindromes.includes(productOfTwo) && palindromes.push(productOfTwo);
      }
    }
    internalNth++
    if (internalNth.toString().length === 4) break;
  }
  palindromes.sort((pos1, pos2) => pos1 - pos2);
  return palindromes.pop();
}

console.log(largestPalindromeProduct())