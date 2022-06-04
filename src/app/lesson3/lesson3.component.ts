import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson3',
	templateUrl: './lesson3.component.html',
	styleUrls: ['./lesson3.component.scss']
})
export class Lesson3Component implements OnInit {
	public myName!: string
	public count!: number


	constructor() { }

	ngOnInit(): void {
	}

	getCount(data: number): void {
		this.count = data;
	}

}
