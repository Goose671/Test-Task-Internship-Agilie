const fs = require('fs');
const inputData = require('./input.json');

let places = 0;

function findGoodPlaces(scene) {

    for (let i = 0; i < scene.length; i++) {
        const level = scene[i];
        for (let j = 0; j < level.length; j++) {
            const actor = scene[i][j];
            if (!actor) {
                for (k = 0; k < level.length; k++) {

                    const prevOrNextActor = scene[i][k]

                    if (prevOrNextActor && k <= j + 1 && k >= j - 1) {
                        places++;
                    }
                }
                if (i - 1 > -1) {
                    const prevLevel = scene[i - 1][j]
                    if (prevLevel) { places++; }
                }
                if (i + 1 < scene.length) {
                    const nextLevel = scene[i + 1][j]
                    if (nextLevel) { places++; }
                }
            }
        }
        console.log(places)
    }
    fs.writeFileSync('output.json', JSON.stringify(`Managed to find ${places} good places for the spotlight`));
}

findGoodPlaces(inputData);