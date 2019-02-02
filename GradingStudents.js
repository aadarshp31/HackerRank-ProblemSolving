var answer;
var grades = [23, 89, 53, 54, 66, 75]
var add;
for (let i = 0; i < grades.length; i++) {
    add = 5 - (grades[i] % 5);
    if (add < 3 && grades[i] > 37) {
        grades[i] += add;      
    }   
}
grades.forEach(element => {console.log(element)});



document.querySelector('h1').textContent='Hacker Rank GradingStudents Problem'
answer = document.createElement('h5')
answer.textContent = `The Grade is ${grades}`
document.querySelector('h1').appendChild(answer);