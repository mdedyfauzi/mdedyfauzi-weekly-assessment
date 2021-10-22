// write function here
function printNumberDescending(number) {
  for (var i = number; i >= 0; i--) {
    console.log(i);
  }
  return number;
}

// input test
const input1 = 5;
const input2 = 10;

printNumberDescending(input1); // output: 0 1 2 3 4 5
