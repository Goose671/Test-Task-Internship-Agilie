const fs = require('fs');
const inputData = require('./input.json');

let results = [];

inputData.forEach((item) =>{

    let x = item.from;
    let y = item.to;
    let multiplied = x;
    let increased = x;

    let result = {
        from: x,
        to: y,
        itIsPossible: false
    };

    if (x === y) result.itIsPossible = true;

    while( multiplied < y || increased < y) {

        multiplied = multiplied * 2;
        increased = +`${increased}1`;

        if (multiplied == y || increased == y) {
            result.itIsPossible = true;
            break;
        };
    };

    results.push(result);

    fs.writeFileSync('output.json', JSON.stringify(results));
});