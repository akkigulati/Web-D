const axios = require("../node_modules/axios");

module.exports= async function()
{
    const response=await axios.get("http://ip-api.com/json/");
   return response.data.city
    
}
