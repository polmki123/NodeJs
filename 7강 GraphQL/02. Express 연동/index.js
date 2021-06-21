const express = require('express');
const { graphqlHTTP } = require ('express-graphql');
const { buildSchema } = require('graphql');

const schema = buildSchema(`
  type Query {
    hello: String,
    nodejs: Int
  }
`);

const root = { 
    hello: () => 'Hello world!' ,
    nodejs: () => 20 ,
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

