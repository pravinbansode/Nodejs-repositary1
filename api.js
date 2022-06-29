
// Why is it called API?
// API stands for Application Programming Interface. It can be defined as a set of protocols,
//  procedures, and tools that allow interaction between two applications. It is the software 
//  intermediary that delivers a request to the server and then relays a response back to the
//   client.
// -------------------------------------------------------------
//api method- more no of method can be consist but widely use this method.?
// post api- use new data insert in database using api.
// get api method - use data read in database using api.
// put api method - use data update in database using api.
// delete api method - use to delete data in database using api.

// ---------------------------------------------------------------------------
const express = require ('express');
const dbconnect = require ('./mongo');
const mongodb = require('mongodb');
const app = express();

app.use(express.json);   // use data from postaman at time put method use this syntax

app.get('/',async(req,resp)=>{            // get method use
    let data = await dbconnect();
    data = await data.find().toArray();
    
    resp.send(data);
  
});

app.post('/',(req,resp)=>{
    console.log(req.body)
    resp.send({name:'pravin', age:24})
})

app.put("/:name",async(req,resp)=> {
    const data = await dbconnect();
    let result = data.updateOne(
        {name:req.params.name },
        {$sent: req.body }
    )
    resp.send({ status: "updated"})
})

app.delete("/:id",async(req,resp)=>{
    console.log(req.params.id)
    const data = await dbconnect();
    const result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    resp.send(result)
})

app.listen(5000);