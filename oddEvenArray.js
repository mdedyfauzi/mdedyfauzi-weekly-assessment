// write function here
const oddEvenArray = (array) => {
  for (var i = 0; i <= array.length; i++) {
    if (array[i] % 2 == 1) {
      console.log(`${array[i]} is odd number`);
    } else if (array[i] % 2 == 0) {
      console.log(`${array[i]} is even number`);
    }
  }
  return array;
};

// input test
const input = [1, 4, 6, 3, 10, 7];

oddEvenArray(input);
