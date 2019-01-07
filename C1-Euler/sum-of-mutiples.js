import memoizeContainer from "../memoizedContainer";
import performanceMonitor from "../performanceMonitor";

const sumOfMultiples = (nth) => {
  let total = 0;
  for (let index = 0; index < nth; index++) {
    if (index % 3 === 0 || index % 5 === 0) {
      total += index;
    }
  }
  return total;
};

const memoizedResult = memoizeContainer(sumOfMultiples);
performanceMonitor(memoizedResult(1000), 10);
