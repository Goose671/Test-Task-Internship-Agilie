const fs = require('fs');
const inputData = require('./input.json');

const [tShirts, players] = inputData;

function presenceCheck(tShirts, players) {

    players.forEach(player => {

        if (player.sizes.length === 1) {

            const size = player.sizes;
            tShirts[size] -= 1;
            player.receivedTShirt = size;
        }
        else {

            const size1 = player.sizes[0];
            const size2 = player.sizes[1];

            if (tShirts[size1] >= tShirts[size2]) {
                player.receivedTShirt = size1;
                tShirts[size1] -= 1;
            }
            else {
                player.receivedTShirt = size2;
                tShirts[size2] -= 1;
            };
        };
    });

    for (const size in tShirts) {
        if (tShirts[size] < 0) {
            fs.writeFileSync('output.json', JSON.stringify('Not enough T-shirts for all players'));
            return false;
        }
    };

    fs.writeFileSync('output.json', JSON.stringify(players));
};

presenceCheck(tShirts, players);
