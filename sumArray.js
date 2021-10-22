// write function here
const sumArray = (sum) => {
  let total = 0;
  for (let i = 0; i < sum.length; i++) {
    total += sum[i];
  }
  console.log((sum = total));
};

// input test
const input1 = [1, 2, 5, 8, 9, 10];
const input2 = [1, 2, 3, 4, 5];

sumArray(input1); // output: 35
//sumArray(input2); // output: 15
