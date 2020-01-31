/*var arr=[1,2,3,4,5]
var new1=[];
var l=arr.length
for(var i=0;i<l;i++)
new1.push(arr.pop())

console.log(new1)*/

var a1=[1,2,3]
var a2=[11,1,2,100]
var l=a2.length
for(var i=0;i<l;i++)
{
    if(a1.includes(a2[i])==false)

a1.push(a2[i])
}
console.log(a1)