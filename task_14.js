const http = require("http");

const users = [];

const server = http.createServer((req, res) => {

    if (req.method === "POST" && req.url === "/users") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            const user = JSON.parse(body);

            const newUser = {
                id: users.length + 1,
                name: user.name,
                age: user.age
            };

            users.push(newUser);

            res.setHeader("Content-Type", "application/json");

            res.end(JSON.stringify(newUser));
        });
    }

    else {
        res.statusCode = 404;
        res.end("404 - Page Not Found");
    }

});

server.listen(8000, () => {
    console.log("Server started on port 8000");
});