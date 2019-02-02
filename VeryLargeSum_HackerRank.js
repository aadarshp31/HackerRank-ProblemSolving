// alert('VeryLargeSum is connected!')
var ar= [2, 3, 2, 3, 5];
var soln = 0;
var answer;
function aVeryBigSum(ar) {
    for (index = 0; index < ar.length; index++) {
        soln += ar[index];        
    }
    return parseInt(soln);
}
aVeryBigSum(ar);

document.querySelector('h1').textContent='Hacker Rank aVeryLargeSum Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);