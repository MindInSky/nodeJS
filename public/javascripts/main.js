var socket = io();

const messageList = document.getElementById("messageList");

socket.on("chat message", function(msg) {
  let li = document.createElement("li");
  li.setAttribute("class", "card text-primary row");
  li.innerHTML = `<div class="row">
  <img class="card" src=${user.img} style="width:30px;height:30px">
  <b>${user.name}: </b>
  <span class="text-secondary"> ${msg}</span></div>`;
  messageList.appendChild(li);
});
