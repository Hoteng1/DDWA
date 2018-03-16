"use strict"

function getWokers(){
    var func = function() {
            if (this.readyState == 4 && this.status == 200) {
               var obj = JSON.parse(this.responseText);
               addTable(obj);
            };};
    GetAll(func);
}

function DeleteCard(id){
    var func = function() {
            if (this.readyState == 4 && this.status == 200) {
            var myTableDiv = document.getElementById("list");
                myTableDiv.innerHTML = "";
                getWokers();
            }};
    Delete(id, func);
}

 function addTable(stock) {
    var myTableDiv = document.getElementById("list")
    var table = document.createElement('TABLE')
    var tableBody = document.createElement('TBODY')
    table.border = '1px'
    table.appendChild(tableBody);

    var heading = new Array();
    heading[0] = "FIO"
    heading[1] = "age"
    heading[2] = "special"
    heading[3] = "sex"
    heading[4] = "salary"
    heading[5] = "company"
    heading[6] = "experience"
    heading[7] = "office/position"
    heading[8] = "Id"
    heading[9] = "Actions"

    var tr = document.createElement('TR');
    tableBody.appendChild(tr);
    for (var i = 0; i < heading.length; i++) {
        var th = document.createElement('TH')
        th.appendChild(document.createTextNode(heading[i]));
        tr.appendChild(th);
    }

    for (var i = 0; i < stock.length; i++) {
        var tr = document.createElement('TR');
        for (var key in stock[i]) {
            var td = document.createElement('TD')
            td.width = "120";
            td.appendChild(document.createTextNode(stock[i][key]));
            tr.appendChild(td);
        }

        var div = document.createElement('div');
        var link = document.createElement("a");
        var linkText = document.createTextNode("Edit ");
        var link2 = document.createElement("a");
        var linkText2 = document.createTextNode(" Delete");
        var link3 = document.createElement("a");
        var linkText3 = document.createTextNode("Info");
        link.title = "Edit";
        link.href = "2.html?id=" + stock[i][key] ;
        link2.href = "javascript:DeleteCard("+ stock[i][key] + ");";
        link2.title = "Delete";
        link3.href = "3.html?id=" + stock[i][key] ;
        link3.title = "Info";

        link.appendChild(linkText);
        link2.appendChild(linkText2);
        link3.appendChild(linkText3);
        div.appendChild(link);
        div.appendChild(link2);
        div.appendChild(link3);
        tr.appendChild(div);
        tableBody.appendChild(tr);
    }
    myTableDiv.appendChild(table)
}
