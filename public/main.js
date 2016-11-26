var ipdelserver = "https://gowebtutorial-josheriff.c9users.io:8080/"; // ipserver in variable for changing in every server you want tu run

var socket = io.connect(ipdelserver,{'forceNew':true}); // declares de socket var necessary to stablish a connection later

socket.on('count', function (data){   // make the connection and read the "count" event (first one is 0, later will change from front to back and front again)
    console.log(data);
        document.getElementById('conteo').innerHTML = data; // put the count value from back visible in the front
    
});






function addcount(){
     socket.emit('newcount',parseInt(document.getElementById('conteo').innerHTML) + 1) ; //add +1 to the count variable from the front and send to the back
     return false; //prevent infinite sends
}    
    
function lesscount(){
     socket.emit('newcount',parseInt(document.getElementById('conteo').innerHTML) - 1) ; // -1 to the count variable from front (html) and send to the back
     return false; // prevent infinite sends
}     

function putzero(){
    
    var response = confirm("This will put the counter to 0, ARE YOU SURE?");
    if (response == true) {
      socket.emit('newcount', 0) ; // puts count to 0, and send the value to the back (in back count=0)
      return false; // prevent infinite sends
   } 
     
}   
