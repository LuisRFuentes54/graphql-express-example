'use strict'

const { graphql, buildSchema } = require('graphql');

//definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
        saludo: String
    }
`)

//Configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo';
    },
    saludo: () => {
        return "Ola k ace :v"
    }
}

//Ejecutar el query hello
graphql(schema, '{ saludo }', resolvers)
    .then((data) => {
        console.log(data);
    });