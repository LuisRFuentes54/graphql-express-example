const client = require('../database/connectiondb');
const personCtrl = {};

personCtrl.getPersons = async () => {
    try {
        const persons = await client.query("SELECT clave AS id, nombre AS name, apellido AS lastname FROM Persona");
        return persons.rows;
    } catch (error) {
        console.log(error);
    }
}

personCtrl.getPerson = async (id) => {
    try {
        const person = await client.query(`SELECT clave AS id, nombre AS name, apellido AS lastname FROM Persona WHERE clave = ${id}`);
        return person.rows[0];
    } catch (error) {
        console.log(error);
    }
}

personCtrl.createPerson = async (input) => {
    try {
        const person = await client.query(`INSERT INTO Persona (nombre,apellido) VALUES ('${input.name}','${input.lastname}') RETURNING clave, nombre, apellido`);
        let insertedPerson = {
            id : person.rows[0].clave,
            name : person.rows[0].nombre,
            lastname : person.rows[0].apellido
        }
        return insertedPerson;
    } catch (error) {
        console.log(error);
    }
}

module.exports = personCtrl;