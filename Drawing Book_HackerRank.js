var n = 6,
p = 2,
count=0,
answer,
pageTurnF=0, //number of pages turned in forward direction.
pageTurnR=0; //number of pages turned in reverse direction.

//Counting from 1st page.
    for (let i = 1; i <= p; i++) {
        if(i>1 && i<n){
            if(i%2==0){
                pageTurnF++
            }
        }else if(p==1 || p==n){
            pageTurnF=0;
        }
    }

//Counting from last page.
    for (let i = n; i >= p; i--) {
        if(i>1 && i<n){
            if(i%2!=0){
                pageTurnR++
            }
        }else if(p==1 || p==n){
            pageTurnR=0;
        }
    }
//Getting minimum times we have to turn page.
if(pageTurnF<pageTurnR){
    answer = pageTurnF;
}else if(pageTurnF>pageTurnR){
    answer = pageTurnR;
} else if(pageTurnF==pageTurnR){
    answer = pageTurnF;
}

console.log(answer)