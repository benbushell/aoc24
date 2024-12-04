const fs = require("fs");

fs.readFile("./day3_puzzle.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    doSolution(data.toString());
});

function doSolution(puzzle) {
    let regexp = /(mul\((0{0,2}[1-9]|0?[1-9][0-9]|[1-9][0-9][0-9]),(0{0,2}[1-9]|0?[1-9][0-9]|[1-9][0-9][0-9])\))/g
    let removal = /([mul()])/g
    let final = 0
    const matches = puzzle.matchAll(regexp);

    for (const match of matches) {
       let str = match[0].replace(removal,'') 
        let vals = str.split(',')
        final += (vals[0]*vals[1])
    }

    console.log(final)
}
