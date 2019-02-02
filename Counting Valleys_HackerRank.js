var s = 'UDDUUDDUDUUUD',
    n = s.length,
    CountValley,
    level = 0;
    console.log(n);

//considering if the valley starts at 1st step itself.
    switch (s.charAt(0)) {
        case 'D':
            CountValley = 1; //for YES.
            break;
        default:
            CountValley = 0; //for NO.
            break;
    }

//looping through all characters of the string "s".
for (let i = 0; i < n; i++) {

    //setting level after each step taken by Gary.
    if (s.charAt(i) == 'U') {
        level++ // level +1 for each 'U'
    }else if(s.charAt(i) == 'D'){
        level-- // level -1 for each 'D'
    }

    //Checking for the start of a valley
    if((level == 0 && s.charAt(i+1) == 'D') ){
        CountValley++ //Counting valleys for each '0 to negative' change in level.
    }
}

console.log(CountValley)  //Answer