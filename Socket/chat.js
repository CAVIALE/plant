var app = require('express')();
const log=require('morgan');
const path=require('path');
const server = require('http').createServer(app);
var http = require('http').server;
var io = require('socket.io')(server);

app.use(log('dev'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});


 var VittorioMiManchi = 10;
console.log(VittorioMiManchi);


io.on('connection', function(socket){
   console.log('richiesta di connessione dal client');
   console.log('a user connected');
   console.log('invio tutte le temperature');
   socket.emit('temp1', '23.1');
   socket.emit('temp2', '27.3');
   //db.collection('temperatures').find({},{sort:{t:-1}}).limit(150).toArray( function (err, result) {
   //socket.emit('temperatures', result.reverse());
   
   });

server.listen(3000, function(){
  console.log('listening on *:3000');
});
    