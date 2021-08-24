function fizzbuzz(){
  let n = 101;
  let result = [];

  for (let i = 1; i < n; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else {
      result.push(i.toString());
    }
  }
  console.log(result);
};

fizzbuzz();
