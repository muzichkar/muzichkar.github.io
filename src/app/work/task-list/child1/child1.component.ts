import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-child1',
	templateUrl: './child1.component.html',
	styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit {

	@Input() userName = [{ nameUse: '', boolean: false }];
	@Output() fromChild = new EventEmitter<number>()

	constructor() { }

	ngOnInit(): void {
	}

	editTasck(index: number): void {
		this.fromChild.emit(index);
	}
	deleteTasck(index: number): void {
		this.userName.splice(index, 1);
	}
	checkboxClick(index: number): void {
		this.userName[index].boolean = !this.userName[index].boolean;
	}
}
