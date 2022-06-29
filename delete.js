const dbconnect = require ('./mongo');

const deleteData=async () =>{     // using node js delete data with mongodb
    const db=await dbconnect();
    const result = await db.deleteOne({name:'nokia'})         

    console.log(result)
}
deleteData ();