var answer;
var a = [2, 4];
var b = [16, 32, 96];
var n = 2; //number of integers in a[]
var m = 3; //number of integers in b[]
var obj1 = {};
var obj2 = {};
var soln = 0;
// var soln;
for (let j = a[n - 1]; j <= b[0]; j++) {
    if ((j % a[0] == 0) && (j % a[1] == 0 || a[1] == undefined) && (j % a[2] == 0 || a[2] == undefined) && (j % a[3] == 0 || a[3] == undefined) && (j % a[4] == 0 || a[4] == undefined) && (j % a[5] == 0 || a[5] == undefined) && (j % a[6] == 0 || a[6] == undefined) && (j % a[7] == 0 || a[7] == undefined) && (j % a[8] == 0 || a[8] == undefined) && (j % a[9] == 0 || a[9] == undefined)) {
        obj1[j] = j;
    }
    if ((b[0] % j == 0) && (b[1] % j == 0 || b[1] == undefined) && (b[2] % j == 0 || b[2] == undefined) && (b[3] % j == 0 || b[3] == undefined) && (b[4] % j == 0 || b[4] == undefined) && (b[5] % j == 0 || b[5] == undefined) && (b[6] % j == 0 || b[6] == undefined) && (b[7] % j == 0 || b[7] == undefined) && (b[8] % j == 0 || b[8] == undefined) && (b[9] % j == 0 || b[9] == undefined)) {
        obj2[j] = j;
    }
}
for (let j = a[n - 1]; j <= b[0]; j++) {
    if ((obj2[j] == obj1[j]) && (obj2[j] !== undefined) && (obj1[j] !== undefined)) {
        soln++
        // soln = 'YES'
    }
}
// if (soln !== 'YES') {
//     // soln = 'NO'
// }
console.log(soln);
// console.log(obj1);
// console.log(obj2);
document.querySelector('h1').textContent = 'Hacker Rank "Between Two Sets" Problem'
answer = document.createElement('h5')
answer.textContent = `The number of such integers in between is: ${soln}`
document.querySelector('h1').appendChild(answer);