const fs = require('fs');
const inputData = require('./input.json');

const loaders = [0.5, 1, 2.5, 5, 10, 15, 20, 25];
const lbsLoaders = [10, 25, 35, 45].map(lbs => lbs * 0.453);
const combinedLoaders = loaders.concat(lbsLoaders).sort((a, b) => a - b);

let results = [];

inputData.forEach(item => {
    let currentWeight = 20;
    let remainingWeight = item - currentWeight;
    let remainingSpace = 12;
    const variants = [];
    const loadersCopy = [...combinedLoaders];

    while(loadersCopy) {
        for (let i = loadersCopy.length - 1; i >= 0; i--) {
            while (remainingWeight >= loadersCopy[i] * 2) {
                if (remainingSpace === 0) break;

                currentWeight += loadersCopy[i] * 2;
                remainingWeight = item - currentWeight;
                remainingSpace -= 1;
            };
        };
        variants.push(currentWeight);
        remainingSpace = 12;
        currentWeight = 20;
        remainingWeight = item - currentWeight;
        loadersCopy.splice(loadersCopy.length - 1, 1);
    };

    const filteredVariants = variants.filter(variant => variant > item);
    const result = Math.min(...filteredVariants);
    results.push(result);    
});

fs.writeFileSync('output.json', JSON.stringify(results));

