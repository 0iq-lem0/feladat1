szinek=["piros","kek","zold"];
console.log(feladat01(szinek));

function feladat01(szinek){
    if(szinek.length<=1){
        return 0;
    }
    else{
        return (2**szinek.length)-szinek.length-1;
    }
}