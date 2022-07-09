import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-cenzor',
	templateUrl: './cenzor.component.html',
	styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

	public wordsHere!: string;
	public badWords: string = '';
	public tetxCenzor!: string;
	public a: Array<string> = [];
	public brRed = false;
	public brRed1 = false;
	public place1: string = 'write here';
	public place2: string = 'text here';

	constructor() { }

	ngOnInit(): void {
	}
	add(): void {
		if (!this.wordsHere) {
			this.place1 = 'Please write a word!';
			this.brRed = true;
		} else {
			this.badWords += this.wordsHere + ','
			this.place1 = 'write here';
			this.brRed = false;
			this.a.push(this.wordsHere);
			this.wordsHere = '';
		}
	}

	reset(): void {
		this.badWords = '';
	}


	cenzor(): void {
		if (!this.tetxCenzor) {
			this.place2 = 'Please write a text!';
			this.brRed1 = true;
		}
		else {
			this.brRed1 = false;
			this.place2 = 'text here';
		}
		this.textCenzor();
	}

	textCenzor(): void {
		for (let i = 0; i < this.a.length; i++) {
			let regExp: RegExp = new RegExp(this.a[i], 'g')
			if (regExp.test(this.tetxCenzor)) {
				let b: string = '*'
				for (let j = 1; j < this.a[i].length; j++) {
					b += "*"
				}
				this.tetxCenzor = this.tetxCenzor.replace(regExp, `${b}`)
			}
		}
	}


}
