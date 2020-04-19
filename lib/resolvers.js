const client = require('../database/connectiondb');
const personCtrl = require('./controllers');

module.exports = {
    Query:{
        getPersons: async () => {
            return await personCtrl.getPersons();
        },

        getPerson: async (root, args) => {
            return await personCtrl.getPerson(args.id);
        }
    },
    Mutation:{
        createPerson: async (root, { input }) => {
            return await personCtrl.createPerson(input);
        }
    }
}