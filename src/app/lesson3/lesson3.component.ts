import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson3',
	templateUrl: './lesson3.component.html',
	styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {
	public myName!: string;
	public indexArr!: number;
	public editName!: string
	public arrTasks = [{ nameUse: 'scc', boolean: false }];
	public obgTasks = { nameUse: 'scc', boolean: false };


	constructor() { }

	ngOnInit(): void {
	}

	getArr(data: number): void {
		this.indexArr = data;
		this.editName = this.arrTasks[this.indexArr].nameUse
	}

	textObj() {
		this.obgTasks = { nameUse: this.myName, boolean: false };
		this.arrTasks.push(this.obgTasks);
		this.myName = ''
	}

	saveTasck(): void {
		this.arrTasks[this.indexArr].nameUse = this.editName;
		this.editName = ''
	}
}
