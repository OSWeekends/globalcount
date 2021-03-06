var express = require ('express');         // Declarando las
var app = express();                       //    dependencias
var server = require('http').Server(app);  //
var io = require('socket.io')(server);     //
var port = process.env.PORT || 3000;

//var ipdelserver = "https://gowebtutorial-josheriff.c9users.io/"; // server address as variable
                                                                 // for re-use in different servers
var count = 0 ; // the most important variable of the app, future create object for different counters

app.use(express.static('public')); // access to the front from express

/*app.get('/',function(req,res){
    res.status(200).send('Hola mundo!, probando nodemon');
});*/                                                     // Validating my steps no needed anymore



io.on('connection',function(socket){  // all the websocket logic from server, inside this function
    console.log('Cliente conectado'); // just for know how many connections
    socket.emit('count',count);       // send first count (=0) to the front
    socket.on('add',function (){ // this (data) came from server and will change count
    io.sockets.emit('count',++count);                             // if came from + button its count++ if came from less count-- if putzero count=0
});
    socket.on('less',function (){ // this (data) came from server and will change count
    io.sockets.emit('count',--count);                             // if came from + button its count++ if came from less count-- if putzero count=0
});
    socket.on('zero',function (){ // this (data) came from server and will change count
    count = 0;
    io.sockets.emit('count',0);                             // if came from + button its count++ if came from less count-- if putzero count=0
});
});



server.listen(port, function(){                      //
    console.log("Servidor corriendo en", port); //  Tell us the server is running and the ip
});
