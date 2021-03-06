// 2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
// ```js
// #
// ##
// ###
// ####
// #####
// ######
// #######
// ```
// > It may be useful to know that you can find the length of a string by writing .length after it.

let n = 7;
function drawTrangle(n) {
    let string = "";
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            string += "#";
        }
        string += "\n";
    }
    console.log(`length of string is ${string.length}`);
    return string;
}

console.log("Right trangle pattern")
console.log(drawTrangle(n));