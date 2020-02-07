#!/usr/bin/env node
//to import anything
const help = require("./cmds/help")
const today = require("./cmds/today")
const forecast = require("./cmds/forecast")
const version= require("./cmds/version")
//cli args=> parse
const minimist=require("minimist")
const chalk=require("./node_modules/chalk")
const figlet=require("./node_modules/figlet")
//taking command and location from i/p
console.log(chalk.magenta(figlet.textSync("CLI WEATHER APPLICATION")))
const ip = process.argv.slice(2)
const parsedInput=minimist(ip)
var location = parsedInput.l||parsedInput.location

var cmd = parsedInput["_"][0]

if(parsedInput.help)
{
    cmd="help"
}
if(parsedInput.version)
{
    cmd="version"
}
//calling command according to user
if ((cmd == "today")) {
    today(location)
}
else if (cmd == "forecast") {

    forecast(location)
}
else if (cmd == "help") {

    help();
}
else if ((cmd == "version"||cmd=="--v")) {

    version();
}
else {

    console.log("invalid i/p")
}




