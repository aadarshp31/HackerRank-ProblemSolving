var answer;
var result;
var x1 = 2081;
var v1 = 8403;
var x2 = 9107;
var v2 = 8400;
for (let n = 1; n < 10000; n++) {    
if (x1+(v1*n) == x2+(v2*n)){
    result = 'YES'
    console.log(n); 
    break
    // if (x1+(v1*n) > x2+(v2*n)){
    //     result = 'NO';  
    //     console.log(n);   
} else {
    result = 'NO'
    // console.log(n); 
}
}
console.log(result);




document.querySelector('h1').textContent='Hacker Rank kangaroo Problem'
answer = document.createElement('h5')
answer.textContent = `Will both Kangaroos land on same position after same time? ${result}`
document.querySelector('h1').appendChild(answer);