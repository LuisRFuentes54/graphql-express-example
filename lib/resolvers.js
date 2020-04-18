const courses = [
    {
        _id: "1",
        tittle: "Mi titulo",
        teacher: "Profesor",
        description: "Whatever",
        topic: "GraphQL"
    },
    {
        _id: "2",
        tittle: "Mi titulo",
        teacher: "Profesor",
        description: "Whatever",
        topic: "GraphQL"
    },
    {
        _id: "3",
        tittle: "Mi titulo",
        teacher: "Profesor",
        description: "Whatever",
        topic: "GraphQL"
    }
]

module.exports = {
    getCourses: () => {
        return courses;
    }
}