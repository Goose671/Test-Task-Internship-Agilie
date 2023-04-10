const fs = require('fs');



function findNum() {
    const [x, y] = require('./input.json')

    let result = {
        itIsPossible: false
    }

    let multiplied = x;
    let increased = x;

    if (x === y) result.itIsPossible = true;

    for (let i = 1; multiplied < y || increased < y; i++) {

        multiplied = multiplied * 2;
        increased = +`${increased}1`;

        if (multiplied == y || increased == y) {
            result.itIsPossible = true;
            break;
        }
    };
     
    fs.writeFileSync('output.json', JSON.stringify(result))
}
 
findNum(10, 80);


