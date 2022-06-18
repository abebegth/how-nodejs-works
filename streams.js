const fs = require("fs");
const server = require("http").createServer();

// Problem / Usecase
// We need to read a large text file from the file system and send it to the client.

server.on("request", (req, res) =>{
    // Solution 1: Standard file reading
    // fs.readFile("text-file.txt", (err, data) =>{
    //     if(err) console.log(err);
    //     res.end(data);
    // });

    // Solution 2: Streams
    // But, reading is much faster than writing. so, this approach may overwhelm the server ==> Back pressure

    // const readable = fs.createReadStream("text-file.txt");
    // readable.on("data", chunk =>{
    //     res.write(chunk);
    // });
    // readable.on("end", () =>{
    //     res.end();
    // });
    // readable.on('error', err =>{
    //     console.log(err);
    //     res.statusCode = 500;
    //     res.end("File not found!");
    // });

    // Solution 3: Using pipe() to solve the back pressure problem
    const readable = fs.createReadStream("text-file.txt");
    readable.pipe(res); // readableSource.pipe(writableDestination)
});

server.listen(8000, "127.0.0.1", ()=>{
    console.log("Listening...")
})