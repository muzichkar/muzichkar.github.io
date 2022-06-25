import { Pipe, PipeTransform } from '@angular/core';
import { obgUsers } from './home-work04.component';

@Pipe({
	name: 'sort'
})
export class SortPipe implements PipeTransform {

	transform(value: obgUsers[], sort: string): obgUsers[] {
		if (!value) return [];
		if (!sort) return value;

		if (sort === 'fn-up') {
			return value.sort((a, b) => (a.firstName > b.firstName) ? 1 : ((a.firstName < b.firstName) ? -1 : 0))
		}
		if (sort === 'ln-up') {
			return value.sort((a, b) => (a.lastName > b.lastName) ? 1 : ((a.lastName < b.lastName) ? -1 : 0))
		}
		if (sort === 'ln-down') {
			return value.sort((a, b) => (a.lastName < b.lastName) ? 1 : ((a.lastName > b.lastName) ? -1 : 0))
		}
		if (sort === 'num-up') {
			return value.sort((a, b) => (a.number > b.number) ? 1 : ((a.number < b.number) ? -1 : 0))
		}
		if (sort === 'num-down') {
			return value.sort((a, b) => (a.number < b.number) ? 1 : ((a.number > b.number) ? -1 : 0))
		}
		return value.sort((a, b) => (a.firstName < b.firstName) ? 1 : ((a.firstName > b.firstName) ? -1 : 0))
	}
}
