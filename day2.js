const fs = require('fs');

console.log('This is a test')

fs.readFile('./day2_puzzle.txt', (err, data) => {
    if (err) throw err;
    console.log(data.toString())
    doSolution(data.toString())

})




function doSolution(puzzle) {
    console.log(puzzle)
    let temp = puzzle.split("\n");
    let data = [];
    for (let layer of temp) {
        data.push(layer.split(" "));
    }
    console.log(data);

    for (let layer of data) {
        let safe = true;
        for (let i = 0; i < layer.length - 1; i++) {
            let curr = layer[i];
            let next = layer[i + 1];
            if (Math.abs(curr - next) >= 1 && Math.abs(curr - next) <= 3) {
                console.log(i);
            } else {
                safe = false;
            }
        }
        console.log(safe);
    }
}
