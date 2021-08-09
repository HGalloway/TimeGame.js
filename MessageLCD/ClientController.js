const Socket = io('http://localhost:8080');

document.getElementById('SendButton').onclick = () => {
  Socket.send(document.getElementById("Message").value);
}

Socket.on('message', (message) => {
  console.log(message);
})

document.addEventListener("keydown", function(event) {
  if (event.code === 'Enter') {
    Socket.send(document.getElementById("Message").value);
  }
});