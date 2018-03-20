"use strict"
class Worker {
	constructor() {
		this.FIO ;
		this.age ;
		this.special ;
		this.sex ;
		this.salary ;
		this.company;

		this.setFIO = function (FIO) {
			this.FIO = FIO;
		};
		this.getFIO = function () {
			return this.FIO;
		};
		this.setAge = function (age) {
			this.age = age;
		};
		this.getAge = function () {
			return this.age;
		};
		this.setSpecial = function (special) {
			this.special = special;
		};
		this.getSpecial = function () {
			return this.special;
		};
		this.setSex = function (sex) {
			this.sex = sex;
		};
		this.getSex = function () {
			return this.sex;
		};
		this.setSalary = function (salary) {
			this.salary = salary;
		};
		this.getSalary = function () {
			return this.salary;
		};
		this.setCompany = function (company) {
			this.company = company;
		};
		this.getCompany = function () {
			return this.company;
		};
	}
}






