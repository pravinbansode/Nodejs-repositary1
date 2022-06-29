const dbconnect = require ('./mongo');

const insert = async ()=>{     // using node js insert data with mongodb
    const db=await dbconnect();
    const result = await db.insert(         // insert multiple data to use array inside object to stoe data
        [
        {name:'nokia',price:'550',catagory:'mobile'}, // singal data store use object directly.
        {name:'vivo',price:'650', catagory:'mobile'},
        {name:'mi', price:'370', catagory:'mobile'}
        ]
    );
    console.log(result)
}
insert ();