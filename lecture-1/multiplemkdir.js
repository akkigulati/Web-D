var fs=require("fs")

var ip1=process.argv[2]//single i/p
console.log(ip1)

//checking if foldername is undefined
/*for(var i=1;i<=50;i++)
{var f=ip1+i

if((fs.existsSync(f)==true)||(f==undefined))//checking if folder exist or not(duplicate folder)
console.log("already exist")
else
fs.mkdirSync(f)   
}*/


//rmdir to delete
for(var i=1;i<=50;i++)
{var f=ip1+i

if((fs.existsSync(f)==false)||(f==undefined))//checking if folder exist or not(duplicate folder)
console.log("already exist")
else
fs.rmdirSync(f)   
}
