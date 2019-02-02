var arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
var sumA = 0;
var sumB = 0;
var soln;
console.log(arr);

function diagonalDifference(arr) {    
    var colDecrement = arr.length -1    
        for (let i = 0; i < arr.length; i++) {
            sumA += arr[i][i]
            sumB += arr[i][colDecrement]
            colDecrement--                           
        }return soln = Math.abs(sumA - sumB);
}
diagonalDifference(arr);
var answer;
document.querySelector('h1').textContent='Hacker Rank AbsoluteDiagonalDefferenceOfMatrix Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);
