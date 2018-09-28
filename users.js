module.exports = function(io) {
  io.on("connection", function(socket) {
    console.log("a user connected");
    socket.on("chat message", function(msg) {
      console.log("message: " + msg);
      io.emit("chat message", msg);
    });
  });
};

// for later
/*
var users = {};
var messages = [];
io.on("connection", function(socket) {
 // create user
 if(!users.hasOwnProperty(socket.id)){
   users.[socket.id]={}
 }
 socket.emit('new connection',{
   if:socket.id,
   messages:messages
 });
 socket.on('chat-message',function(message)){
   console.log('message received on backend: ', message);
   messages.push(message);
   io.emit('chat-message',message)
 }
});
*/
