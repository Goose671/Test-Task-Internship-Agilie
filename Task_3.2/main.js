const fs = require('fs');
const inputData = require('./input.json');

const [tShirts, players] = inputData;

function presenceCheck(tShirts, players) {

    players.forEach(player => {
        let size;
        if (player.sizes.length === 1) {
            size = player.sizes[0];
        }
        else {
            const size1 = player.sizes[0];
            const size2 = player.sizes[1];
            size = tShirts[size1] >= tShirts[size2] ? size1 : size2;
        };

        player.receivedTShirt = size;
        tShirts[size] -= 1;
        if (tShirts[size] < 0) {
            fs.writeFileSync('output.json', JSON.stringify('Not enough T-shirts for all players'));
            return false;
        }
    });

    fs.writeFileSync('output.json', JSON.stringify(players));
    return true;
};

presenceCheck(tShirts, players);
