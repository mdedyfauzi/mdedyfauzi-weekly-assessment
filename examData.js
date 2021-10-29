const examData = [
  { id: 1, name: 'Tony', score: 87 },
  { id: 2, name: 'Steve', score: 91 },
  { id: 3, name: 'Scott', score: 72 },
  { id: 4, name: 'Natasha', score: 66 },
  { id: 5, name: 'Bruce', score: 77 },
  { id: 6, name: 'Denvers', score: 82 },
  { id: 7, name: 'Pepper', score: 91 },
  { id: 8, name: 'Clint', score: 84 },
  { id: 9, name: 'Barton', score: 90 },
  { id: 10, name: 'Stacey', score: 88 },
  { id: 11, name: 'Wanda', score: 50 },
  { id: 12, name: 'Peter', score: 79 },
  { id: 13, name: 'James', score: 84 },
  { id: 14, name: 'Shang', score: 85 },
];

// You can modify the variable name
let averageScore = (n, element) => {
  let mean = 0;
  n = examData.length;
  element = examData.reduce((sum, a) => {
    return sum + a.score;
  }, 0);
  mean = (1 / n) * element;
  return Math.round(mean);
};

let highestStudents = (highest, students) => {
  highest = examData.reduce((prev, curr) => (prev.score > curr.score ? prev : curr));
  students = examData.map((element) => (element.score >= highest.score ? element.name : 0));
  return students.filter(function (f) {
    return f !== 0;
  });
};

let lowestStudents = (lowest) => {
  lowest = examData.reduce((prev, curr) => (prev.score < curr.score ? prev : curr));
  return lowest.name;
};

let failStudents = (fail) => {
  fail = examData.map((element) => (element.score < 75 ? element.name : 0));
  return fail.filter(function (f) {
    return f !== 0;
  });
};

let passPercentage = (pass, whoPass) => {
  pass = examData.map((element) => (element.score >= 75 ? element.name : 0));
  whoPass = pass.filter(function (f) {
    return f !== 0;
  });
  pass = (whoPass.length / examData.length) * 100;
  return `${Math.round(pass)}%`;
};

console.log(`Average score: ${averageScore()}`);
console.log(`Student who get highest score: ${highestStudents()}`);
console.log(`Student who get lowest score: ${lowestStudents()}`);
console.log(`Student who fail: ${failStudents()}`);
console.log(`Pass percentage: ${passPercentage()}`);
