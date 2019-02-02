var ar = [3,2,1,3]
var answer;
// Code starts here!
var candles=1;
var sortArr = ar.sort( (a,b) => { b-a});
for (let i = 1; i < sortArr.length; i++) {
        if (sortArr[0] == sortArr[i]) {
            candles++;
        }
} console.log(candles);
// Code ends here!
   



document.querySelector('h1').textContent='Hacker Rank BirthDayCakeCandles Problem'
answer = document.createElement('h5')
answer.textContent = `Candles blown is = ${candles}`
document.querySelector('h1').appendChild(answer);