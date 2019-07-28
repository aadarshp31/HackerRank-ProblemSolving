var scores = [100, 100, 50, 40, 40, 20, 10],
    n = scores.length,
    alice = [5, 25, 50, 120],
    m = alice.length,
    uniqueScores = [],
    res = [];

for (let i = 0; i < n; i++) {
    if(!uniqueScores.includes(scores[i])){
        uniqueScores.push(scores[i])
    }    
}
// scores.forEach(element => {
//     if(!uniqueScores.includes(element)){
//         uniqueScores.push(element)
//     }
// });
for (let i = 0; i < m; i++) {
    if(!uniqueScores.includes(alice[i])){
    uniqueScores.push(alice[i])
    }
    uniqueScores.sort((a,b) => b-a)
    res.push(uniqueScores.indexOf(alice[i])+1)
    uniqueScores.splice(uniqueScores.indexOf(alice[i]),1)   
}
console.log(res)
console.log(scores)
console.log(uniqueScores)
