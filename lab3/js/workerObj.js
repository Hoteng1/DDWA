'use strict'

onmessage = function(e) {
  let offset = e.data
  setTimeout(getCount, offset)
}

function getCount(){
  let func = function(response){
     postMessage(response.length)
  }
	GetAll(func)
}

const url = "http://localhost:3000/posts/";
async function GetAll(func){
  fetch(url)
    .then(function(response) { return response.json(); })
    .then(func);
}
