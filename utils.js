const http = require('http');
const port = 3000;
const handler = (request, response) => {
   // console.log("welcome user")
    response.end("nowa stronaklkjlbhgfhgfhfjklkj47657658762");

};
const server = http.createServer(handler);
server.listen(port, (err) => {

    if (err) {
        console.log('server wrong');
    }
    console.log("fsdgdfghgjhgjjggdhghfjhgf");
});

console.log("fsdfs100000");