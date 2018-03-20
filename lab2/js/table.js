"use strict"

function getWokers(){
    
    debugger;
    let func = function(response) {
         addTable(response);
            };
    GetAll(func);
}

function showWokers(workers){
    
    let array = [...workers];
    addTable(workers);
}

function DeleteCard(id){
    var func = function() {
           
            var myTableDiv = document.getElementById("content");
                myTableDiv.innerHTML = "";
                getWokers();
            };
    Delete(id, func);
}

 function addTable(stock) {
    var myTableDiv = document.getElementById("content")
    for (let i = 0; i < stock.length; i++) {
        let tr = document.createElement('TR');
        let lastKey;
        for (let key in stock[i]) {
            let td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
            lastKey = key;
        }

        let div = document.createElement('div');
        let link = document.createElement("a");
        let linkText = document.createTextNode("Edit ");
        let link2 = document.createElement("a");
        let linkText2 = document.createTextNode(" Delete");
        let link3 = document.createElement("a");
        let linkText3 = document.createTextNode("Info");
        link.title = "Edit";
        link.href = `create.html?id=${stock[i][lastKey]}` ;
        link2.href = `javascript:DeleteCard(${stock[i][lastKey]});`;
        link2.title = "Delete";
        link3.href = `update.html?id=${stock[i][lastKey]}`;
        link3.title = "Info";

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        link3.appendChild(linkText3);
        div.appendChild(link);
        div.appendChild(link2);
        div.appendChild(link3);
        tr.appendChild(div);
        myTableDiv.appendChild(tr);
    }
    
}
