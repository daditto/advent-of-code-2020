const fs = require('fs');
const readline = require('readline');

const FILENAME = process.argv[2];


let input = fs.readFileSync(FILENAME, { encoding: 'ascii' });

let numberOfValidPasswords = 0;

const output = [...input.matchAll(/(\d+)-(\d+) (\w): (\w+)/g)];

for (let line of output) {

    let [_, min, max, letter, password] = line;

    // console.log('---------------');
    // console.log(min);
    // console.log(max);
    // console.log(letter);
    // console.log(password);

    min = parseInt(min);
    max = parseInt(max);

    if (validate(min, max, letter, password)) {
        numberOfValidPasswords++;
    }
}

console.log('Number of valid passwords: ' + numberOfValidPasswords);


function validate(min, max, letter, password) {
    console.log(typeof min);
    let count = 0;
    for (let character of password) {
        console.log(character);
        if (character === letter) {
            count++
        }
    }

    if (min <= count && count <= max) {
        return true;
    } else {
        return false;
    }
}