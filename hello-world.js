var fs = require("fs");
const generator = require("generate-password");

console.log("HELLO WORLD");
// file creation
fs.appendFile("welcome.txt", "hello node!", function (err) {
  if (err) throw err;
  console.log("saved");
});
// password generate
var password = generator.generate({
  length: 6,
  numbers: true,
});

// 'uEyMTw32v9'
console.log(password);
// read file

fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

// node sever
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;
// node server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("<h1>Hello World</h1>");
});

server.listen(port, hostname, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running at http://${hostname}:${port}/`);
});
