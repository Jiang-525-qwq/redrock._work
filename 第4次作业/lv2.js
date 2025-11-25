let arr = [[1, [2, 3], 4], [5, [6, 7], 8, 9]];

function fn(array){
    let a=[];
    array.forEach(element => {
        if(Array.isArray(element)){
            a=a.concat(fn(element));
        }else{
            a.push(element);
        }        
    });
    return a;
}

console.log(fn(arr));