const getRawWeather = require("../utilities/getRawWeather");
const loc=require("../utilities/getLocation")
const ora=require("ora")

module.exports=async function(location){
//calling getrawweather func to get data then filtering it
if(location==undefined)
    {
        location=await loc()
    }
    const spinner=ora("LOADING PLEASE WAIT......");
    spinner.start()
    const fullweather= await getRawWeather(location)
    console.log("FORECAST FOR "+location+":")
    spinner.stop();
    for(var i=0;i<6;i++)
   {
       const date=fullweather[i].applicable_date
       const state=fullweather[i].weather_state_name
       const low=Math.ceil(fullweather[i].min_temp)
       const high=Math.ceil(fullweather[i].max_temp)
       console.log(`DATE:${date}||LOW TEMP :${low}||HIGH TEMP :${high}||STATE :${state}`)
} 
   
    
    
    

}