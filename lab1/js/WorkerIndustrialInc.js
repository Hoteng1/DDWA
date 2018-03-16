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
	WorkerTransportInc.prototype.setExperience=function(experience)
	{
		this.experience=experience;
	}
	
	WorkerTransportInc.prototype.getExperience=function()
	{
		return this.experience;
	}
	
	WorkerTransportInc.prototype.setОffice=function(office)
	{
		this.office=office;
	}
	
	WorkerTransportInc.prototype.getОffice=function()
	{
		return this.office;
	}
