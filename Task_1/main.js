const fs = require('fs');
const inputData = require('./input.json');

let results = [];

inputData.forEach((item) =>{

    const {from, to} = item

    let multiplied = from;
    let increased = from;

    let result = {
        from: from,
        to: to,
        itIsPossible: false
    };

    if (from === to) result.itIsPossible = true;

    while( multiplied < to || increased < to) {

        multiplied = multiplied * 2;
        increased = +`${increased}1`;

        if (multiplied == to || increased == to) {
            result.itIsPossible = true;
            break;
        };
    };

    results.push(result);

    fs.writeFileSync('output.json', JSON.stringify(results));
});