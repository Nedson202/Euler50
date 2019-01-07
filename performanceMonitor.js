let start, end;
const performanceMonitor = (func, count) => {
  start = new Date().getTime();
  for (let i = 0; i <= count; i++) {
    console.log(func);
  }
  end = new Date().getTime();
  console.log(`Time taken to calculate method is ${end - start} ms`)
}

export default performanceMonitor;