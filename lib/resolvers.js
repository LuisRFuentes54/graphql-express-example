const client = require('../database/connectiondb');
const BDCtrl = require('./controllers');

module.exports = {
    Query:{
        getPersons: async () => {
            return await BDCtrl.getPersons();
        },

        getPerson: async (root, args) => {
            return await BDCtrl.getPerson(args.id);
        },

        getCourses: async () => {
            return await BDCtrl.getCourses();
        },

        getCourse: async (root, args) => {
            return await BDCtrl.getCourse(args.id);
        },
    },
    Mutation:{
        createPerson: async (root, { input }) => {
            return await BDCtrl.createPerson(input);
        },

        createCourse: async (root, { input }) => {
            return await BDCtrl.createCourse(input);
        },

        updatePerson: async (root, args) => {
            return await BDCtrl.updatePerson(args.id,args.input);
        },

        updateCourse: async (root, args) => {
            return await BDCtrl.updateCourse(args.id,args.input);
        },

        deletePerson: async (root, args) => {
            return await BDCtrl.deletePerson(args.id);
        },

        deleteCourse: async (root, args) => {
            return await BDCtrl.deleteCourse(args.id);
        },
    }
}