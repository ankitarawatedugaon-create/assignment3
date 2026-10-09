const http = require("http");

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.end("Welcome to Home Page");
    }

    else if (req.method === "GET" && req.url === "/users") {
        res.end("Users Page");
    }

    else if (req.method === "GET" && req.url === "/products") {
        res.end("Products Page");
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});