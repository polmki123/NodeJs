
const express = require('express');
const { graphqlHTTP } = require ('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`

    input ProductInput {
        name : String
        price : Int
        description : String
    }

    type Product {
        id : ID!
        name : String
        price : Int
        description : String
    }

    type Query {
        getProduct( id : ID! ) : Product
    }
    type Mutation {
        addProduct ( input : ProductInput ) : Product
        updateProduct( id : ID!, input : ProductInput! ) : Product
        deleteProduct( id : ID! ) : String 
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
    getProduct : ({ id }) => products.find ( product => product.id == parseInt(id) ),
    addProduct : ({ input }) => {
        input.id = parseInt(products.length + 1);
        products.push(input);
        return root.getProduct( {id : input.id})
    },
    updateProduct : ( { id, input} ) => {
        // == 연산자는 작업자가 원치 않는 강제 형변환을 실행하고 그것이 다른 언어의 ==연산자와는 차이가 있는 동작이므로 ==를 ===로 컴파일한다는 것이다.
        const index = products.findIndex( product => product.id === parseInt(id) )
        products[index] = {
            id : parseInt(id),
            ...input //operating 연산자 
        }
        return products[index];
    },
    deleteProduct : ( {id} ) => {
        const index = products.findIndex( product => product.id === parseInt(id) )
        products.splice( index , 1 )
        return "remove success"
    }
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