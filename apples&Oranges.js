var answer;
var result;
var s = 5;
var t = 10;
var a = 3;
var b = 15;
var m = 3;
var n = 3;
var apples = [3, 4, -5];
var oranges = [-5, -6, 5];
var sumApples= 0;
var sumOranges= 0;

for (let i = 0; i < apples.length; i++) {
    apples[i] += a;
    // console.log(apples[i]);
    
    if (s <= apples[i] && apples[i] <= t){
        sumApples++
    }    
}
for (let j = 0; j < oranges.length; j++) {
    oranges[j] += b;
    if (s <= oranges[j] && oranges[j] <= t){
        sumOranges++
    }
}
console.log(sumApples, sumOranges);








document.querySelector('h1').textContent='Hacker Rank apples&Oranges Problem'
answer = document.createElement('h5')
answer.textContent = `The Apples & Oranges inside the House are: ${result}`
document.querySelector('h1').appendChild(answer);