var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
	var myRandomElement = myArray.randomElement();
	console.log(myRandomElement);
}



io.on('connection', function(socket){
   console.log('richiesta di connessione dal client');
   console.log('a user connected');
   console.log('invio tutte le temperature');
   //db.collection('temperatures').find({},{sort:{t:-1}}).limit(150).toArray( function (err, result) {
   //socket.emit('temperatures', result.reverse());
   
   socket.emit('myRandomElement');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
    