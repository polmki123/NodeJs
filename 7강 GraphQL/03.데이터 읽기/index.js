
const express = require('express');
const { graphqlHTTP } = require ('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`

    type Product {
        id : ID!
        name : String
        price : Int
        description : String
    }
    type Query {
        getProduct( id : ID! ) : Product
    }
    
`);

const products = [{
    id : 1,
    name : '첫번째 제품',
    price : 2000,
    description : '히히히히'
},{
    id : 2,
    name : '두번째 제품',
    price : 4000,
    description : '히히히히'
}]
const root = { 
    getProduct : ({ id }) => products.find ( product => product.id == parseInt(id) )
};

class APP {
    constructor () {
        this.app = express();
        this.use_graphql();
    }
    use_graphql(){
        this.app.use( '/graphql', graphqlHTTP ({
            schema : schema,
            rootValue : root,
            graphiql : true, //gui 제공하여 query를 짜도록 
        }));
    }
}

const app = new APP().app;
app.listen( 4000, () => {
    console.log('running server port 4000');
})