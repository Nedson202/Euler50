import memoizeContainer from "../memoizedContainer";

const largestPrimeFactor = (digitToFactorize) => {
  let counter,
  nthCounter,
  nthTerm = 1,
  status = true,
  number = 2,
  factorNumber = digitToFactorize,
  primeFactors = [];

  for (nthCounter = 0; nthCounter < nthTerm;) {
    for (counter = 2; counter < Math.sqrt(number); counter++) {
      if (number % counter === 0) {
        status = false;
        break;
      }
    }

    if (status === true) {
      if (factorNumber % number === 0) {
        primeFactors.push(number);
        factorNumber = factorNumber / number;
      }
      nthCounter++;
    }

    status = true;
    number++;
    nthTerm++;
    if (factorNumber === 1) break;
  }
  return primeFactors.pop();
};

const memoizedPrime = memoizeContainer(largestPrimeFactor)
console.log(memoizedPrime(600851475143))
