var n = 4,
k = 1,
bill = [3, 10, 2, 9],
b = 12,
sumItems = 0;

for (let i = 0; i < bill.length; i++) {
    if( i !=k ){
    sumItems += bill[i]
    }
}
if( sumItems/2 == b ){
    console.log('Bon Appetit')
} else {
    console.log( b - sumItems/2 );
    
}