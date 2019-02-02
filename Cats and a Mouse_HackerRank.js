var q = 2,
    x = 1,
    y = 2,
    z = 3,
    catA,
    catB;

    catA = z-x;
    catB = z-y;
    console.log(catA);
    console.log(Math.abs(catB));

    if (Math.abs(catA) < Math.abs(catB)) {
        console.log('Cat A');
        return 'Cat A';
    }else if(Math.abs(catA) > Math.abs(catB)){
        console.log('Cat B');
        return 'Cat B';
    }else{
        console.log('Mouse C');
        return 'Mouse C';
    }





