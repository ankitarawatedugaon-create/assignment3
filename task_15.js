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

            // Validation
            if (!user.name || user.age === undefined) {

                res.statusCode = 400;

                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    message: "Name and age are required"
                }));

                return;
            }

            // Generate ID
            const newUser = {
                id: users.length + 1,
                name: user.name,
                age: user.age
            };

            // Add user
            users.push(newUser);

            // Response
            res.statusCode = 201;

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