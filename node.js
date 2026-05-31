const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req,res)=>{
res.send("SohbetX Server Çalışıyor");
});

io.on("connection",(socket)=>{
console.log("Kullanıcı bağlandı");

socket.on("message",(data)=>{
io.emit("message",data);
});
});

server.listen(3000,()=>{
console.log("Server çalışıyor");
});
