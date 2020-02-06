//https://www.metaweather.com/api/location/search/?query=san
//https://www.metaweather.com/api/location/44418/
const axios=require("axios")

async function helper(){
    //make a http request to a server
    var ip=process.argv.slice(2) 
const response=await axios.get("https://www.metaweather.com/api/location/search/?query="+ip[1]);

console.log(response.data)
//another response
var id=response.data[0]["woeid"]
//console.log(id);
const anotherResponse=await axios.get("https://www.metaweather.com/api/location/"+id+"/");
const weather=anotherResponse.data.consolidated_weather[0]
const state=weather.weather_state_name
const temp=weather.the_temp
console.log(`WEATHER IN ${ip[1]}:
CURRENT STATE: ${state } & TEMP: ${ temp}   `)

}

helper();