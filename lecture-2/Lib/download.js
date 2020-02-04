const service=require("./services")

console.log("Request has been send");

service.downloadFile("g-drive/img.jpeg",downloaded)
function downloaded(imgpath)
{
    console.log("img downloded to:",imgpath)
  //  service.compressFile(imgpath)
    //service.uploadFile(cImgpath)
}
console.log("waiting for respose")