// saving the xmlhttp to a var http

let http = new XMLHttpRequest();

// mydata to save the response of the api site and change it to JSON

let myData = [];

// box of data
let newsBox;

// opening connection with the api 


http.open('GET' ,`
https://jsonplaceholder.typicode.com/comments`);


// for sending request 

http.send()

// function to check if the fetched data is valid

function check () {

  if(http.readyState == 4 && http.status == 200 ) {


    myData = JSON.parse (http.response);
 
    display ()
  
  }
}


http.addEventListener('readystatechange' , check)

// functino display in html page 

function display () {
 

  for(let i = 0 ; i < myData.length ; i++) {
    
    newsBox += `<div class = 'container'>

    <div class = 'row'>

    <div class = 'col-md-6 border border-danger p-5'>

      <h5 class = 'bg-info h3 p-2 m-3 text-center text-white' >`+myData[i].email+`</h5>
      <p>`+myData[i].body+`<p>

    </div>


    <div class = 'col-md-6 border border-danger p-5 '>
    
    <h5 class = 'bg-info h3 p-2 m-3 text-center text-white' >`+myData[i].email+`</h5>
      <p>`+myData[i].body+`<p>

    </div>
    

    
    
    </div>
      
    </div>`

  }
  document.getElementById('new').innerHTML = newsBox;
}












    

