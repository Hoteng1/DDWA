"use strict"
let firstType = []
let secondType = []

function getWokers(){
    
    debugger;
    let func = function(response) {
        divide(response, firstType, secondType)
        addTable(firstType, "contentIndu")
        addTable(secondType, "contentTran")
            };
    GetAll(func);
}

function showWokers(workers){
    divide(workers)

    addTable(firstType, "contentIndu")
    addTable(secondType, "contentTran")
    
}

function divide(stock){
	firstType = []
	secondType = []
    for (let i = 0; i < stock.length; i++) {
            for (let key in stock[i]) {
                    if(key=="office"){
                        firstType.push(stock[i])
                        break
                    }
                    if(key=="position"){
                        secondType.push(stock[i])
                        break
                    }
                }
            }
}

function DeleteCard(id){
    let func = function() {
        getPlants();
     };
    Delete(id, func);

}

 function addTable(stock,tableName) {
    let myTableDiv = document.getElementById(tableName);
	myTableDiv.innerHTML = "";
    for (let i = 0; i < stock.length; i++) {
        let tr = document.createElement('TR');
        let lastKey;
        let td
        for (let key in stock[i]) {
            td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
            lastKey = key;
        }

      



        td = document.createElement('TD')
        td.width = "100%"
        
        td.className = "btn-group-justified"
        let link = document.createElement("a");
        link.className ="btn btn-primary"
        let linkText = document.createTextNode("Edit");
        let link2 = document.createElement("a");
        link2.className ="btn btn-primary"
        let linkText2 = document.createTextNode(" Del");
        let link3 = document.createElement("a");
        link3.className ="btn btn-primary"
        let linkText3 = document.createTextNode(" Open");
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
