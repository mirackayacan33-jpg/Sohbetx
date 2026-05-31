const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// 🔥 HTML DOSYASINI GÖSTER
app.use(express.static("public"));

io.on("connection",(socket)=>{
console.log("Kullanıcı bağlandı");

socket.on("message",(data)=>{
io.emit("message",data);
});
});

server.listen(3000,()=>{
console.log("Server çalışıyor");
});
