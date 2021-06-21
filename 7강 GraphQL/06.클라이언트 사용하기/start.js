const { graphql, buildSchema } = require('graphql');

// Int, float String, Boolean
const schema = buildSchema(`
  type Query{
    hello : String,
    nodejs : Int,
    Product : String,
  }
`);

const root = {
  hello : () => 'hello world',
  nodejs : () => 20
}

graphql(  schema, '{ nodejs }', root ).then( ( response) => {
  console.log(response);
} )

// const schema = buildSchema(`
//   type Query {
//     hello: String,
//     nodejs: Int
//   }
// `);

// const root = { 
//     hello: () => 'Hello world!' ,
//     nodejs: () => 20 ,
// };

// graphql(schema, '{ nodejs }', root).then((response) => {
//   console.log(response);
// });