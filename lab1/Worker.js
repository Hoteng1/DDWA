function Worker(FIO,age,special,sex,salary,company)
{
	this.FIO=FIO;
	this.age=age;
	this.special=special;
	this.sex=sex;
	this.salary=salary;
	this.company=company;
	
	this.setFIO=function(FIO){
		this.FIO=FIO;
	}
	
	this.getFIO=function(){
		return this.FIO;
	}
	
	this.setAge=function(age){
		this.age=age;
	}
	
	this.getAge=function(){
		return this.age;
	}
	
	this.setSpecial=function(special){
		this.special=special;
	}
	
	this.getSpecial=function(){
		return this.special;
	}
	
	this.setSex=function(sex){
		this.sex=sex;
	}
	
	this.getSex=function(){
		return this.sex;
	}
	
	this.setSalary=function(salary){
		this.salary=salary;
	}
	
	this.getSalary=function(){
		return this.salary;
	}
	
	this.setCompany=function(company){
		this.company=company;
	}
	
	this.getCompany=function(){
		return this.company;
	}
	
	
}

function WorkerIndustrialInc(experience, office)
{
	Worker.call(this);
	this.experience=experience;
	this.office=office;
	
	this.setExperience=function(experience)
	{
		this.experience=experience;
	}
	
	this.getExperience=function()
	{
		return experience;
	}
	
	this.setОffice=function(office)
	{
		this.office=office;
	}
	
	this.getОffice=function()
	{
		return office;
	}
}

function WorkerTransportInc(experience, position)
{
	Worker.call(this);
	this.experience=experience;
	this.position=position;
	
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
}


