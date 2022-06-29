const dbconnect = require("./mongo");

dbconnect().then((resp)=>{                    //this code same as below code wrking
    resp.find().toArray().then((data)=>{
        console.warn(data)
    })
})



// const main = async ()=>{                  // same as code more preprance this
//     let data = await dbconnect ();
//      data await data.find().toArray();
//     console.warn(data);
// }

// main();