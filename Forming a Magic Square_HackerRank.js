var matrix = [[4, 5, 8], [2, 4, 1], [1, 9, 7]],
    n = matrix.length,
    count = 0,
    cycle = 1,
    sum = 0,
    cost = 0;

for (let i = 1; i <= n*n; i++) {count += i}
    
for(let i = 0; i < n; i++){
        for (let j = 0; j < n; j++) {
            sum += matrix[i][j];
            if(cycle == 3){
                console.log(sum)
                console.log(Math.abs((count/n) - sum))
            cost += Math.abs((count/n) - sum);
            sum = 0;
            cycle = 0;
            }cycle++
        }
}    

console.log(cost)