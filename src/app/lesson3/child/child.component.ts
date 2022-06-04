import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
	selector: 'app-child',
	templateUrl: './child.component.html',
	styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
	@Input() userName!: string;
	@Output() fromChild = new EventEmitter<number>()


	constructor() { }

	ngOnInit(): void {

	}
	countNum(): void {
		this.fromChild.emit(2)
	}

}
