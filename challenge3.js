let evenNumbers = 0;
let oddNumbers = 0;

for (let number = 1; number <= 20; number++) {
  if (number % 2 === 0) {
    console.log(`${number} is even`);
    evenNumbers++;
  } else {
    console.log(`${number} is odd`);
    oddNumbers++;
  }
}

console.log(
  `Summary: Even numbers: ${evenNumbers}. OddNumbers: ${oddNumbers}.`
);
