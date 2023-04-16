const fs = require('fs');
const inputData = require('./input.json');


function findGoodPlaces(scene) {
    const result = { places: [], positions: 0 };

    for (let i = 0; i < scene.length; i++) {
        const level = scene[i];
        for (let j = 0; j < level.length; j++) {
            const actor = scene[i][j];
            if (!actor) {
                for (k = 0; k < level.length; k++) {
                    const actorX = scene[i][k];
                    if (actorX && k < j) {
                        result.places.push({ x: i, y: j, direction: 'left'})
                        k=j;
                        continue;
                    } 
                    if (actorX && k > j) {
                        result.places.push({ x: i, y: j, direction: 'right'})
                        break;
                    }
                }

                for (let d = 0; d<scene.length; d++) {
                    const actorY = scene[d][j];
                    if (actorY && d < i) {
                        result.places.push({ x: i, y: j, direction: 'top'})
                        d=i;
                        continue;
                    }
                    if (actorY && d > i) {
                        result.places.push({ x: i, y: j, direction: 'bottom'})
                        break;
                    }
                }
            }
        }
    }

    result.positions = result.places.length;
    fs.writeFileSync('output.json', JSON.stringify(result));
}

findGoodPlaces(inputData);