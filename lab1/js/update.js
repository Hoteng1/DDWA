"use strict"

    var FIO = document.getElementById("exampleInputFIO");
    var age = document.getElementById("exampleInputAge");
    var special = document.getElementById("exampleInputSpecial");
    var sex = document.getElementById("optionsRadios");
    var salary = document.getElementById("exampleInputSalary");
    var company = document.getElementById("exampleInputCompany");
    var experience = document.getElementById("exampleInputExperience");
    var office = document.getElementById("exampleInputOffice");
    var position = document.getElementById("exampleInputPosition");
    var id = getParam("id");
    var selectedValue = document.getElementById("exampleFormControlType");

function Save(type){
  var worker = PlantFromForm(type);
  if(id!=null) Put(id,worker);
  else Post(worker);
}

function WorkerFromForm(type){
  if(type == '0'){
      var worker = new WorkerIndustrialInc(experience.value, office.value);

  }
  else{
      var worker = new WorkerTransportInc(experience.value, position.value);
  }
  worker.setFIO(FIO.value);
  worker.setAge(age.value);
  worker.setSpecial(special.value);
  debugger;
  worker.setSex(sex.value);
  worker.setSalary(salary.value);
  worker.setCompany(company.value);
  return worker;
}

function FormFromClass(worker, type){
  if(type == '0'){
      experience.value = worker.getExperience();
      office.value = worker.getOffice();
  }
  else{
      experience.value = worker.getExperience();
      position.value = worker.getPosition();
  }

  selectedValue.selectedIndex = type;
  FIO.value = worker.getFIO();
  age.value = worker.getAge();
  special.value = worker.getSpecial();
  sex.value=worker.getSex();
  salary.value = worker.getSalary();
  company.value = worker.getCompany();
}



function getParam(name) {
  var param = location.search.split(name + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function changeType() {
  var id = selectedValue.options[selectedValue.selectedIndex].value;
  if(id == "0"){
  document.getElementById("exampleInputOffice").hidden=false
  document.getElementById("exampleInputPosition").hidden=true
}
  else{
    document.getElementById("exampleInputOffice").hidden=true
    document.getElementById("exampleInputPosition").hidden=false
  }
}

function GetWorker(){
  if(id!=null){
    var func = function() {
        if (this.readyState == 4 && this.status == 200) {
          var obj = JSON.parse(this.responseText);
          if(obj["office"]==undefined){
               var worker = new WorkerTransportInc();
               worker.jsonToObject(obj);
                FormFromClass(worker,0);
                changeType();
          }
          else{
              var worker = new WorkerIndustrialInc();
              worker.jsonToObject(obj);
                FormFromClass(worker,1);
                changeType();
          }
         }};
    Get(id, func);
}}
