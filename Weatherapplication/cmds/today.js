const getRawWeather = require("../utilities/getRawWeather");
const loc=require("../utilities/getLocation")
const ora=require("ora")
const spinner=ora("LOADING PLEASE WAIT.......")
module.exports=async function(location){
    spinner.start();
    if(location==undefined)
    {
        location=await loc()
    }
    const fullweather= await getRawWeather(location)
    
    spinner.stop()

    const state=fullweather[0].weather_state_name
    const temp=fullweather[0].the_temp
    console.log(`WEATHER IN ${location}:
    CURRENT STATE: ${state } & TEMP: ${ temp}   `)
    
    
    

}