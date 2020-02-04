function doubleIt(arr1){
    return arr1*2
}
const arr=[1,2,3,4,5,6];
transformer(arr,doubleIt)

function transformer(arr,doubleIt )
{ var myarr=[];
    for(var i=0;i<arr.length;i++)
   {var m=doubleIt(arr[i])
    myarr.push(m);
}

console.log(myarr)
    
}
//arr.map(doubleIt)
