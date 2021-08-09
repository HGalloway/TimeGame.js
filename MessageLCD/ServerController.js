const http = require('http').createServer();
const io = require('socket.io')(http, {
  cors: { origin: "*"}
});

var lcd = null;
var five = require("johnny-five");
var board = new five.Board();
board.on('ready', () => {
  lcd = new five.LCD({controller: "PCF8574", cols: 16, rows: 2});
})

io.on('connection', (socket) => {
  socket.on('message', (message) =>{
      lcd.clear(); 
      lcd.print(message);
  });
})

http.listen(8080);