"use strict"
class WorkerIndustrialInc extends WorkerBase {
	constructor(experience, office) {
		super();
		this.experience = experience;
		this.office = office;
	}
	jsonToObject(json) {
		var obj = json;
		this.FIO = obj["FIO"];
		this.age = obj["age"];
		this.special = obj["special"];
		this.sex = obj["sex"];
		this.salary = obj["salary"];
		this.company = obj["company"];
		this.experience = obj["experience"];
		this.office = obj["office"];
	}
	setExperience(experience) {
		this.experience = experience;
	}
	getExperience() {
		return this.experience;
	}
	setОffice(office) {
		this.office = office;
	}
	getОffice() {
		return this.office;
	}
}


	
	
	

