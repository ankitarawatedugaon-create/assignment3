const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/user") {

        const user = {
            id: 1,
            name: "Raman",
            age: 22
        };

        res.setHeader("Content-Type", "application/json");

        res.end(JSON.stringify(user));
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});