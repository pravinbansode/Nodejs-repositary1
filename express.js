const express = require ("express");

const app = express();

app.get('/',(req,resp)=>{

    resp.send(JSON.stringify({name:"Sam", email:"Sam@gmail.com",contact:9993322132,course:"MERN",date:"march"}));
    
    resp.end();
})

app.listen(3000);



