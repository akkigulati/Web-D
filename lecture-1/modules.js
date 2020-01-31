//os module => use
var os=require("os")
/*
//architecture
console.log(os.arch())
//specifications
console.log(os.cpus())

*/
//input
//var ip=process.argv.slice(2).join(" ")//multiple i/p
var ip1=process.argv[2]//single i/p
console.log(ip1)


//fs module=> crud file system

//mkdir

var fs=require("fs")

//checking if foldername is undefined

if(ip1==undefined)
return

if(fs.existsSync(ip1)==true)//checking if folder exist or not(duplicate folder)
console.log("already exist")
else
fs.mkdirSync(ip1)

//console.log("folder "+ip1+"created")