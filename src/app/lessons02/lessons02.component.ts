import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lessons02',
	templateUrl: './lessons02.component.html',
	styleUrls: ['./lessons02.component.scss']
})
export class Lessons02Component implements OnInit {

	public newLogin!: string;
	public newPassword!: string;
	public newEmail!: string;
	public arrUsers: Array<{
		login: string,
		password: string,
		email: string
	}> = [];
	public nameRegExp: RegExp = /^[A-Za-z]{4,16}$/;
	public mailRegExp: RegExp = /^[A-Za-z0-9.-]{1,}@[A-Za-z]{1,}.[A-Za-z]{1,}$/;
	public passRegExp: RegExp = /^[A-Za-z0-9.-_]{4,16}$/;
	public editIndex!: number;
	public editStatus: boolean = false;


	constructor() { }

	ngOnInit(): void {
	}
	regExp(): void {
		this.arrUsers.push({ login: this.newLogin, password: this.newPassword, email: this.newEmail });
		this.newLogin = '';
		this.newPassword = '';
		this.newEmail = '';
	}

	addUser(): void {
		let testPass = this.passRegExp.test(this.newPassword)
		let testMail = this.mailRegExp.test(this.newEmail)
		let testLogin = this.nameRegExp.test(this.newLogin)
		if (testLogin && testMail && testPass) {
			this.regExp()
		}
	}
	deleteUser(index: number): void {
		this.arrUsers.splice(index, 1);
	}
	editUser(index: number): void {
		this.newLogin = this.arrUsers[index].login;
		this.newPassword = this.arrUsers[index].password;
		this.newEmail = this.arrUsers[index].email;
		this.editIndex = index;
		this.editStatus = true
	}
	editUser1(): void {
		this.arrUsers[this.editIndex].login = this.newLogin;
		this.arrUsers[this.editIndex].password = this.newPassword;
		this.arrUsers[this.editIndex].email = this.newEmail;
		this.editStatus = false;
		this.newLogin = '';
		this.newPassword = '';
		this.newEmail = '';
	}

}
