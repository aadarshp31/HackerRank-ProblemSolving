var arr = [769082435, 210437958, 673982045, 375809214, 380564127]
var soln = []; // soln = [MinSum, MaxSum]
var answer;
var sum0 = 0;
var sum1 = 0;
var sum2 = 0;
var sum3 = 0;
var sum4 = 0;

for (let i = 0; i < arr.length; i++) {    
    if (i !== 0) {
        sum0 += arr[i]
    } if(i !== 1) {
        sum1 += arr[i]
    } if(i !== 2) {
        sum2 += arr[i]
    } if(i !== 3) {
        sum3 += arr[i]
    } if(i !== 4) {
        sum4 += arr[i]
    }  
}
//Finding Maximum Sum
    if (sum0 >= sum1 &&  sum0 >= sum2 && sum0 >= sum3 && sum0 >= sum4) {
        soln.unshift(sum0);        
    } else if (sum1 >= sum0 &&  sum1 >= sum2 && sum1 >= sum3 && sum1 >= sum4) {
        soln.unshift(sum1);        
    } else if (sum2 >= sum1 &&  sum2 >= sum0 && sum2 >= sum3 && sum2 >= sum4) {
        soln.unshift(sum2);        
    } else if (sum3 >= sum1 &&  sum3 >= sum2 && sum3 >= sum0 && sum3 >= sum4) {
        soln.unshift(sum3);        
    } else if (sum4 >= sum1 &&  sum4 >= sum2 && sum4 >= sum3 && sum4 >= sum0) {
        soln.unshift(sum4);        
    }
// Finding Minimum Sum
    if (sum0 <= sum1 &&  sum0 <= sum2 && sum0 <= sum3 && sum0 <= sum4) {
        soln.unshift(sum0);        
    } else if (sum1 <= sum0 &&  sum1 <= sum2 && sum1 <= sum3 && sum1 <= sum4) {
        soln.unshift(sum1);        
    } else if (sum2 <= sum1 &&  sum2 <= sum0 && sum2 <= sum3 && sum2 <= sum4) {
        soln.unshift(sum2);        
    } else if (sum3 <= sum1 &&  sum3 <= sum2 && sum3 <= sum0 && sum3 <= sum4) {
        soln.unshift(sum3);        
    } else if (sum4 <= sum1 &&  sum4 <= sum2 && sum4 <= sum3 && sum4 <= sum0) {
        soln.unshift(sum4);        
    }
    console.log(sum0);
    console.log(sum1);
    console.log(sum2);
    console.log(sum3);
    console.log(sum4);
    
console.log(soln[0], soln[1]);
    


document.querySelector('h1').textContent='Hacker Rank Mini-MaxSum Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);