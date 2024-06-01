require("./config/db");
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const path = require("path");
const routes = require("./routes");
const http = require("http");
const app = express();
const { Server } = require("socket.io"); // Add this
const server = http.createServer(app); // Add this
const port = process.env.PORT || 5080;
const {
  addOnlineUser,
  disConnectUser,
  getOnlineUser,
  sendMessage,
} = require("./domains/sochet");

app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(routes);
app.use(express.static(path.join(__dirname, "/upload/images")));

app.get("/", async (req, res) => {
  res.sendFile(path.resolve("./src/index.html"));
});

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);
  addOnlineUser(socket, io);
  getOnlineUser(socket, io);
  sendMessage(socket, io);
  getOnlineUser(socket, io);
  disConnectUser(socket, io);
});

const startServer = () => {
  server.listen(port, () => {
    console.log(`server running on port ${port}`);
  });
};
startServer();

module.exports = app;
