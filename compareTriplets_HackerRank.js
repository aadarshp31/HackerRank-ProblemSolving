var a = [1, 2, 3];
var b = [0 ,2, 4];
var scoreA = 0;
var scoreB = 0;
var soln;
var answer;

function compareTriplets(a, b) {
    for (let index = 0; index < 3; index++) {
        if (a[index] > b[index]){
            console.log(`case 1`);
            console.log(a[index] > b[index]);
            scoreA++
            console.log(scoreA);
            console.log(scoreB);
        } else if (a[index] < b[index]){
            console.log(`case 2`);
            console.log(a[index] < b[index]);
            scoreB++
            console.log(scoreA);
            console.log(scoreB);
        } else {
            console.log(`case 3`);
            console.log(a[index] == b[index]);
            scoreA += 0;
            scoreB += 0;
            console.log(scoreA);
            console.log(scoreB);
        }
    }return soln = [scoreA, scoreB];
}
compareTriplets(a,b);
document.querySelector('h1').textContent='Hacker Rank CompareTriplets Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);