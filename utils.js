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
<<<<<<< HEAD
    console.log("fsdgdfghgjhgjjggdhghfjhgf");
});

console.log("wpis z main");
=======
    console.log("fsdgdfgdf");
});


console.log("zmiana w nowa z githuba");
>>>>>>> nowa
