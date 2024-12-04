const fs = require("fs");

fs.readFile("./day2_puzzle.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    doSolution(data.toString());
});

function getOrder(layer) {
    let increase = 0;
    let decrease = 0;
    let differences = [];
    for (let i = 0; i < layer.length - 1; i++) {
        let curr = layer[i];
        let next = layer[i + 1];
        differences.push(curr - next);
        if (curr - next > 0) {
            decrease++;
        } else if (curr - next < 0) {
            increase++;
        }
    }

    if (increase > decrease && decrease <= 1) {
        return "increasing";
    } else if (decrease > increase && increase <= 1) {
        return "decreasing";
    } else {
        return undefined;
    }
}

function checkOrder(curr, next) {
    if (curr - next > 0) {
            return('decreasing')
        } else if (curr - next < 0) {
            return('increasing')
        }
}

function diffChecker(layer, order) {
    let faults = [];
    for (let i = 0; i < layer.length - 1; i++) {
        let curr = layer[i];
        let next = layer[i + 1];

        if (
            checkOrder(curr, next) !== order ||
            Math.abs(curr - next) > 3 ||
            Math.abs(curr - next) < 1
        ) {
            faults.push(i);
        }
    }
    return(faults)
}

function doSolution(puzzle) {
    let temp = puzzle.split("\n");
    let data = [];
    let safe = 0
    for (let layer of temp) {
        data.push(layer.split(" "));
    }

    for (let layer of data) {
        let order = getOrder(layer);

        if (order !== undefined) {
            let faults = diffChecker(layer, order)
            if (faults.length == 1) {
                let newLayer = layer.splice(faults[0],1)
                let final = diffChecker(newLayer,order)
                if(final.length == 0){
                   console.log('nah')
                }
            }else if (faults.length == 0){
                safe++
            }
        }
    }
    console.log('safe:',safe)
}
