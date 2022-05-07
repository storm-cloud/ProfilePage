var newname = document.querySelector("#yourname");
var requests = 2;
var connections = 4;

function editName(){
    yourname.innerText = "Not Crowley";

}

function addConnection(){
    connections++;
    requests--; 
    connum.innerText = connections; 
    reqnum.innerText = requests;
    document.getElementById("req1").style.display = 'none'
}

function remRequest(){
    requests--; 
    reqnum.innerText = requests; 
    document.getElementById("req1").style.display = 'none'
}

function addConnection2(){
    connections++;
    requests--; 
    connum.innerText = connections; 
    reqnum.innerText = requests;
    document.getElementById("req2").style.display = 'none'
}

function remRequest2(){
    requests--; 
    reqnum.innerText = requests; 
    document.getElementById("req2").style.display = 'none'
}