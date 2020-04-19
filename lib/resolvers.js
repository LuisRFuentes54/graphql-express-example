const client = require('../database/connectiondb');

module.exports = {
    Query:{
        getPersons: async () => {
            return await (await client.query("SELECT clave AS id, nombre AS name, apellido AS lastname FROM Persona")).rows
        },

        getPerson: async (root, args) => {
            return await(await client.query(`SELECT clave AS id, nombre AS name, apellido AS lastname 
                                       FROM Persona
                                       WHERE clave = ${args.id}`)).rows[0]
        }
    }
}