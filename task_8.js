const http = require("http");

const users = [
    {
        id: 1,
        name: "Raman",
        age: 22
    },
    {
        id: 2,
        name: "Amit",
        age: 25
    },
    {
        id: 3,
        name: "Rahul",
        age: 24
    },
    {
        id: 4,
        name: "Sudhir",
        age: 28
    },
    {
        id: 5,
        name: "Ajay",
        age: 26
    }
];

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/users") {

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(users));
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});