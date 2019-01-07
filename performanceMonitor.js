let start, end;
const performanceMonitor = (func) => {
  start = new Date().getTime();
  for (let i = 0; i <= 2; i++) {
    console.log(func);
  }
  end = new Date().getTime();
  console.log(`Time taken to calculate method is ${end - start} ms`)
}

export default performanceMonitor;