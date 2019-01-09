const memoizeContainer = (func) => {
  const cache = {};
  return (...args) => {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    }
    cache[n] = func(n);
    return cache[n];
  }
};

export default memoizeContainer;