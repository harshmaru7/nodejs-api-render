// importing required modules
document.getElementById('button1').addEventListener('click',loaddata);

function loaddata(){
var https = require('https');

https.get('https://randomuser.me/api/?results=500&nat=us%5C&inc=gender,name,email,age',(resp)=>{
    let data = '';

    resp.on('data',(chunk)=>{
        data += chunk;
    });

    resp.on('end',()=>{
        console.log(JSON.parse(data));

    });

}).on("error", (err)=>{
    console.log("Error: " + err.message);
});
}
// http.createServer(function(request,response){

//     // response.writeHead(200, {'Content-Type':'text/plain'});
//     const api_url = '';
//     response = await fetch(api_url);
//     const json = await response.json();
//     console.log(json);
//     response.end('Hello World this is harsh !@@\n');
// }).listen(8081);

console.log("IT WORKS!");