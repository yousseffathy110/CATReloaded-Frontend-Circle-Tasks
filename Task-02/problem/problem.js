let start = -2;
let calls = ["call", "call", "call", "call", "call"];

const increment = (n) => {
  count = n;

  function counter() {
    return count++;
  }

  return counter;
};

const response = (n, series) => {
  let counter = increment(n);
  let arr = [];

  series.forEach((x) => {
    arr.push(counter());
  });

  return arr;
};

console.log(response(start, calls));