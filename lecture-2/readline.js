//require=> readline

const readline=require("readline");
//interface

const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt: "$$"
});

console.clear();
//prompt
reader.prompt();
// => i/p
reader.on("line",function(data){
    console.log("did you just type"+data);
    reader.prompt();
})

//cli =>close

reader.on("close",function(){
    console.log("bye bye")
})