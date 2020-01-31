#!/usr/bin/env node
//npm init -y -->package.json
//bin{}

//rename the file
//shebang syntax
//makes global
// npm link

var ip1=process.argv[2]//single i/p
console.log(ip1)
var fs=require("fs")

//checking if foldername is undefined

if(ip1==undefined)
return

if(fs.existsSync(ip1)==true)//checking if folder exist or not(duplicate folder)
console.log("already exist")
else
fs.mkdirSync(ip1)
