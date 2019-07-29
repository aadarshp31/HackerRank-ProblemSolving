var scores = [100, 100, 50, 40, 40, 20, 10],
    n = scores.length,
    alice = [5, 25, 50, 120],
    m = alice.length,
    res = [];

    const uniqueScores = [...new Set(scores)]

for (let i = 0; i < m; i++) {
    if(!uniqueScores.includes(alice[i])){
    uniqueScores.push(alice[i])
    uniqueScores.sort((a,b) => b-a)
    res.push(uniqueScores.indexOf(alice[i])+1)
    uniqueScores.splice(uniqueScores.indexOf(alice[i]),1)   
    }else{
    uniqueScores.sort((a,b) => b-a)
    res.push(uniqueScores.indexOf(alice[i])+1)
}}
console.log(res)
