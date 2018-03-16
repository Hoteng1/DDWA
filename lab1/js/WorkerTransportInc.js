function WorkerTransportInc(experience, position)
{
	Worker.call(this);
	this.experience=experience;
	this.position=position;
}	

WorkerTransportInc.prototype=Object.create(Worker.prototype);

WorkerTransportInc.prototype.jsonToObject=function(json)
{
    var obj=json;
    this.FIO=obj["FIO"];
    this.age=obj["age"];
	this.special=obj["special"];
	this.sex=obj["sex"];
	this.salary=obj["salary"];
    this.company=obj["company"];
    this.experience=obj["experience"];
    this.position=obj["position"];
}
	this.setExperience=function(experience)
	{
		this.experience=experience;
	}
	
	this.getExperience=function()
	{
		return experience;
	}
	
	this.setPosition=function(position)
	{
		this.position=position;
	}
	
	this.getОffice=function()
	{
		return position;
	}
