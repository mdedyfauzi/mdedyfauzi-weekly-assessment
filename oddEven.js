// write function here
const oddEven = (variable) => {
  if (variable % 2 == 1) {
    console.log(`${variable} is odd number`);
  } else if (variable % 2 == 0) {
    console.log(`${variable} is even number`);
  }
  return variable;
};

// input test
const input1 = 3;
const input2 = 10;

oddEven(input1); // output: 3 is odd number
