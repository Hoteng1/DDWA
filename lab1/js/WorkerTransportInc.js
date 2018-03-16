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
    WorkerTransportInc.prototype.setExperience=function(experience)
	{
		this.experience=experience;
	}
	
	WorkerTransportInc.prototype.getExperience=function()
	{
        
		return this.experience;
	}
	
	WorkerTransportInc.prototype.setPosition=function(position)
	{
		this.position=position;
	}
	
	WorkerTransportInc.prototype.getPosition=function()
	{
		return this.position;
	}
