import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-home-work04',
	templateUrl: './home-work04.component.html',
	styleUrls: ['./home-work04.component.scss']
})
export class HomeWork04Component implements OnInit {
	public arrUsers: obgUsers[] = [
		{
			firstName: 'roman',
			lastName: 'muzychka',
			number: 380961234567
		},
		{
			firstName: 'galuna',
			lastName: 'muzychka',
			number: 380967654321
		},
		{
			firstName: 'olesya',
			lastName: 'kupets',
			number: 380967777777
		}
	]
	public addUsers = false;
	public firstNameAdd!: string;
	public lastNameAdd!: string;
	public numberNameAdd!: number;
	public editUsers = false;
	public editFirstNameAdd!: string;
	public editLastNameAdd!: string;
	public editNumberNameAdd!: number;
	public indexArr!: number;
	public searchUser = ''
	public type!: string




	constructor() { }

	ngOnInit(): void {
	}
	deleteUser(index: number): void {
		this.arrUsers.splice(index, 1);
	}
	addUser(): void {
		this.addUsers = true;
	}
	addArrayUsers(): void {
		this.arrUsers.push({ firstName: this.firstNameAdd, lastName: this.lastNameAdd, number: this.numberNameAdd });
		this.firstNameAdd = '';
		this.lastNameAdd = '';
		this.numberNameAdd = 38;
		this.addUsers = false;
	}
	editUser(index: number): void {
		this.editUsers = true;
		this.indexArr = index;
		this.editFirstNameAdd = this.arrUsers[index].firstName;
		this.editLastNameAdd = this.arrUsers[index].lastName;
		this.editNumberNameAdd = this.arrUsers[index].number;
	}
	editArrayUsers(): void {
		this.arrUsers[this.indexArr].firstName = this.editFirstNameAdd;
		this.arrUsers[this.indexArr].lastName = this.editLastNameAdd;
		this.arrUsers[this.indexArr].number = this.editNumberNameAdd;
		this.editUsers = false;
	}
	offModal(): void {
		this.editUsers = false;
		this.addUsers = false;
	}
	sort(type: string): void {
		this.type = type
	}

}
export interface obgUsers {
	firstName: string;
	lastName: string;
	number: number;
}
