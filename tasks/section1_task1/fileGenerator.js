let fs = require('fs');
let randomWords = require('random-words');
let mulWords = 1;
let amountToCreate=5;
for (let amountOfFiles = 0; amountOfFiles < amountToCreate; amountOfFiles++) {
  console.log(mulWords *= 2);
  console.log(`asynchronous${amountOfFiles}`);
  fs.writeFile(`created_files/asynchronous${amountOfFiles}.txt`, randomWords(mulWords), (err) => {
    if (err) throw err;
  });
}
