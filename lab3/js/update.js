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
    let workerObj;

function Save(type){
    
  workerObj = WorkerFromForm(type);
  if(id!=null) Put(id,workerObj);
  else Post(workerObj);
}

function WorkerFromForm(type){
    
  if(type === 'WorkerIndustrialInc'){
      alert("WorkerIndustrialInc");
      workerObj = new WorkerIndustrialInc(experience.value, office.value);

  }
  else{
    workerObj = new WorkerTransportInc(experience.value, position.value);
  }
  workerObj.setFIO(FIO.value);
  workerObj.setAge(age.value);
  workerObj.setSpecial(special.value);
  workerObj.setSex( sex[sex.selectedIndex].text);
  workerObj.setSalary(salary.value);
  workerObj.setCompany(company.value);
  return workerObj;
}



function FormFromClass(workerObj, type){
    
  if(type == '1'){
      experience.value = workerObj.getExperience();
      office.value = workerObj.getОffice();
      selectedValue.selectedIndex = 0;
  }
  else{
      
    
      experience.value = workerObj.getExperience();
      position.value = workerObj.getPosition();
      selectedValue.selectedIndex = 1;
      
  }
  
  
  FIO.value = workerObj.getFIO();
  age.value = workerObj.getAge();
  special.value = workerObj.getSpecial();
  setSelectValue(workerObj.getSex());
  salary.value = workerObj.getSalary();
  company.value = workerObj.getCompany();
  
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
              workerObj = new WorkerTransportInc();
              workerObj.jsonToObject(obj);
                FormFromClass(workerObj,0);
                changeType();
          }
          else{
            workerObj = new WorkerIndustrialInc();
            workerObj.jsonToObject(obj);
                FormFromClass(workerObj,1);
                changeType();
                
          }
         };
    Get(id, func);
}}
