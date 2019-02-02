var answer;
var maxRecordBreakCount = 0;
var minRecordBreakCount = 0;
var result = [maxRecordBreakCount, minRecordBreakCount];
var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
var n = scores.length;
var min = scores[0];
var max = scores[0];

for (let i = 0; i<n; i++) {
    if (scores[i] > max){
        maxRecordBreakCount++
        max = scores[i];
    }
    if (scores[i] < min){
        minRecordBreakCount++
        min = scores[i];
    }
}
console.log(maxRecordBreakCount, minRecordBreakCount)








document.querySelector('h1').textContent='Hacker Rank Breaking the Records Problem'
answer = document.createElement('h5')
answer.textContent = `The number of times max and min records were broken are: ${result}`
document.querySelector('h1').appendChild(answer);