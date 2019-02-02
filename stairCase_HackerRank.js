var soln;
var answer;
n = 6;
indent = ""
for (let i = 0; i < n; i++) {
    indent += '#';   
    console.log(indentCreator(n-i) + indent)
}
 function indentCreator(number){
    var indentment = ''
     for (let index = 1; index < number; index++) {
         indentment += ' '
     }return indentment;
 }

        
        





















document.querySelector('h1').textContent='Hacker Rank PlusMinus Problem'
answer = document.createElement('h5')
answer.textContent = `The final score is ${soln}`
document.querySelector('h1').appendChild(answer);