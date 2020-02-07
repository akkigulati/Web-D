const axios = require("../node_modules/axios");

module.exports=async function(location){

    //calling api to get id of user-specified location

const response=await axios.get("https://www.metaweather.com/api/location/search/?query="+location);
var id=response.data[0]["woeid"]

//console.log(id);
//calling api to get raw data of location
const anotherResponse=await axios.get("https://www.metaweather.com/api/location/"+id+"/");
const weather=anotherResponse.data.consolidated_weather
return weather
}