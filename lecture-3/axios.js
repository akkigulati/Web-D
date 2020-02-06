// request =>promise based library(axios)
const axios=require("axios")

async function helper(){
    //make a http request to a server
const response=await axios.get("https://jsonplaceholder.typicode.com/users");
//your requestedinfo(data) will be inside data key
console.log(response.data);
}

helper();