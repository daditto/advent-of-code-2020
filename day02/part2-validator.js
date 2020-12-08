const fs = require('fs');
const readline = require('readline');

const FILENAME = process.argv[2];


let input = fs.readFileSync(FILENAME, { encoding: 'ascii' });

let numberOfValidPasswords = 0;

const output = [...input.matchAll(/(\d+)-(\d+) (\w): (\w+)/g)];

for (let line of output) {

    let [_, firstPosition, secondPosition, letter, password] = line;

    // console.log('---------------');
    // console.log(firstPosition);
    // console.log(secondPosition);
    // console.log(letter);
    // console.log(password);

    firstPosition = parseInt(firstPosition);
    secondPosition = parseInt(secondPosition);

    let firstIndex = firstPosition - 1;
    let secondIndex = secondPosition - 1;

    if (validate(firstIndex, secondIndex, letter, password)) {
        numberOfValidPasswords++;
    }
}

console.log('Number of valid passwords: ' + numberOfValidPasswords);


function validate(firstPosition, secondPosition, letter, password) {

    let firstGate, secondGate;

    // console.log(password[firstPosition] + ' = ' + letter);
    if (password[firstPosition] === letter) {
        // console.log(true);
        firstGate = true;
    }

    // console.log(password[secondPosition] + ' = ' + letter);
    if(password[secondPosition] === letter) {
        // console.log(true);
        secondGate = true;
    }

    // console.log('result: ' + Boolean(firstGate ^ secondGate));

    return Boolean(firstGate ^ secondGate);
}