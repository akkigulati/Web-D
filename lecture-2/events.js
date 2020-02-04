const events=require("events")
const eventEmitter=new events()

//server side

eventEmitter.on("login",function(email,password){

    if(email=="gulati.a12@gmail.com"&&password==12345)
    console.log("wassssuuup bro")
    else
    console.log("bhag")

});

//email =>abc@admin.com //multipe eventEmitter.on

eventEmitter.on("login",function(email,password){

    if(email=="abc@admin.com"&&password==1234)
    console.log("baap agya")
    else
    console.log("not admin")

});

// client
eventEmitter.emit("login","gulati.a12@gmail.com",12345)
console.log("''''''''''''''''''''''''''''''''''")
eventEmitter.emit("login","abc@admin.com",1234)