'use strict'

const { graphql, buildSchema } = require('graphql');
const express = require('express');
const gqlMiddleware = require("express-graphql");

//Iniciando la aplicación
const app = express();
const port = process.env.port || 4000;

//definiendo el esquema
const schema = buildSchema(`
    type Query {
        hello: String
    }
`)

//Configurar resolvers
const resolvers = {
    hello: () => {
        return 'Hola mundo';
    }
}

//Configurando el entorno
app.use('/api', gqlMiddleware({
    schema: schema,
    rootValue: resolvers,
    graphiql: true
}))

//Asignando el puerto
app.listen(port, () => {
    console.log("Server on port: ", port);
})