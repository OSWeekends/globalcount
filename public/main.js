var ipdelserver = "https://gowebtutorial-josheriff.c9users.io:8080/"; // ipserver in variable for changing in every server you want tu run

var socket = io.connect(ipdelserver); // declares de socket var necessary to stablish a connection later

socket.on('count', function (data){   // make the connection and read the "count" event (first one is 0, later will change from front to back and front again)
    console.log(data);
        document.getElementById('conteo').innerHTML = data; // put the count value from back visible in the front
    
});

var addListenToAdd = document.getElementById("add"); 
  addListenToAdd.addEventListener("click", function(){addcount()});

var addListenToLess = document.getElementById("less"); 
  addListenToLess.addEventListener("click", function(){lesscount()});

var addListenToZero = document.getElementById("zero"); 
  addListenToZero.addEventListener("click", function(){putzero()});


function addcount(){
     socket.emit('add');
     return false; //prevent infinite sends
}    
    
function lesscount(){
     socket.emit('less',parseInt(document.getElementById('conteo').innerHTML) - 1) ; // -1 to the count variable from front (html) and send to the back
     return false; // prevent infinite sends
}     

function putzero(){
    
    var response = confirm("This will put the counter to 0, ARE YOU SURE?");
    if (response == true) {
      socket.emit('zero') ; // puts count to 0, and send the value to the back (in back count=0)
      return false; // prevent infinite sends
   } 
     
}   
