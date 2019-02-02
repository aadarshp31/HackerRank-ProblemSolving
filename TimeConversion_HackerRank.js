var s = '10:40:03AM' // => 19:05:45
var answer;
var [hours, minutes, seconds] = s.split(':')
var h = Number(hours);
var newTime = `${h}:${minutes}:${seconds}`
var result;

if (s.search('PM') != -1) {    
    newTime = newTime.replace('PM', '');
            if (h == 12 && s.search('PM') != -1){}
            else {newTime = newTime.replace(h, h += 12);}
} else {
    newTime = newTime.replace('AM', '');
    if (h == 12 && s.search('AM') != -1){newTime = newTime.replace(h, '00');}
}

if (h<=9) { h = `0${h}`
    
}
if (h<=9){result = '0' + newTime}
else {result = newTime}
console.log(result);
console.log(h);


 








document.querySelector('h1').textContent='Hacker Rank TimeConversion Problem'
answer = document.createElement('h5')
answer.textContent = `The millitaryTime is ${newTime}`
document.querySelector('h1').appendChild(answer);