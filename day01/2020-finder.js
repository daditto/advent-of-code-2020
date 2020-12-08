const fs = require('fs');
const readline = require('readline');

const FILENAME = process.argv[2];


let input; // will eventually store an array of integers

input = fs.readFileSync(FILENAME, { encoding: 'ascii' });
input = input.split('\n');
input = input.map((line) => parseInt(line));


for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
        for (let k = j + 1; k < input.length; k++) {
            let sum = input[i] + input[j] + input[k];
            // console.log('sum: ' + sum);
            if (sum === 2020) {
                console.log('----------')
                console.log(j);
                console.log(i);
                console.log(k);

                let product = input[i] * input[j] * input[k];
                console.log('product: ' + product)
            }
        }
    }
}