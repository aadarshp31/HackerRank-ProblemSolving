var b = 5,
    keyboards = [4],
    drives = [5],
    n = keyboards.length,
    m = drives.length,
    total = [],
    result;


for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if ((keyboards[i] + drives[j] <= b) && keyboards[i] !== undefined && drives[j] !== undefined) {
            total.push(keyboards[i] + drives[j])
        } else{
            total.push(-1)
        }
        
    }
}
total.sort((a,b) => {return (b-a)})
result = total[0]
console.log(total)
console.log(result)