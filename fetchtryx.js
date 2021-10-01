document.getElementById('button1').addEventListener('click',loadit);

function loadit(){
    fetch('https://randomuser.me/api/?results=500&nat=us%5C&inc=gender,name,email,age')
  .then(response => response.json())
  .then(data => console.log(data));
}

