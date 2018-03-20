"use strict"
class WorkerTransportInc extends Worker {
	constructor(experience, position) {
		super();
		this.experience = experience;
		this.position = position;
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
		this.position = obj["position"];
	}
	setExperience(experience) {
		this.experience = experience;
	}
	getExperience() {
		return this.experience;
	}
	setPosition(position) {
		this.position = position;
	}
	getPosition() {
		return this.position;
	}
}



	
	
	

