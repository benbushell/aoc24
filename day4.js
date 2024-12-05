const fs = require("fs");

fs.readFile("./day4_puzzle.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    doSolution(data.toString());
});

function doSolution(puzzle){
    let temp = puzzle.split('\n') 
    let data = []
    for(let layer in temp){
        let arr = layer.split()
        data.push(arr)
    }

}