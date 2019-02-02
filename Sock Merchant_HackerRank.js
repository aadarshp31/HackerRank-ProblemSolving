var  ar = [10,10,10,10,10,20,20,20,20,30,50,50,50],
n = ar.length,
count = 0;

    ar.sort();
    for(let i =0; i<n; i++){
        var pair = ar.indexOf(ar[i], i+1)
        console.log(ar.indexOf(ar[i], i+1));
        
        if(pair>-1){
            ar.splice(i,2)
            count++
            i = -1;
        }
    }
    console.log(count);