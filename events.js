const EventEmitter = require("events");
const http = require("http");

// const myEmitter = new EventEmitter();

class Sales extends EventEmitter {
    constructor() {
        super();
    }
}

const myEmitter = new Sales();

// a listener for 'newSale' event as if we click a 'newSale' button.
// it is also an observer ... observer pattern. It observes / listens until it is emitted
myEmitter.on("newSale", ()=>{
    console.log("There was a new sale@");
});

myEmitter.on("newSale", ()=>{
    console.log("Customer Name: Jonas");
});

// an event listener with an argument.
myEmitter.on("newSale", stock =>{
    console.log(`There are ${stock} items left in stock`);
})

// emitting an event called 'newSale'
myEmitter.emit("newSale", 9);


///////////////////////////////////

const server = http.createServer();

server.on("request", (req, res)=>{
    console.log("Request Recieved");
    res.end("Request recieved");
})
server.on("request", (req, res)=>{
    console.log("Another Request 😇");
})
server.on("close", ()=>{
    console.log("Server closed");
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Waiting for request ...")
})