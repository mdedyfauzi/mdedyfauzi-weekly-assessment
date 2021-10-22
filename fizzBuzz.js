// write function here
const fizzBuzz = (number) => {
  let second = '';
  let j;
  for (var i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      j = `FizzBuzz`;
    } else if (i % 5 == 0) {
      j = `Buzz`;
    } else if (i % 3 == 0) {
      j = `Fizz`;
    } else {
      j = i;
    }
    // make loop direction horizontally
    second += j + ' ';
  }
  console.log((i = second));
};

// input test
const input1 = 16;
const input2 = 100;

fizzBuzz(input1);
