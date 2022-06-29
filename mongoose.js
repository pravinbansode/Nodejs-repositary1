const mongoose = require('mongoose');         //CURD opration of mongoose

    mongoose.connect('mongodb://localhost:27017/e-comm');
    const productsSchema = new mongoose.Schema({        //mongose schema connnect
        name:String,
        price:Number,
        catagory:String

    });

    const savedb = async () => {
        const products = mongoose.model('product',productsSchema);
        let data = new products ({ name:'vivo',price:650,catagory:'mobile'})
        const result = await data.save();
        console.log(result);

    }
 
    const updatedb = async () => {
        const products = mongoose.model('products',productsSchema);
        let data = await products.updateOne (
            { name:'vivo',price:650,},
            {
               $set: {name:'Jio',price:750}
            }
        )
      
        console.log(data);
   }


   const deletedb = async () => {
    const products = mongoose.model('product',productsSchema);
    let data = await products.deleteOne ({ name:'vivo'})
    console.log(data);

   }
 

   const finddb = async () => {
    const products = mongoose.model('product',productsSchema);
    let data = await products.find ()
    console.log(data);

   }
   finddb();