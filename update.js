const dbconnect = require ('./mongo');

const update = async ()=>{     // using node js update data with mongodb
    const db=await dbconnect();
    const result = await db.updateOne(     // singal update use one --- multiple update use updateMany function
        {name:'nokia'},{              // two object consist 1st object name
            $set:{ name:'max pro 6', price:680 }    //2nd object jo data update karna he updated data
        }    
      
    );
    console.log(result)
}
update ();