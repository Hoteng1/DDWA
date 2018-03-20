"use strict"

const url = "http://localhost:3000/posts/";
async function Get(id, func){
  let responseJSON = await fetch(url + id)
  let response = await responseJSON.json()
  return await func(response)
}

async function GetAll(func){
  let responseJSON = await fetch(url)
  let response = await responseJSON.json()
  return await func(response)
}

async function Delete(id, func){
  if(confirm("Delete of Worker?")){
    let options = {method:'Delete'}
    let response = await fetch(url + id, options)
    return await func(response)
	func()
  }
}

async function Post(data, func){
  let options = {
    method:'Post',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(data)
  }
  let response = fetch(url, options)
  return await func(response)
}

async function Put(id, data){
  let options = {
    method:'Put',
    headers:{'Content-Type': 'application/json'},
    body:JSON.stringify(data)
  }
  return await fetch(url+id, options)
}