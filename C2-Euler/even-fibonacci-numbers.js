import memoizeContainer from "../memoizedContainer";
import performanceMonitor from "../performanceMonitor";

const evenFiboNumbers = (maxDigits) => {
  const fibonacciNumbers = [1, 2];
  let sumOfEvenData = 0;

  for (let index = 2; index < fibonacciNumbers.length + 2; index++) {
    fibonacciNumbers[index] = fibonacciNumbers[index - 1] + fibonacciNumbers[index - 2];
    if (fibonacciNumbers[index] > maxDigits) {
      fibonacciNumbers.splice(fibonacciNumbers.length + 1, 1)
      break;
    }
  }

  Array.from(fibonacciNumbers).forEach((arg) => {
    if (arg % 2 === 0) sumOfEvenData += arg;
  });
  return sumOfEvenData;
}

const memoizedMethod = memoizeContainer(evenFiboNumbers);
performanceMonitor(memoizedMethod(10000000), 2);
// performanceMonitor(memoizedMethod(10000000), 2);