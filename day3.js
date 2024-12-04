const fs = require("fs");

fs.readFile("./day3_puzzle.txt", (err, data) => {
    if (err) throw err;
    console.log(data.toString());
    doSolution(data.toString());
});

function doSolution(puzzle) {
    let regexp = /(do\(\)|don't\(\)|mul\((0{0,2}[1-9]|0?[1-9][0-9]|[1-9][0-9][0-9]),(0{0,2}[1-9]|0?[1-9][0-9]|[1-9][0-9][0-9])\))/g
    let removal = /([mul()])/g
    let final = 0
    const matches = puzzle.matchAll(regexp);

    let doing = true
    
    for (const match of matches) {
        console.log(match[0])
        if(match[0] === 'do()'){
            doing = true
            console.log('yeah')
            
        }else if(match[0] === `don't()`){
            doing = false
            console.log('nay')
            

        }else if(doing){
            
       let str = match[0].replace(removal,'') 
        let vals = str.split(',')
        final += (vals[0]*vals[1])

        }
    }

    console.log(final)
}
