"use strict"

    let FIO = document.getElementById("exampleInputFIO");
    let age = document.getElementById("exampleInputAge");
    let special = document.getElementById("exampleInputSpecial");
    let sex = document.getElementById("exampleFormControlSex");
    let salary = document.getElementById("exampleInputSalary");
    let company = document.getElementById("exampleInputCompany");
    let experience = document.getElementById("exampleInputExperience");
    let office = document.getElementById("exampleInputOffice");
    let position = document.getElementById("exampleInputPosition");
    let id = getParam("id");
    let selectedValue = document.getElementById("exampleFormControlType");
    let worker;

function Save(type){
    
  worker = WorkerFromForm(type);
  if(id!=null) Put(id,worker);
  else Post(worker);
}

function WorkerFromForm(type){
    let worker
  if(type === 'WorkerIndustrialInc'){
      alert("WorkerIndustrialInc");
       worker = new WorkerIndustrialInc(experience.value, office.value);

  }
  else{
       worker = new WorkerTransportInc(experience.value, position.value);
  }
  worker.setFIO(FIO.value);
  worker.setAge(age.value);
  worker.setSpecial(special.value);
  worker.setSex( sex[sex.selectedIndex].text);
  worker.setSalary(salary.value);
  worker.setCompany(company.value);
  return worker;
}



function FormFromClass(worker, type){
    
  if(type == '1'){
      experience.value = worker.getExperience();
      office.value = worker.getОffice();
      selectedValue.selectedIndex = 0;
  }
  else{
      
    
      experience.value = worker.getExperience();
      position.value = worker.getPosition();
      selectedValue.selectedIndex = 1;
      
  }
  
  
  FIO.value = worker.getFIO();
  age.value = worker.getAge();
  special.value = worker.getSpecial();
  setSelectValue(worker.getSex());
  salary.value = worker.getSalary();
  company.value = worker.getCompany();
  
}



function getParam(name) {
  var param = location.search.split(name + '=')[1];
  return param !== undefined ? param.split('&')[0] : null;
}

function setSelectValue(name) {
    for(let i = 0; i < sex.length; i++) {
     debugger;
       if(sex[i].text == name) {
           sex.selectedIndex = i
           break;
     }}
 }
function changeType() {

  var id = selectedValue.options[selectedValue.selectedIndex].value;
   if(id === "WorkerIndustrialInc"){
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
    let func = function(obj) {
          debugger;
          if(obj["office"]==undefined){
               worker = new WorkerTransportInc();
               worker.jsonToObject(obj);
                FormFromClass(worker,0);
                changeType();
          }
          else{
              worker = new WorkerIndustrialInc();
              worker.jsonToObject(obj);
                FormFromClass(worker,1);
                changeType();
                
          }
         };
    Get(id, func);
}}
