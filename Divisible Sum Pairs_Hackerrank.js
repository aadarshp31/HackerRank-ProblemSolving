var arr = [1, 3, 2, 6, 1, 2],
n = arr.length,
k = 3,
count = 0;
for (let i =0; i<n; i++){
    console.log(i);  
    for (let j = i+1; j < n; j++) {
        var sum = arr[i] + arr[j]
        if (sum % k == 0){
            count++            
        }        
    }
}
console.log(count);