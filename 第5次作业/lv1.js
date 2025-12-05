function factorial1(n){
    let result=1;
    for(let i=1;i<=n;i++){
        result*=i;
    }
    return result;
}

function factorial2(n){
    if(n===1 || n===0){
        return 1;
    }else{
        return n*factorial2(n-1);
    }
}

console.log(factorial1(3),factorial2(4));