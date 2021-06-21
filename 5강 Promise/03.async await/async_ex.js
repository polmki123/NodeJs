const models = require( './models');

async function getProducts( ){
    //await 이 가져오는것은 promise 객체이다. 
    const product1 = await models.Products.findByPk(1);
    const product3 = await models.Products.findByPk(3);

    // try catch를 사용하여 promise 확인 
    try {
    console.log(product1.dataValues.id);
    console.log(product3.dataValues.price);
    }
    catch(error){
   
    }

}

getProducts();