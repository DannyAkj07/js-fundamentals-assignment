let evenNumbers = 0;
let oddNumbers = 0;

for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
    evenNumbers++;
  } else {
    console.log(`${i} is odd`);
    oddNumbers++;
  }
}

console.log(`Summary: Even numbers: ${evenNumbers}. OddNumbers: ${oddNumbers}`);
