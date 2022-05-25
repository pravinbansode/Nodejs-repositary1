// const http = require("http");

// http.createServer(function(request, response){
//     response.write("Hello");
//     response.end();
// }).listen(3000)

const http =require ("http");
const datacontrol =(req,resp)=>
{
  const user = {name:"sam",age:24}
  resp.write("<h1>Hello ,This is Sam </h1>");
  resp.write(JSON.stringify({name:"sam",age:24,email:"sam@gmail.com"}));
  resp.end();
}
 http.createServer(datacontrol).listen(9000);
