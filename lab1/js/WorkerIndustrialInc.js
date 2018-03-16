"use strict"
function WorkerIndustrialInc(experience, office)
{
	Worker.call(this);
	this.experience=experience;
	this.office=office;
}

WorkerIndustrialInc.prototype=Object.create(Worker.prototype);

WorkerIndustrialInc.prototype.jsonToObject=function(json)
{
    var obj=json;
    this.FIO=obj["FIO"];
    this.age=obj["age"];
	this.special=obj["special"];
	this.sex=obj["sex"];
	this.salary=obj["salary"];
    this.company=obj["company"];
    this.experience=obj["experience"];
    this.office=obj["office"];
}
	WorkerIndustrialInc.prototype.setExperience=function(experience)
	{
		this.experience=experience;
	}
	
	WorkerIndustrialInc.prototype.getExperience=function()
	{
		return this.experience;
	}
	
	WorkerIndustrialInc.prototype.setОffice=function(office)
	{
		this.office=office;
	}
	
	WorkerIndustrialInc.prototype.getОffice=function()
	{
		return this.office;
	}
