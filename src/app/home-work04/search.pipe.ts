import { Pipe, PipeTransform } from '@angular/core';
import { obgUsers } from './home-work04.component';

@Pipe({
	name: 'search'
})
export class SearchPipe implements PipeTransform {

	transform(value: obgUsers[], searchUser: string): obgUsers[] {
		if (!value) return [];
		if (!searchUser) return value;
		console.log(value.filter(arrUsers => arrUsers.firstName.toLowerCase().includes(searchUser.toLowerCase())))
		if (value.filter(arrUsers => arrUsers.firstName.toLowerCase().includes(searchUser.toLowerCase())).length !== 0) {
			return value.filter(arrUsers => arrUsers.firstName.toLowerCase().includes(searchUser.toLowerCase()))
		}
		if (value.filter(arrUsers => arrUsers.lastName.toLowerCase().includes(searchUser.toLowerCase())).length !== 0) {
			return value.filter(arrUsers => arrUsers.lastName.toLowerCase().includes(searchUser.toLowerCase()))
		}
		return value.filter(arrUsers => arrUsers.number.toString().toLowerCase().includes(searchUser.toLowerCase()))
	}
}
