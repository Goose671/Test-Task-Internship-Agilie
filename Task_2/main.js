const fs = require('fs');
const inputData = require('./input.json');

let results = [];

inputData.forEach(arr => {

    const n = arr.length;

    const frequency = new Array(n + 1).fill(0);

    const result = {
        arr: arr,
        repetitive: 0
    };

    for (let i = 0; i < n; i++) {
        frequency[arr[i]]++;
    };

    for (let i = 0; i < n; i++) {

        if (frequency[arr[i]] > 1) {

            result.repetitive = arr[i];
            results.push(result);

            break;
        };
    };
});

fs.writeFileSync('output.json', JSON.stringify(results));