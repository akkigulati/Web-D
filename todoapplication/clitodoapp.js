
const print=console.log
const n=[];
const chalk=require("./node_modules/chalk")
const figlet=require("./node_modules/figlet")
print(chalk.cyan(figlet.textSync("TASKER")))
print(chalk.yellow("TYPE A COMMAND"))

//require=> readline
const readline=require("readline");
//interface

const reader=readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    prompt: "$$"
});


//prompt
reader.prompt();
// => i/p
reader.on("line",function(data){
    var cmd=data.split(" ")[0]
    var name=data.split(" ").slice(1).join(" ");
     
    
    if(cmd=="help")

   { print(` commands
   1. add task
   2. ls(to list all tasks)
   3. delete identer task id to delete it`)
}
    
    else if(cmd=="add")
    {
        n.push(name);
        print(n)
    }
    else if(cmd=='ls')
    {
        print(n);

    }
    else if(cmd="delete")
    {
    for(var i=0;i<n.length;i++)
    {
        if(name==n[i])
        {   
            n.splice(i,1)
            print("deleted")
        }
        
    }
    }
    
    

    reader.prompt();
})

//cli =>close

reader.on("close",function(){
    console.log("bye bye")
})