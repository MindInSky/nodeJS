var socket = io();

const messageList = document.getElementById("messageList");

socket.on("chat message", function(msg) {
  let li = document.createElement("li");
  li.innerText = msg;
  messageList.appendChild(li);
});
