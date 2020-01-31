function dectobin(num)
{
    if(num%2==0)
    {
        num=num/2;
        console.log("0")
    }
    else
    {
        num=((num/2)-0.5);
        console.log("1")
    }
    if(num!=0)
    dectobin(num)
}
dectobin(27)
// Math.floor(num);