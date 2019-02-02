var year = 1947,
sumDays = 0,
day,
month;
    if(year%4 == 0 && year%100 != 0 && year>1918 || year%400 == 0  && year>1918){        
        var feb = 29;
    } else if(year == 1918){
        var feb = 15;
    } else if(year%4 == 0 && year < 1918){
        var feb = 29;
    } else{
        var feb = 28;
    }
var monthDays = [31, feb, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

for (let i = 0; i < 12; i++) {
    if(sumDays < 256){
        sumDays += monthDays[i]
        var month = i + 1 ;
    }    
} 
day = 256 - (sumDays - monthDays[month-1]);
console.log(`${("0" + day).slice(-2)}.${("0" + month).slice(-2)}.${year}`);

