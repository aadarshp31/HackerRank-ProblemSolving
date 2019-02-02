var arr =[5,5,4,4,5,4],
n = arr.length,
t1=0,
t2=0,
t3=0,
t4=0,
t5=0,
result=[];

for (let i = 0; i < n; i++){
	if(arr[i] == 1){ t1++; }    
	else if(arr[i] == 2){ t2++; }
	else if(arr[i] == 3){ t3++; }
	else if(arr[i] == 4){ t4++; }
	else if(arr[i] == 5){ t5++; }
}
	if(t1>=t2 && t1>=t3 && t1>=t4 && t1>=t5){ result.push(1); }
	if(t2>=t1 && t2>=t3 && t2>=t4 && t2>=t5){ result.push(2); }
	if(t3>=t1 && t3>=t2 && t3>=t4 && t3>=t5){ result.push(3); }
	if(t4>=t1 && t4>=t3 && t4>=t2 && t4>=t5){ result.push(4); }
    if(t5>=t1 && t5>=t3 && t5>=t4 && t5>=t2){ result.push(5); }
    result.sort( (a,b) => a-b );
    console.log(result[0]);    
    return result[0];

    