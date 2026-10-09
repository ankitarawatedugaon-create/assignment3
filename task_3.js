const http = require("http");

const server = http.createServer((req, res) => {

    if (req.url === "/") {
        res.end("Welcome to Home Page");
    }

    else if (req.url === "/about") {
        res.end("Welcome to About Page");
    }

    else if (req.url === "/contact") {
        res.end("Welcome to Contact Page");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});