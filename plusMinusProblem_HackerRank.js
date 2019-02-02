arr = [-2, -1, 0, 1, 2,3]
var sumP = 0;
var sumN = 0;
var sumZ = 0;
var soln;
var answer;
var i;


function plusMinus(arr) {
    for (i = 0; i < arr.length; i++){
        if (arr[i] == Math.abs(arr[i]) && arr[i] !== 0) {
        sumP++
        console.log('positive ' + sumP);
        
        } else if (arr[i] !== Math.abs(arr[i]) && arr[i] !== 0) {
        sumN++
        console.log('negative ' + sumN);
        } else {
        sumZ++
        console.log('Zero ' + sumZ);
    }var P = (sumP / arr.length)
     var N = (sumN / arr.length)
     var Z = (sumZ / arr.length)
    
        
    }soln = [P.toFixed(4), N.toFixed(4), Z.toFixed(4)]
    for (let index = 0; index < soln.length; index++) {
        console.log(soln[index]);
    }
}
plusMinus(arr);

document.querySelector('h1').textContent='Hacker Rank PlusMinus Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);