const print=console.log
const chalk=require("chalk")
const figlet=require("figlet")
print(chalk.green("green"))
print(chalk.yellow("yellow"))
print(chalk.blue("blue"))
print(chalk.cyan(figlet.textSync("cyan")))